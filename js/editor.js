// editor.js
// Manejo de la inicialización y ejecución del entorno Pyodide + CodeMirror

let pyodideInstance = null;
let codeMirrorEditor = null;

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
    window.codeMirrorEditor = codeMirrorEditor; // Exponer globalmente
    
    // 2. Elementos del DOM
    const runBtn = document.getElementById("run-code-btn");
    const pyodideLoader = document.getElementById("pyodide-loader");
    const consoleOutput = document.getElementById("console-output");
    const clearConsole = document.getElementById("clear-console");
    const resetBtn = document.getElementById("reset-code-btn");
    const loadingOverlay = document.getElementById("loading-overlay");
    const loadingText = document.getElementById("loading-text");

    // Función para manejar print en Pyodide para que vaya a nuestro div
    function appendOutput(text) {
        if(text === undefined) return;
        consoleOutput.innerHTML += text + "\n";
        // Auto scroll
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // 3. Inicializando Pyodide
    try {
        pyodideInstance = await loadPyodide({
            stdout: (text) => appendOutput(text),
            stderr: (text) => appendOutput(`<span class="text-red-400">${text}</span>`)
        });
        
        loadingText.innerText = "¡Listo!";
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);

    } catch (e) {
        loadingText.innerText = "Error cargando Python";
        loadingText.classList.add('text-red-500');
        console.error("Pyodide no pudo inicializarse", e);
    }

    // 4. Correr Código
    runBtn.addEventListener("click", async () => {
        if (!pyodideInstance) return;
        
        const code = codeMirrorEditor.getValue();
        consoleOutput.innerHTML = ""; // Limpiar output prev
        
        runBtn.classList.add("opacity-70", "cursor-wait");
        pyodideLoader.classList.remove("hidden");

        try {
            await pyodideInstance.runPythonAsync(code);
        } catch (err) {
            appendOutput(`<span class="text-red-400 font-bold">Error:</span>\n<span class="text-red-400">${err}</span>`);
        } finally {
            runBtn.classList.remove("opacity-70", "cursor-wait");
            pyodideLoader.classList.add("hidden");
        }
    });

    // 5. Utilidades
    clearConsole.addEventListener("click", () => {
        consoleOutput.innerHTML = "";
    });

    resetBtn.addEventListener("click", () => {
        if(confirm("¿Seguro que quieres restablecer el código al estado original? Se perderán tus cambios.")) {
            codeMirrorEditor.setValue(defaultCode);
            consoleOutput.innerHTML = "";
        }
    });
});
