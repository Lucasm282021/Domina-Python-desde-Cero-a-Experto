// quiz_data.js — Preguntas de quiz por lección y por módulo + desafíos de código

window.LESSON_QUIZZES = {

  // ══════════════════  MÓDULO 1  ══════════════════
  m1_l1: {
    titulo: "Quiz: Variables y Tipos de Datos",
    preguntas: [
      { q: "¿Cuál de estos NO es un tipo de dato nativo en Python?",
        opts: ["int", "float", "char", "str"], correct: 2 },
      { q: "¿Qué función usas para conocer el tipo de una variable?",
        opts: ["typeof()", "type()", "getType()", "class()"], correct: 1 },
      { q: "¿Cuál es el valor de: type(True)?",
        opts: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'object'>"], correct: 2 },
      { q: "¿Cuál de estas asignaciones es INVÁLIDA en Python?",
        opts: ["x = 5", "x = 'hola'", "int x = 5", "x = 3.14"], correct: 2 },
      { q: "¿Qué imprime: print(type(3.0))?",
        opts: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"], correct: 1 }
    ]
  },

  m1_l2: {
    titulo: "Quiz: Control de Flujo",
    preguntas: [
      { q: "¿Cómo se define un bloque de código en Python?",
        opts: ["Con llaves {}", "Con indentación", "Con begin/end", "Con corchetes []"], correct: 1 },
      { q: "¿Qué genera range(3)?",
        opts: ["[1, 2, 3]", "[0, 1, 2, 3]", "[0, 1, 2]", "[3]"], correct: 2 },
      { q: "¿Cuál es la palabra correcta para 'sino si' en Python?",
        opts: ["else if", "elsif", "elseif", "elif"], correct: 3 },
      { q: "¿Qué instrucción detiene un bucle inmediatamente?",
        opts: ["stop", "exit", "break", "return"], correct: 2 },
      { q: "¿Cuántas veces imprime algo este código? for i in range(0,5,2): print(i)",
        opts: ["5", "2", "3", "4"], correct: 2 }
    ]
  },

  m1_l3: {
    titulo: "Quiz: Funciones y Scope",
    preguntas: [
      { q: "¿Con qué palabra reservada se define una función en Python?",
        opts: ["function", "func", "def", "fn"], correct: 2 },
      { q: "¿Qué retorna una función sin return explícito?",
        opts: ["0", "False", "None", ""], correct: 2 },
      { q: "Una variable creada dentro de una función tiene scope:",
        opts: ["Global", "Local", "Universal", "De clase"], correct: 1 },
      { q: "¿Qué imprime: print(len('Python'))?",
        opts: ["5", "6", "7", "Error"], correct: 1 },
      { q: "¿Cuál es la sintaxis correcta para un valor por defecto en un parámetro?",
        opts: ["def f(x = 0):", "def f(x : 0):", "def f(x ? 0):", "def f(x | 0):"], correct: 0 }
    ]
  },

  m1_l4: {
    titulo: "Quiz: Programación Orientada a Objetos",
    preguntas: [
      { q: "¿Qué método se llama automáticamente al crear un objeto?",
        opts: ["__start__", "__new__", "__init__", "__create__"], correct: 2 },
      { q: "¿Qué es 'self' dentro de un método de clase?",
        opts: ["Una variable global", "La clase misma", "La instancia actual", "El constructor"], correct: 2 },
      { q: "¿Cómo heredas de la clase 'Animal' al crear 'Perro'?",
        opts: ["class Perro extends Animal:", "class Perro(Animal):", "class Perro : Animal:", "class Perro implements Animal:"], correct: 1 },
      { q: "¿Qué palabra permite llamar al método del padre en una subclase?",
        opts: ["parent()", "super()", "base()", "this()"], correct: 1 },
      { q: "Los atributos definidos con 'self.x' son:",
        opts: ["De clase", "De instancia", "Estáticos", "Privados"], correct: 1 }
    ]
  },

  m1_l5: {
    titulo: "Quiz: Manejo de Errores",
    preguntas: [
      { q: "¿Qué bloque se usa para capturar excepciones en Python?",
        opts: ["try/catch", "try/except", "try/handle", "try/rescue"], correct: 1 },
      { q: "¿Qué bloque se ejecuta SIEMPRE, haya error o no?",
        opts: ["except", "else", "finally", "always"], correct: 2 },
      { q: "¿Qué error se lanza al dividir por cero?",
        opts: ["MathError", "DivisionError", "ZeroDivisionError", "ValueError"], correct: 2 },
      { q: "¿Qué bloque se ejecuta SOLO si NO ocurrió ningún error?",
        opts: ["finally", "always", "else", "success"], correct: 2 },
      { q: "¿Cómo capturas CUALQUIER excepción (no recomendado pero válido)?",
        opts: ["except Error:", "except *:", "except Exception:", "except All:"], correct: 2 }
    ]
  }
};

// ══════════════════  QUIZZES DE MÓDULO  ══════════════════
window.MODULE_QUIZZES = {

  modulo_1: {
    titulo: "Evaluación Final: Módulo 1 — Python Core",
    descripcion: "Demostras tus conocimientos sobre fundamentos, control de flujo, funciones, POO y manejo de errores.",
    preguntas: [
      { q: "¿Cuál NO es un tipo primitivo en Python?",
        opts: ["int", "float", "char", "bool"], correct: 2 },
      { q: "¿Qué imprime: print(10 // 3)?",
        opts: ["3.33", "3", "4", "Error"], correct: 1 },
      { q: "¿Qué estructura itera mientras una condición sea verdadera?",
        opts: ["for", "if", "while", "switch"], correct: 2 },
      { q: "¿Cómo se crea una lista de los cuadrados de 0 a 4 en una línea?",
        opts: ["[x**2 for x in range(5)]", "[x^2 from range(5)]", "list(x**2, range(5))", "map(x**2, 5)"], correct: 0 },
      { q: "¿Qué devuelve: type([])?",
        opts: ["<class 'tuple'>", "<class 'list'>", "<class 'array'>", "<class 'set'>"], correct: 1 },
      { q: "Un método especial de Python también es conocido como:",
        opts: ["Función lambda", "Método dunder o mágico", "Decorador", "Generador"], correct: 1 },
      { q: "¿Cuál es la forma correcta de capturar un ValueError?",
        opts: ["try: ... catch ValueError:", "try: ... except ValueError:", "handle ValueError:", "on ValueError:"], correct: 1 },
      { q: "¿Cuál es el resultado de: 'Py' * 3?",
        opts: ["'PyPyPy'", "Error", "6", "'Py3'"], correct: 0 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 1",
      descripcion: `Crea una clase <code>CuentaBancaria</code> que tenga:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Atributos: <code>titular</code> y <code>saldo</code> (inicialmente 0)</li>
          <li>Método <code>depositar(monto)</code> que sume al saldo</li>
          <li>Método <code>retirar(monto)</code> que reste del saldo, con manejo de error si el monto supera el saldo</li>
          <li>Método <code>mostrar_saldo()</code> que imprima el saldo actual</li>
        </ul>
        <p class="mt-3">Al final, crea una instancia, deposita 1000, retira 300 e imprime el saldo.</p>`,
      codigo_inicial: `# Desafío Final — Módulo 1: Python Core
# Crea la clase CuentaBancaria con los métodos indicados

class CuentaBancaria:
    def __init__(self, titular):
        self.titular = titular
        self.saldo = 0

    def depositar(self, monto):
        # Tu código aquí
        pass

    def retirar(self, monto):
        # Tu código aquí — maneja el caso de saldo insuficiente con try/except
        pass

    def mostrar_saldo(self):
        # Tu código aquí
        pass


# Prueba tu clase:
cuenta = CuentaBancaria("Lucas")
cuenta.depositar(1000)
cuenta.retirar(300)
cuenta.mostrar_saldo()
`
    }
  },

  modulo_2: {
    titulo: "Evaluación Final: Módulo 2 — Entorno y Herramientas",
    descripcion: "Demuestra tus conocimientos sobre entornos virtuales y control de versiones.",
    preguntas: [
      { q: "¿Para qué sirve un entorno virtual en Python?",
        opts: ["Para correr código más rápido", "Para aislar dependencias por proyecto", "Para compilar Python", "Para depurar errores"], correct: 1 },
      { q: "¿Qué comando crea un entorno virtual con el módulo venv?",
        opts: ["python new-env", "venv create myenv", "python -m venv myenv", "pip venv myenv"], correct: 2 },
      { q: "¿Qué archivo lista las dependencias de un proyecto Python?",
        opts: ["packages.json", "requirements.txt", "dependencies.txt", "setup.cfg"], correct: 1 },
      { q: "¿Qué comando de git registra los cambios en el historial?",
        opts: ["git save", "git commit", "git push", "git add"], correct: 1 },
      { q: "¿Cuál es la función de 'git push'?",
        opts: ["Crear una rama", "Descargar cambios", "Enviar commits al repositorio remoto", "Mezclar ramas"], correct: 2 },
      { q: "¿Qué comando descarga los cambios del repositorio remoto?",
        opts: ["git fetch", "git pull", "git clone", "Ambas a y b son correctas"], correct: 3 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 2",
      descripcion: `Simula un flujo de trabajo básico de Python con entornos. Escribe código que:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Defina una lista de dependencias (como strings) de un proyecto imaginario</li>
          <li>Imprima un "reporte" del entorno simulado con el nombre del proyecto y sus dependencias</li>
          <li>Calcule cuántas dependencias tiene</li>
        </ul>`,
      codigo_inicial: `# Desafío Final — Módulo 2: Entorno y Herramientas
# Simula un reporte de entorno de proyecto

proyecto = "Mi App Python"
dependencias = ["flask", "requests", "sqlalchemy", "python-dotenv"]

# Imprime el reporte del entorno
print(f"=== Entorno: {proyecto} ===")
# Tu código: itera e imprime cada dependencia con su número
# Tu código: imprime el total de dependencias
`
    }
  },

  modulo_3: {
    titulo: "Evaluación Final: Módulo 3 — Bases de Datos",
    descripcion: "Demuestra tus conocimientos sobre SQL y su integración con Python.",
    preguntas: [
      { q: "¿Qué instrucción SQL recupera datos de una tabla?",
        opts: ["GET", "FETCH", "SELECT", "READ"], correct: 2 },
      { q: "¿Qué cláusula filtra filas en SQL?",
        opts: ["FILTER", "WHERE", "HAVING", "IF"], correct: 1 },
      { q: "¿Qué módulo SQLite viene integrado en Python?",
        opts: ["pydb", "sqlite3", "dbapi", "psycopg2"], correct: 1 },
      { q: "¿Qué método ejecuta una consulta SQL en sqlite3?",
        opts: ["conn.run()", "cursor.execute()", "db.query()", "conn.send()"], correct: 1 },
      { q: "¿Qué hace commit() en una conexión de base de datos?",
        opts: ["Cierra la conexión", "Guarda los cambios permanentemente", "Inicia una transacción", "Borra los datos"], correct: 1 },
      { q: "¿Para qué sirve un ORM como SQLAlchemy?",
        opts: ["Para hacer queries más rápidas", "Para mapear tablas a clases Python", "Para cifrar la base de datos", "Para hacer backups"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 3",
      descripcion: `Simula operaciones de base de datos usando diccionarios en Python (ya que SQLite no está disponible en el navegador):
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Crea una lista de diccionarios que represente una tabla <code>usuarios</code> con campos: id, nombre, email</li>
          <li>Escribe una función <code>buscar_usuario(nombre)</code> que busque por nombre</li>
          <li>Escribe una función <code>agregar_usuario(nombre, email)</code> que agregue un nuevo usuario</li>
          <li>Prueba ambas funciones e imprime los resultados</li>
        </ul>`,
      codigo_inicial: `# Desafío Final — Módulo 3: Bases de Datos (Simulación con diccionarios)

usuarios = [
    {"id": 1, "nombre": "Ana", "email": "ana@example.com"},
    {"id": 2, "nombre": "Carlos", "email": "carlos@example.com"},
]

def buscar_usuario(nombre):
    # Retorna el usuario que coincide con el nombre, o None
    pass

def agregar_usuario(nombre, email):
    # Agrega un nuevo usuario con ID autoincrementado
    pass

# Prueba:
agregar_usuario("Lucas", "lucas@example.com")
print(buscar_usuario("Lucas"))
print(f"Total usuarios: {len(usuarios)}")
`
    }
  },

  modulo_4: {
    titulo: "Evaluación Final: Módulo 4 — Rutas de Especialización",
    descripcion: "Demuestra tus conocimientos sobre desarrollo web, data science y automatización.",
    preguntas: [
      { q: "¿Qué librería de Python es más conocida para manipular datos tabulares?",
        opts: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], correct: 1 },
      { q: "¿Qué método de Pandas carga un CSV?",
        opts: ["pd.load_csv()", "pd.read_csv()", "pd.open_csv()", "pd.import_csv()"], correct: 1 },
      { q: "En Django, ¿qué archivo define las URLs de la aplicación?",
        opts: ["routes.py", "urls.py", "paths.py", "views.py"], correct: 1 },
      { q: "¿Qué hace la librería requests en Python?",
        opts: ["Crea servidores web", "Hace peticiones HTTP", "Parsea HTML", "Gestiona bases de datos"], correct: 1 },
      { q: "¿Qué librería se usa para parsear HTML/XML en Python?",
        opts: ["html5lib", "lxml", "BeautifulSoup", "Todas las anteriores"], correct: 3 },
      { q: "¿Qué es un DataFrame en Pandas?",
        opts: ["Un gráfico de barras", "Una tabla bidimensional de datos", "Un tipo de función", "Una clase de modelo"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 4",
      descripcion: `Simula el análisis de datos de estudiantes:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Crea una lista de diccionarios con al menos 5 estudiantes (nombre, nota)</li>
          <li>Calcula el promedio de notas</li>
          <li>Encuentra al estudiante con la nota más alta</li>
          <li>Lista los estudiantes que aprobaron (nota ≥ 60)</li>
        </ul>`,
      codigo_inicial: `# Desafío Final — Módulo 4: Análisis de Datos de Estudiantes

estudiantes = [
    {"nombre": "Ana", "nota": 85},
    {"nombre": "Carlos", "nota": 52},
    {"nombre": "María", "nota": 91},
    {"nombre": "José", "nota": 78},
    {"nombre": "Laura", "nota": 45},
]

# 1. Calcula el promedio de notas
promedio = 0
# Tu código aquí

# 2. Encuentra al estudiante con la nota más alta
mejor = None
# Tu código aquí

# 3. Lista los aprobados (nota >= 60)
aprobados = []
# Tu código aquí

print(f"Promedio: {promedio:.1f}")
print(f"Mejor estudiante: {mejor['nombre']} con {mejor['nota']}")
print(f"Aprobados: {[e['nombre'] for e in aprobados]}")
`
    }
  },

  modulo_5: {
    titulo: "Evaluación Final: Módulo 5 — Algoritmos y Clean Code",
    descripcion: "Demuestra tus conocimientos sobre buenas prácticas y algoritmos fundamentales.",
    preguntas: [
      { q: "¿Qué significa DRY en programación?",
        opts: ["Don't Repeat Yourself", "Do Repeat Yesterday", "Define Reusable Y-code", "Declare Readable Yield"], correct: 0 },
      { q: "Según PEP 8, ¿cuántos espacios se usan para indentar en Python?",
        opts: ["2", "4", "8", "Tabulaciones"], correct: 1 },
      { q: "¿Cuál es la complejidad de buscar en una lista ordenada con búsqueda binaria?",
        opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correct: 2 },
      { q: "¿Qué principio establece que una función debe hacer UNA sola cosa?",
        opts: ["DRY", "Single Responsibility", "YAGNI", "SOLID-D"], correct: 1 },
      { q: "¿Cuál es el propósito de una docstring en Python?",
        opts: ["Hacer el código más lento", "Documentar qué hace una función/clase", "Definir variables globales", "Declarar tipos"], correct: 1 },
      { q: "¿Cuál algoritmo de ordenamiento tiene complejidad promedio O(n log n)?",
        opts: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"], correct: 3 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 5",
      descripcion: `Escribe código limpio y eficiente que implemente:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Una función <code>busqueda_binaria(lista, objetivo)</code> que busque en una lista ordenada</li>
          <li>La función debe tener docstring explicando qué hace</li>
          <li>Debe retornar el índice del elemento, o -1 si no se encuentra</li>
          <li>Pruébala con al menos 3 casos de test distintos</li>
        </ul>`,
      codigo_inicial: `# Desafío Final — Módulo 5: Algoritmos y Clean Code
# Implementa búsqueda binaria con código limpio y documentado

def busqueda_binaria(lista, objetivo):
    """
    Busca 'objetivo' en 'lista' (ordenada) usando búsqueda binaria.
    Retorna el índice si se encuentra, -1 en caso contrario.
    Complejidad: O(log n)
    """
    # Tu implementación aquí
    izquierda = 0
    derecha = len(lista) - 1

    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        # Completa la lógica de comparación
        pass

    return -1


# Tests:
numeros = [1, 3, 5, 7, 9, 11, 15, 23, 42]
print(busqueda_binaria(numeros, 7))   # Esperado: 3
print(busqueda_binaria(numeros, 42))  # Esperado: 8
print(busqueda_binaria(numeros, 6))   # Esperado: -1
`
    }
  }
};

