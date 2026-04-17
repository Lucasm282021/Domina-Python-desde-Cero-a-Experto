// editor.js
// Manejo de la inicialización y ejecución del entorno Pyodide + CodeMirror
// Incluye soporte interactivo para input() de Python mediante UI integrada en la consola.

let pyodideInstance = null;
let codeMirrorEditor = null;

// ══════════════════════════════════════════════════════════════════════════════
// UTILIDADES GLOBALES
// ══════════════════════════════════════════════════════════════════════════════

/** Escapa caracteres HTML especiales para mostrar en innerHTML de forma segura. */
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
window.escapeHtml = escapeHtml;

/**
 * Transforma el código del usuario para que las llamadas a input() sean
 * awaitable, compatible con runPythonAsync de Pyodide.
 * Detecta ocurrencias de `input(` a nivel de código (no dentro de strings
 * ni comentarios, con heurística simple) y las reemplaza por `await input(`.
 */
window._transformForInput = function(code) {
    const hasInput = /\binput\s*\(/.test(code);
    if (!hasInput) return { code, hasInput: false };

    // Procesamos línea por línea para evitar reemplazos dentro de comentarios.
    const transformed = code.split('\n').map(line => {
        const commentIdx = line.indexOf('#');
        if (commentIdx === 0) return line; // Línea de puro comentario
        const codePart    = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
        const commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';
        const transformedCode = codePart.replace(/\binput\s*\(/g, 'await input(');
        return transformedCode + commentPart;
    }).join('\n');

    return { code: transformed, hasInput: true };
};

// ══════════════════════════════════════════════════════════════════════════════
// SISTEMA DE INPUT INTERACTIVO
// ══════════════════════════════════════════════════════════════════════════════

// Estado del input activo (qué consola está esperando entrada del usuario)
const _inputState = {
    resolver: null,          // Función resolve() de la Promise pendiente
    consoleId: 'console-output',
    inputRowId: 'console-input-row',
    promptSpanId: 'console-input-prompt',
    fieldId: 'console-input-field',
};

/**
 * Cambia la consola activa para el sistema de input.
 * Debe llamarse antes de ejecutar código en cada editor.
 */
window._setActiveConsole = function(consoleId, inputRowId, promptSpanId, fieldId) {
    _inputState.consoleId   = consoleId;
    _inputState.inputRowId  = inputRowId;
    _inputState.promptSpanId = promptSpanId;
    _inputState.fieldId     = fieldId;
};

/**
 * Handler JS llamado desde el override de input() en Python (vía Pyodide).
 * Muestra el prompt en la consola y una fila de texto para que el usuario escriba.
 * Devuelve una Promise que se resuelve cuando el usuario confirma su entrada.
 */
window._pyodide_input_handler = function(prompt) {
    return new Promise((resolve) => {
        _inputState.resolver = resolve;

        const consoleEl = document.getElementById(_inputState.consoleId);
        const inputRow  = document.getElementById(_inputState.inputRowId);
        const promptEl  = document.getElementById(_inputState.promptSpanId);
        const fieldEl   = document.getElementById(_inputState.fieldId);

        // Mostrar el texto del prompt en la consola (en amarillo estilo terminal)
        if (consoleEl && prompt) {
            consoleEl.innerHTML += `<span class="text-yellow-300">${escapeHtml(String(prompt))}</span>`;
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }

        // Mostrar la fila de input interactivo
        if (promptEl) promptEl.textContent = '';
        if (inputRow) {
            inputRow.classList.remove('hidden');
            inputRow.classList.add('flex');
        }
        if (fieldEl) {
            fieldEl.value = '';
            fieldEl.focus();
        }
    });
};

/**
 * Función de envío de la entrada del usuario.
 * Se llama al presionar Enter o el botón ↵.
 * Echa el valor a la consola y resuelve la Promise pendiente.
 */
window._submitConsoleInput = function(consoleId, inputRowId, fieldId) {
    const fieldEl   = document.getElementById(fieldId);
    const inputRow  = document.getElementById(inputRowId);
    const consoleEl = document.getElementById(consoleId);

    const val = fieldEl ? fieldEl.value : '';
    if (fieldEl) fieldEl.value = '';

    // Ocultar la fila de input
    if (inputRow) {
        inputRow.classList.add('hidden');
        inputRow.classList.remove('flex');
    }

    // Hacer eco del valor ingresado en la consola (en verde)
    if (consoleEl) {
        consoleEl.innerHTML += `<span class="text-green-300">${escapeHtml(val)}</span>\n`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    // Resolver la Promise (devolver el valor a Python)
    if (_inputState.resolver) {
        const resolve = _inputState.resolver;
        _inputState.resolver = null;
        resolve(val);
    }
};

/**
 * Registra los event listeners de una fila de input de consola.
 * @param {string} consoleId - ID del <pre> de la consola
 * @param {string} inputRowId - ID del div contenedor de la fila de input
 * @param {string} fieldId - ID del <input type="text">
 * @param {string} submitBtnId - ID del botón de envío
 */
function registerInputRowListeners(consoleId, inputRowId, fieldId, submitBtnId) {
    const submitBtn = document.getElementById(submitBtnId);
    const fieldEl   = document.getElementById(fieldId);

    const doSubmit = () => window._submitConsoleInput(consoleId, inputRowId, fieldId);

    if (submitBtn) submitBtn.addEventListener('click', doSubmit);
    if (fieldEl) {
        fieldEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSubmit();
            }
        });
    }
}
// Exponer globalmente para que el script inline de leccion.html pueda usarla
window._registerInputRowListeners = registerInputRowListeners;


