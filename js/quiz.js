// quiz.js
// Lógica para renderizar preguntas y calcular score

const quizData = [
    {
        question: "¿Cuál de las siguientes NO es una palabra reservada en Python?",
        options: ["def", "while", "function", "class"],
        correct: 2 // Índice de "function"
    },
    {
        question: "¿Cómo se define un bloque de código equivalente en Python?",
        options: ["Con llaves {}", "Con indentación", "Con begin / end", "Con corchetes []"],
        correct: 1
    },
    {
        question: "¿Qué estructura de datos NO permite elementos duplicados?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionCounter = document.getElementById("question-counter");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");
    
    const quizContainer = document.getElementById("quiz-container");
    const resultsPanel = document.getElementById("results-panel");
    const finalScore = document.getElementById("final-score");

    if(!quizContainer) return; // Not on quiz page

    function loadQuestion() {
        // Clear previous state
        optionsContainer.innerHTML = '';
        
        const currentQ = quizData[currentQuestion];
        questionCounter.innerText = `Pregunta ${currentQuestion + 1} de ${quizData.length}`;
        questionText.innerText = currentQ.question;

        currentQ.options.forEach((opt, idx) => {
            const label = document.createElement("label");
            label.className = "block cursor-pointer";
            label.innerHTML = `
                <div class="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition option-block">
                    <input type="radio" name="answer" value="${idx}" class="w-5 h-5 text-blue-600">
                    <span class="ml-3 text-gray-700 dark:text-gray-200 font-mono">${opt}</span>
                </div>
            `;
            
            // Visual feedback for checking
            const radio = label.querySelector('input');
            const block = label.querySelector('.option-block');
            
            radio.addEventListener('change', () => {
                document.querySelectorAll('.option-block').forEach(b => {
                    b.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20');
                    b.classList.add('border-gray-200', 'dark:border-gray-600');
                });
                
                if (radio.checked) {
                    block.classList.remove('border-gray-200', 'dark:border-gray-600');
                    block.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20');
                }
            });

            optionsContainer.appendChild(label);
        });
        
        if (currentQuestion === quizData.length - 1) {
            nextBtn.innerHTML = 'Finalizar Prueba <i class="fa-solid fa-flag-checkered"></i>';
        }
    }

    nextBtn.addEventListener("click", () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        
        if (!selected) {
            alert("Por favor, selecciona una respuesta antes de continuar.");
            return;
        }

        const answerChecked = parseInt(selected.value);
        if (answerChecked === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            // Show results
            quizContainer.classList.add('hidden');
            resultsPanel.classList.remove('hidden');
            
            const perc = Math.round((score / quizData.length) * 100);
            finalScore.innerText = `${perc}%`;
            
            // Si en un curso real, marcaríamos el módulo como superado
            if(perc >= 60) {
                 localStorage.setItem('python_course_completed', 'true');
            }
        }
    });

    // Iniciar con la primera pregunta
    loadQuestion();
});
