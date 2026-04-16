// Lógica de progreso y estado local
const PROGRESS_KEY = 'python_course_progress';

// Obtiene el estado actual guardado
function getProgressData() {
    try {
        return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

// Marca una leccion como completada
function markLessonAsCompleted(lessonId) {
    const data = getProgressData();
    data[lessonId] = true;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

// Verifica si la lección actual (basada en URL/ID) está completada
function isLessonCompleted(lessonId) {
    return !!getProgressData()[lessonId];
}

// Actualiza las UI de barras de progreso global
function updateGlobalProgress(courseData) {
    if (!courseData || !courseData.modulos) return;
    
    let totalLecciones = 0;
    let leccionesCompletadas = 0;
    const progressData = getProgressData();

    courseData.modulos.forEach(modulo => {
        modulo.lecciones.forEach(leccion => {
            totalLecciones++;
            if (progressData[leccion.id]) {
                leccionesCompletadas++;
            }
        });
    });

    const porcentaje = totalLecciones === 0 ? 0 : Math.round((leccionesCompletadas / totalLecciones) * 100);
    
    const progressBar = document.getElementById('global-progress-bar');
    const progressText = document.getElementById('global-progress-text');
    
    if (progressBar) progressBar.style.width = `${porcentaje}%`;
    if (progressText) progressText.innerText = `${porcentaje}%`;
}

// Exponer de forma global
window.updateGlobalProgress = updateGlobalProgress;
window.markLessonAsCompleted = markLessonAsCompleted;
window.isLessonCompleted = isLessonCompleted;