// ══════════════════════════════════════════════════════════════════════════════
// INICIALIZACIÓN PRINCIPAL (DOMContentLoaded)
// ══════════════════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", async () => {
    const defaultCode = document.getElementById("code-editor").value;

    // 1. Inicializar CodeMirror
    codeMirrorEditor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "python",
        theme: "dracula",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        autoCloseBrackets: true,
    });
    window.codeMirrorEditor = codeMirrorEditor;

    // 2. Elementos del DOM
    const runBtn        = document.getElementById("run-code-btn");
    const pyodideLoader = document.getElementById("pyodide-loader");
    const consoleOutput = document.getElementById("console-output");
    const clearConsole  = document.getElementById("clear-console");
    const resetBtn      = document.getElementById("reset-code-btn");
    const loadingOverlay = document.getElementById("loading-overlay");
    const loadingText   = document.getElementById("loading-text");

    // Función para manejar print() en Pyodide → nuestro div
    function appendOutput(text) {
        if (text === undefined) return;
        consoleOutput.innerHTML += escapeHtml(text) + "\n";
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // 3. Inicializando Pyodide
    try {
        pyodideInstance = await loadPyodide({
            stdout: (text) => appendOutput(text),
            stderr: (text) => {
                consoleOutput.innerHTML += `<span class="text-red-400">${escapeHtml(text)}</span>\n`;
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
            }
        });
        window.pyodideInstance = pyodideInstance;

        // ── Instalar el override de input() en Pyodide ──────────────────────
        // Reemplaza builtins.input con una función async que llama al handler JS.
        // Como usamos runPythonAsync, top-level `await` está habilitado y
        // Pyodide convierte automáticamente JS Promises en awaitables de Python.
        await pyodideInstance.runPythonAsync(`
import builtins
from js import window as _js_window

async def __py_input_interactive(prompt=""):
    """Override de input() que muestra un campo en la UI del navegador."""
    result = await _js_window._pyodide_input_handler(str(prompt) if prompt else "")
    return str(result) if result is not None else ""

builtins.input = __py_input_interactive
`);
        // ─────────────────────────────────────────────────────────────────────

        loadingText.innerText = "¡Listo!";
        setTimeout(() => { loadingOverlay.classList.add('hidden'); }, 500);

    } catch (e) {
        loadingText.innerText = "Error cargando Python";
        loadingText.classList.add('text-red-500');
        console.error("Pyodide no pudo inicializarse", e);
    }

    // 4. Registrar listeners de la fila de input de la consola PRINCIPAL (teoría)
    registerInputRowListeners(
        'console-output',
        'console-input-row',
        'console-input-field',
        'console-input-submit'
    );

    // 5. Correr Código (editor de teoría)
    runBtn.addEventListener("click", async () => {
        if (!pyodideInstance) return;

        const rawCode = codeMirrorEditor.getValue();
        consoleOutput.innerHTML = "";

        // Cancelar y ocultar cualquier input pendiente
        _inputState.resolver = null;
        const inputRow = document.getElementById('console-input-row');
        if (inputRow) { inputRow.classList.add('hidden'); inputRow.classList.remove('flex'); }

        // Apuntar el sistema de input a esta consola
        window._setActiveConsole(
            'console-output',
            'console-input-row',
            'console-input-prompt',
            'console-input-field'
        );

        // Redirigir stdout/stderr a esta consola
        pyodideInstance.setStdout({ batched: (t) => appendOutput(t) });
        pyodideInstance.setStderr({ batched: (t) => {
            consoleOutput.innerHTML += `<span class="text-red-400">${escapeHtml(t)}</span>\n`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }});

        // Transformar código para compatibilidad con input() async
        const { code } = window._transformForInput(rawCode);

        runBtn.classList.add("opacity-70", "cursor-wait");
        pyodideLoader.classList.remove("hidden");

        let success = false;
        try {
            await pyodideInstance.runPythonAsync(code);
            window._practiceCompleted = true;
            success = true;
        } catch (err) {
            window._practiceCompleted = false;
            consoleOutput.innerHTML += `<span class="text-red-400 font-bold">Error:</span>\n<span class="text-red-400">${escapeHtml(String(err))}</span>`;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        } finally {
            runBtn.classList.remove("opacity-70", "cursor-wait");
            pyodideLoader.classList.add("hidden");
        }

        // Notificar al controlador de la lección
        if (typeof window._onCodeRan === 'function') window._onCodeRan(success);
    });

    // 6. Utilidades
    clearConsole.addEventListener("click", () => {
        consoleOutput.innerHTML = "";
        // También ocultar input si estaba visible
        const inputRow = document.getElementById('console-input-row');
        if (inputRow) { inputRow.classList.add('hidden'); inputRow.classList.remove('flex'); }
        _inputState.resolver = null;
    });

    resetBtn.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres restablecer el código al estado original? Se perderán tus cambios.")) {
            codeMirrorEditor.setValue(defaultCode);
            consoleOutput.innerHTML = "";
        }
    });
});
