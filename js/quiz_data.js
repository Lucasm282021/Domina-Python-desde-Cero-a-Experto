// quiz_data.js — Preguntas alineadas con la teoría real de contenidos.json

window.LESSON_QUIZZES = {

  // m1_l1: Variables, Tipos de Datos y Operadores
  m1_l1: {
    titulo: "Quiz: Variables, Tipos y Operadores",
    preguntas: [
      { q: "¿Cuál de estos NO es un tipo de dato nativo en Python?",
        opts: ["int", "float", "char", "str"], correct: 2 },
      { q: "¿Qué función usás para conocer el tipo de una variable?",
        opts: ["typeof()", "type()", "getType()", "class()"], correct: 1 },
      { q: "¿Cuál es el resultado de 10 // 3 en Python?",
        opts: ["3.33", "3", "4", "Error"], correct: 1 },
      { q: "¿Cuál de estas asignaciones es INVÁLIDA en Python?",
        opts: ["x = 5", "x = 'hola'", "int x = 5", "x = 3.14"], correct: 2 },
      { q: "¿Qué valor tiene la expresión 2 ** 8?",
        opts: ["16", "256", "64", "512"], correct: 1 }
    ]
  },

  // m1_l2: Strings: Métodos, Slicing e Input
  m1_l2: {
    titulo: "Quiz: Strings, Slicing e Input",
    preguntas: [
      { q: "¿Qué retorna 'Python'[0:3]?",
        opts: ["'Py'", "'Pyt'", "'yth'", "'Python'"], correct: 1 },
      { q: "¿Qué método convierte un string a mayúsculas?",
        opts: [".upper()", ".toUpper()", ".capitalize()", ".toUpperCase()"], correct: 0 },
      { q: "¿Qué retorna len('Hola mundo')?",
        opts: ["9", "10", "11", "8"], correct: 1 },
      { q: "¿Qué hace 'hola'.replace('o','0')?",
        opts: ["'hola'", "'h0la'", "Error", "'HOla'"], correct: 1 },
      { q: "¿Qué función se usa para leer entrada del usuario en Python?",
        opts: ["read()", "scan()", "input()", "get()"], correct: 2 }
    ]
  },

  // m1_l3: Condicionales y Lógica Booleana
  m1_l3: {
    titulo: "Quiz: Condicionales y Lógica Booleana",
    preguntas: [
      { q: "¿Cómo se escribe 'sino si' en Python?",
        opts: ["else if", "elsif", "elseif", "elif"], correct: 3 },
      { q: "¿Cuál es el resultado de: True and False?",
        opts: ["True", "False", "None", "Error"], correct: 1 },
      { q: "¿Qué operador comprueba si dos valores son IGUALES?",
        opts: ["=", "==", "===", "!="], correct: 1 },
      { q: "¿Qué retorna: not True?",
        opts: ["True", "1", "False", "None"], correct: 2 },
      { q: "¿Cuál es el resultado de: 5 > 3 or 2 > 10?",
        opts: ["False", "True", "None", "Error"], correct: 1 }
    ]
  },

  // m1_l4: Iteraciones: for, while y range()
  m1_l4: {
    titulo: "Quiz: Iteraciones: for, while y range()",
    preguntas: [
      { q: "¿Qué genera range(3)?",
        opts: ["[1,2,3]", "[0,1,2,3]", "[0,1,2]", "[3]"], correct: 2 },
      { q: "¿Qué instrucción detiene un bucle inmediatamente?",
        opts: ["stop", "exit", "break", "return"], correct: 2 },
      { q: "¿Cuántas veces itera: for i in range(0,10,3)?",
        opts: ["3", "4", "10", "2"], correct: 1 },
      { q: "¿Qué hace 'continue' dentro de un bucle?",
        opts: ["Sale del bucle", "Salta a la siguiente iteración", "Pausa el bucle", "Reinicia el bucle"], correct: 1 },
      { q: "¿Qué bucle se usa cuando no sabés cuántas veces vas a iterar?",
        opts: ["for", "foreach", "while", "loop"], correct: 2 }
    ]
  },

  // m1_l5: Listas y Colecciones
  m1_l5: {
    titulo: "Quiz: Listas y Colecciones",
    preguntas: [
      { q: "¿Cómo agregás un elemento al final de una lista?",
        opts: [".add()", ".push()", ".append()", ".insert()"], correct: 2 },
      { q: "¿Qué retorna [1,2,3][1]?",
        opts: ["1", "2", "3", "Error"], correct: 1 },
      { q: "¿Qué estructura NO permite duplicados en Python?",
        opts: ["list", "tuple", "set", "dict"], correct: 2 },
      { q: "¿Cómo se crea una tupla vacía?",
        opts: ["[]", "{}", "()", "tuple{}"], correct: 2 },
      { q: "¿Qué hace list.sort()?",
        opts: ["Retorna una copia ordenada", "Ordena la lista en su lugar", "Ordena de mayor a menor siempre", "Error"], correct: 1 }
    ]
  },

  // m1_l6: Diccionarios
  m1_l6: {
    titulo: "Quiz: Diccionarios",
    preguntas: [
      { q: "¿Cómo accedés al valor de la clave 'nombre' en un dict d?",
        opts: ["d.nombre", "d['nombre']", "d->nombre", "d.get_value('nombre')"], correct: 1 },
      { q: "¿Qué método retorna todas las claves de un diccionario?",
        opts: [".keys()", ".items()", ".values()", ".all()"], correct: 0 },
      { q: "¿Qué pasa si accedés a una clave inexistente con d['x']?",
        opts: ["Retorna None", "Retorna False", "Lanza KeyError", "Retorna 0"], correct: 2 },
      { q: "¿Qué método usás para obtener un valor con un default si la clave no existe?",
        opts: [".find()", ".get()", ".fetch()", ".default()"], correct: 1 },
      { q: "¿Cómo iterás sobre clave y valor al mismo tiempo?",
        opts: ["for k in d:", "for k,v in d.items():", "for k,v in d:", "for v in d.values():"], correct: 1 }
    ]
  },

  // m1_l7: Funciones y Parámetros
  m1_l7: {
    titulo: "Quiz: Funciones y Parámetros",
    preguntas: [
      { q: "¿Con qué palabra reservada se define una función en Python?",
        opts: ["function", "func", "def", "fn"], correct: 2 },
      { q: "¿Qué retorna una función sin return explícito?",
        opts: ["0", "False", "None", ""], correct: 2 },
      { q: "¿Cuál es la sintaxis correcta para un valor por defecto en un parámetro?",
        opts: ["def f(x = 0):", "def f(x : 0):", "def f(x ? 0):", "def f(x | 0):"], correct: 0 },
      { q: "¿Qué es *args en una función?",
        opts: ["Un argumento obligatorio", "Una lista de argumentos posicionales variables", "Un diccionario de argumentos", "Un decorador"], correct: 1 },
      { q: "Una variable creada dentro de una función tiene scope:",
        opts: ["Global", "Local", "Universal", "De clase"], correct: 1 }
    ]
  }
};

