// progress.js — Sistema de progreso con gates de validación
// Gate por lección: quiz OK + código ejecutado OK → lección completada
// Gate por módulo: todas las lecciones + quiz de módulo + desafío de código

// ══════════════════════════════════════════════════════════════════════════════
// 🛠️  MODO DESARROLLADOR — Cambiá a `false` cuando el sitio esté en producción
//     Con DEV_MODE = true:
//       • El progreso NO se guarda en localStorage (fresh state en cada recarga)
//       • Se muestra un badge flotante de aviso en pantalla
// ══════════════════════════════════════════════════════════════════════════════
const DEV_MODE = true;

const PROGRESS_KEY  = 'python_course_progress';
const QUIZ_KEY      = 'python_quiz_scores';     // { lessonId: score (0-100) }
const CODE_KEY      = 'python_code_done';        // { lessonId: true }
const MOD_QUIZ_KEY  = 'python_mod_quiz_scores';  // { moduloId: score }
const MOD_CODE_KEY  = 'python_mod_code_done';    // { moduloId: true }

// ─── Sesión temporal en memoria (solo se usa cuando DEV_MODE = true) ─────────
const _memStore = {};

// ─── Lectura/escritura genérica ─────────────────────────────────────────────
function _get(key) {
    if (DEV_MODE) {
        try { return JSON.parse(_memStore[key] || '{}'); } catch { return {}; }
    }
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; }
}
function _set(key, data) {
    if (DEV_MODE) {
        _memStore[key] = JSON.stringify(data);
        return;
    }
    localStorage.setItem(key, JSON.stringify(data));
}

// ─── Badge de aviso DEV ──────────────────────────────────────────────────────
if (DEV_MODE) {
    document.addEventListener('DOMContentLoaded', () => {
        const badge = document.createElement('div');
        badge.id = 'dev-mode-badge';
        badge.innerHTML = '🛠️ <strong>DEV MODE</strong> — El progreso no se guarda';
        Object.assign(badge.style, {
            position: 'fixed', bottom: '12px', left: '50%',
            transform: 'translateX(-50%)',
            background: '#f59e0b', color: '#1c1917',
            padding: '6px 16px', borderRadius: '999px',
            fontSize: '12px', fontWeight: '600',
            zIndex: '9999', boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            pointerEvents: 'none', whiteSpace: 'nowrap'
        });
        document.body.appendChild(badge);
    });
}


// ─── Estado de lección ─────────────────────────────────────────────────────
function getLessonQuizScore(lessonId)       { return _get(QUIZ_KEY)[lessonId] ?? null; }
function getLessonCodeDone(lessonId)        { return !!_get(CODE_KEY)[lessonId]; }
function isLessonCompleted(lessonId)        { return !!_get(PROGRESS_KEY)[lessonId]; }

function markLessonQuizPassed(lessonId, score) {
    const d = _get(QUIZ_KEY); d[lessonId] = score; _set(QUIZ_KEY, d);
    _tryCompleteLession(lessonId);
}

function markLessonCodeDone(lessonId) {
    const d = _get(CODE_KEY); d[lessonId] = true; _set(CODE_KEY, d);
    _tryCompleteLession(lessonId);
}

function _tryCompleteLession(lessonId) {
    const quizOk = (getLessonQuizScore(lessonId) ?? -1) >= 60;
    const codeOk = getLessonCodeDone(lessonId);
    if (quizOk && codeOk) {
        const d = _get(PROGRESS_KEY); d[lessonId] = true; _set(PROGRESS_KEY, d);
        return true;
    }
    return false;
}

// ─── Estado de módulo ──────────────────────────────────────────────────────
function getModuleQuizScore(moduloId)       { return _get(MOD_QUIZ_KEY)[moduloId] ?? null; }
function getModuleCodeDone(moduloId)        { return !!_get(MOD_CODE_KEY)[moduloId]; }

function markModuleQuizPassed(moduloId, score) {
    const d = _get(MOD_QUIZ_KEY); d[moduloId] = score; _set(MOD_QUIZ_KEY, d);
}

function markModuleCodeDone(moduloId) {
    const d = _get(MOD_CODE_KEY); d[moduloId] = true; _set(MOD_CODE_KEY, d);
}

function isModuleCompleted(moduloId) {
    const quizOk = (getModuleQuizScore(moduloId) ?? -1) >= 60;
    const codeOk = getModuleCodeDone(moduloId);
    return quizOk && codeOk;
}

function areAllLessonsCompleted(modulo) {
    return modulo.lecciones.every(l => isLessonCompleted(l.id));
}

// ─── Progreso global ───────────────────────────────────────────────────────
function getProgressData() { return _get(PROGRESS_KEY); }

function markLessonAsCompleted(lessonId) {
    const d = _get(PROGRESS_KEY); d[lessonId] = true; _set(PROGRESS_KEY, d);
}

function updateGlobalProgress(courseData) {
    if (!courseData?.modulos) return;
    let total = 0, completadas = 0;
    const pd = getProgressData();
    courseData.modulos.forEach(m => m.lecciones.forEach(l => {
        total++;
        if (pd[l.id]) completadas++;
    }));
    const pct = total === 0 ? 0 : Math.round((completadas / total) * 100);
    const bar  = document.getElementById('global-progress-bar');
    const text = document.getElementById('global-progress-text');
    if (bar)  bar.style.width = `${pct}%`;
    if (text) text.innerText  = `${pct}%`;
}

// ─── Helpers de estado visual ──────────────────────────────────────────────
function getLessonStatus(lessonId) {
    if (isLessonCompleted(lessonId)) return 'completed';
    const quizOk = (getLessonQuizScore(lessonId) ?? -1) >= 60;
    const codeOk = getLessonCodeDone(lessonId);
    if (quizOk && !codeOk) return 'needs_code';
    if (!quizOk && codeOk) return 'needs_quiz';
    if (quizOk && codeOk)  return 'pending_mark';
    return 'incomplete';
}

// ─── Exponer global ────────────────────────────────────────────────────────
Object.assign(window, {
    getProgressData, markLessonAsCompleted, isLessonCompleted,
    getLessonQuizScore, getLessonCodeDone,
    markLessonQuizPassed, markLessonCodeDone, getLessonStatus,
    getModuleQuizScore, getModuleCodeDone,
    markModuleQuizPassed, markModuleCodeDone,
    isModuleCompleted, areAllLessonsCompleted,
    updateGlobalProgress
});