// ══════════════════  QUIZZES DE MÓDULO  ══════════════════
window.MODULE_QUIZZES = {

  modulo_1: {
    titulo: "Evaluación Final: Módulo 1 — Python Core",
    descripcion: "Demostrá tus conocimientos sobre variables, strings, condicionales, bucles, colecciones y funciones.",
    preguntas: [
      { q: "¿Cuál NO es un tipo primitivo en Python?", opts: ["int", "float", "char", "bool"], correct: 2 },
      { q: "¿Qué retorna 'Hola'[::-1]?", opts: ["'aloH'", "'Hola'", "Error", "'hola'"], correct: 0 },
      { q: "¿Cuál es el resultado de: True and not False?", opts: ["False", "None", "True", "Error"], correct: 2 },
      { q: "¿Qué genera list(range(2, 8, 2))?", opts: ["[2,4,6,8]", "[2,4,6]", "[2,3,4,5,6,7]", "[0,2,4,6]"], correct: 1 },
      { q: "¿Cómo eliminás la clave 'x' de un dict d sin error si no existe?", opts: ["del d['x']", "d.remove('x')", "d.pop('x', None)", "d.delete('x')"], correct: 2 },
      { q: "¿Qué estructura de datos es MUTABLE en Python?", opts: ["tuple", "str", "list", "frozenset"], correct: 2 },
      { q: "¿Cuál es el resultado de: 'Py' * 3?", opts: ["'PyPyPy'", "Error", "6", "'Py3'"], correct: 0 },
      { q: "¿Qué hace **kwargs en una función?", opts: ["Argumento posicional", "Argumento keyword variable como dict", "Retorna múltiples valores", "Define un decorador"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 1",
      descripcion: `Creá una función <code>analizar_texto(texto)</code> que reciba un string y retorne un diccionario con:
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>La cantidad de palabras</li>
          <li>La cantidad de caracteres (sin espacios)</li>
          <li>Las palabras únicas (usando un set)</li>
          <li>Si el texto es palíndromo (ignorando espacios y mayúsculas)</li>
        </ul>
        <p class="mt-3">Probá con al menos 2 textos e imprimí cada resultado del diccionario.</p>`,
      codigo_inicial: `# Desafío Final — Módulo 1: Python Core

def analizar_texto(texto):
    texto_limpio = texto.replace(" ", "").lower()
    # Tu código aquí
    pass

# Prueba:
resultado = analizar_texto("Ana lava la lana")
print(resultado)
`
    }
  },

  modulo_2: {
    titulo: "Evaluación Final: Módulo 2 — Entorno y Herramientas",
    descripcion: "Demostrá tus conocimientos sobre entornos virtuales y control de versiones con Git.",
    preguntas: [
      { q: "¿Para qué sirve un entorno virtual en Python?", opts: ["Correr código más rápido", "Aislar dependencias por proyecto", "Compilar Python", "Depurar errores"], correct: 1 },
      { q: "¿Qué comando crea un entorno virtual con venv?", opts: ["python new-env", "venv create myenv", "python -m venv myenv", "pip venv myenv"], correct: 2 },
      { q: "¿Qué archivo lista las dependencias de un proyecto?", opts: ["packages.json", "requirements.txt", "dependencies.txt", "setup.cfg"], correct: 1 },
      { q: "¿Qué comando de git registra los cambios en el historial?", opts: ["git save", "git commit", "git push", "git add"], correct: 1 },
      { q: "¿Cuál es la función de 'git push'?", opts: ["Crear una rama", "Descargar cambios", "Enviar commits al repositorio remoto", "Mezclar ramas"], correct: 2 },
      { q: "¿Qué hace 'git pull'?", opts: ["Sube cambios", "Descarga y fusiona cambios remotos", "Crea una rama", "Elimina commits"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 2",
      descripcion: `Simulá un reporte de entorno de proyecto. Escribí código que:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Defina una lista de dependencias de un proyecto imaginario</li><li>Imprima un reporte con el nombre del proyecto y sus dependencias numeradas</li><li>Calcule cuántas dependencias tiene</li></ul>`,
      codigo_inicial: `# Desafío Final — Módulo 2

proyecto = "Mi App Python"
dependencias = ["flask", "requests", "sqlalchemy", "python-dotenv"]

print(f"=== Entorno: {proyecto} ===")
# Tu código: itera e imprime cada dependencia con su número
# Tu código: imprime el total de dependencias
`
    }
  },

  modulo_3: {
    titulo: "Evaluación Final: Módulo 3 — Bases de Datos",
    descripcion: "Demostrá tus conocimientos sobre SQL y su integración con Python.",
    preguntas: [
      { q: "¿Qué instrucción SQL recupera datos de una tabla?", opts: ["GET", "FETCH", "SELECT", "READ"], correct: 2 },
      { q: "¿Qué cláusula filtra filas en SQL?", opts: ["FILTER", "WHERE", "HAVING", "IF"], correct: 1 },
      { q: "¿Qué módulo SQLite viene integrado en Python?", opts: ["pydb", "sqlite3", "dbapi", "psycopg2"], correct: 1 },
      { q: "¿Qué método ejecuta una consulta SQL en sqlite3?", opts: ["conn.run()", "cursor.execute()", "db.query()", "conn.send()"], correct: 1 },
      { q: "¿Qué hace commit() en una conexión de base de datos?", opts: ["Cierra la conexión", "Guarda los cambios permanentemente", "Inicia una transacción", "Borra los datos"], correct: 1 },
      { q: "¿Para qué sirve un ORM como SQLAlchemy?", opts: ["Hacer queries más rápidas", "Mapear tablas a clases Python", "Cifrar la base de datos", "Hacer backups"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 3",
      descripcion: `Simulá operaciones de base de datos usando diccionarios en Python:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Creá una lista de diccionarios que represente una tabla <code>usuarios</code> con campos: id, nombre, email</li><li>Escribí una función <code>buscar_usuario(nombre)</code></li><li>Escribí una función <code>agregar_usuario(nombre, email)</code></li><li>Probá ambas e imprimí los resultados</li></ul>`,
      codigo_inicial: `# Desafío Final — Módulo 3

usuarios = [
    {"id": 1, "nombre": "Ana", "email": "ana@example.com"},
    {"id": 2, "nombre": "Carlos", "email": "carlos@example.com"},
]

def buscar_usuario(nombre):
    pass

def agregar_usuario(nombre, email):
    pass

agregar_usuario("Lucas", "lucas@example.com")
print(buscar_usuario("Lucas"))
print(f"Total usuarios: {len(usuarios)}")
`
    }
  },

  modulo_4: {
    titulo: "Evaluación Final: Módulo 4 — Rutas de Especialización",
    descripcion: "Demostrá tus conocimientos sobre desarrollo web, data science y automatización.",
    preguntas: [
      { q: "¿Qué librería de Python es más conocida para datos tabulares?", opts: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], correct: 1 },
      { q: "¿Qué método de Pandas carga un CSV?", opts: ["pd.load_csv()", "pd.read_csv()", "pd.open_csv()", "pd.import_csv()"], correct: 1 },
      { q: "En Django, ¿qué archivo define las URLs?", opts: ["routes.py", "urls.py", "paths.py", "views.py"], correct: 1 },
      { q: "¿Qué hace la librería requests?", opts: ["Crea servidores web", "Hace peticiones HTTP", "Parsea HTML", "Gestiona bases de datos"], correct: 1 },
      { q: "¿Qué librería se usa para parsear HTML/XML?", opts: ["html5lib", "lxml", "BeautifulSoup", "Todas las anteriores"], correct: 3 },
      { q: "¿Qué es un DataFrame en Pandas?", opts: ["Un gráfico de barras", "Una tabla bidimensional de datos", "Un tipo de función", "Una clase de modelo"], correct: 1 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 4",
      descripcion: `Simulá el análisis de datos de estudiantes:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Creá una lista de diccionarios con al menos 5 estudiantes (nombre, nota)</li><li>Calculá el promedio de notas</li><li>Encontrá al estudiante con la nota más alta</li><li>Listá los que aprobaron (nota ≥ 60)</li></ul>`,
      codigo_inicial: `# Desafío Final — Módulo 4

estudiantes = [
    {"nombre": "Ana", "nota": 85},
    {"nombre": "Carlos", "nota": 52},
    {"nombre": "María", "nota": 91},
    {"nombre": "José", "nota": 78},
    {"nombre": "Laura", "nota": 45},
]

promedio = 0
mejor = None
aprobados = []

# Tu código aquí

print(f"Promedio: {promedio:.1f}")
print(f"Mejor: {mejor['nombre']} con {mejor['nota']}")
print(f"Aprobados: {[e['nombre'] for e in aprobados]}")
`
    }
  },

  modulo_5: {
    titulo: "Evaluación Final: Módulo 5 — Algoritmos y Clean Code",
    descripcion: "Demostrá tus conocimientos sobre buenas prácticas y algoritmos fundamentales.",
    preguntas: [
      { q: "¿Qué significa DRY en programación?", opts: ["Don't Repeat Yourself", "Do Repeat Yesterday", "Define Reusable Y-code", "Declare Readable Yield"], correct: 0 },
      { q: "Según PEP 8, ¿cuántos espacios se usan para indentar?", opts: ["2", "4", "8", "Tabulaciones"], correct: 1 },
      { q: "¿Cuál es la complejidad de búsqueda binaria?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correct: 2 },
      { q: "¿Qué principio establece que una función debe hacer UNA sola cosa?", opts: ["DRY", "Single Responsibility", "YAGNI", "SOLID-D"], correct: 1 },
      { q: "¿Cuál es el propósito de una docstring?", opts: ["Hacer el código más lento", "Documentar qué hace una función/clase", "Definir variables globales", "Declarar tipos"], correct: 1 },
      { q: "¿Cuál algoritmo tiene complejidad promedio O(n log n)?", opts: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"], correct: 3 }
    ],
    desafio: {
      titulo: "Desafío Final del Módulo 5",
      descripcion: `Implementá búsqueda binaria con código limpio y documentado:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Función <code>busqueda_binaria(lista, objetivo)</code> con docstring</li><li>Retorna el índice del elemento, o -1 si no existe</li><li>Probá con al menos 3 casos de test</li></ul>`,
      codigo_inicial: `# Desafío Final — Módulo 5

def busqueda_binaria(lista, objetivo):
    """
    Busca 'objetivo' en 'lista' ordenada usando búsqueda binaria.
    Retorna el índice si se encuentra, -1 en caso contrario.
    Complejidad: O(log n)
    """
    izquierda = 0
    derecha = len(lista) - 1
    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        pass  # Completá la lógica
    return -1

numeros = [1, 3, 5, 7, 9, 11, 15, 23, 42]
print(busqueda_binaria(numeros, 7))   # Esperado: 3
print(busqueda_binaria(numeros, 42))  # Esperado: 8
print(busqueda_binaria(numeros, 6))   # Esperado: -1
`
    }
  }
};
