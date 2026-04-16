import json
import os

file_path = r"c:\Users\lucas\Desktop\Proyectos de 2026\sitio-de_apendisaje-Python\data\contenidos.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Module 1 detailed theories
m1_theories = {
    "m1_l1": {
        "teoria_html": """
            <h1 class='text-3xl font-extrabold mb-4'>Fundamentos: Variables y Tipos Nativos</h1>
             <p class='mb-4 text-gray-700 dark:text-gray-400'>
                En Python, todo es un objeto. A diferencia de lenguajes de tipado estático (como C o Java), Python utiliza un <strong>tipado dinámico y fuerte</strong>. Esto significa que no necesitas declarar de qué tipo será una variable antes de usarla, pero una vez asignada, Python es estricto con las operaciones permitidas.
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>1. Asignación de Variables</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Las variables se crean en el momento en que les asignas un valor mediante el operador <code>=</code>. No existen palabras clave previas como <code>var</code>, <code>let</code> o <code>const</code>.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm'>
nombre = "Guido"
creador = True
año = 1991</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>2. Los Tipos de Datos Principales (Primitivos)</h2>
            <ul class='list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300'>
                <li><strong>Enteros (<code>int</code>):</strong> Representan números enteros, positivos o negativos, sin decimales. Su tamaño está limitado únicamente por la memoria disponible.<br><code class='bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded'>x = 1000000</code></li>
                <li><strong>Flotantes (<code>float</code>):</strong> Representan números reales con precisión de coma flotante de doble precisión (64 bits).<br><code class='bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded'>pi = 3.14159265</code></li>
                <li><strong>Cadenas de texto (<code>str</code>):</strong> Secuencias inmutables de caracteres Unicode. Se pueden definir con comillas simples o dobles.<br><code class='bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded'>saludo = 'Hola Mundo'</code></li>
                <li><strong>Booleanos (<code>bool</code>):</strong> Subtipo de enteros que solo pueden tomar dos valores: <code>True</code> o <code>False</code>. Se usan extensamente en el control de flujo.<br><code class='bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded'>es_activo = True</code></li>
            </ul>
            <h2 class='text-xl font-bold mt-6 mb-2'>3. La función type()</h2>
            <p class='mb-4 text-gray-700 dark:text-gray-400'>
                Debido a la naturaleza dinámica de Python, a menudo necesitarás comprobar a qué clase pertenece una variable. Para esto utilizamos la función integrada <code>type()</code>.
            </p>
            <div class='bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded my-6'>
                <p class='text-sm'>
                    <i class='fa-solid fa-circle-info text-blue-500 mr-2'></i>
                    <strong>Dinamismo en acción:</strong> Una variable que es de tipo <code>int</code> puede pasar a ser <code>str</code> si se le reasigna un nuevo valor. Sin embargo, no puedes concatenar un <code>int</code> con un <code>str</code> directamente, demostrando su tipado fuerte.
                </p>
            </div>
        """,
        "codigo_inicial": "# -- Práctica Módulo 1: Lección 1 --\n# 1. Crea una variable con tu edad (entero)\n\n# 2. Crea una variable con tu nombre (texto)\n\n# 3. Imprime por pantalla el tipo de tu edad usando la función type()\n\nprint(\"Mi código funciona!\")\n"
    },
    "m1_l2": {
        "teoria_html": """
            <h1 class='text-3xl font-extrabold mb-4'>Control de Flujo: If, For y While</h1>
             <p class='mb-4 text-gray-700 dark:text-gray-400'>
                El control de flujo define en qué orden se ejecutan las instrucciones de tu código. Python logra esto con una legibilidad famosa, gracias al uso obligatorio de la <strong>indentación</strong> en lugar de llaves <code>{}</code>.
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>1. Condicionales: if, elif, else</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Permiten bifurcar el flujo del programa dependiendo de si una condición booleana se evalúa como <code>True</code> o <code>False</code>.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
edad = 18
if edad &gt;= 18:
    print("Eres mayor de edad")
elif edad == 17:
    print("Estás a punto de ser mayor de edad")
else:
    print("Eres menor de edad")
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>2. Bucle For (Iteración)</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                En Python, el bucle <code>for</code> iterará siempre sobre los elementos de cualquier secuencia (como una lista o un string), en el orden en que aparecen. No es el típico bucle "para i = 0 hasta 10" de otros lenguajes. Si necesitas una progresión numérica, utilizas la función generadora <code>range()</code>.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
# Bucle usando range (Genera del 0 al 4)
for i in range(5):
    print("Iteración:", i)

# Iterando una colección
frutas = ['manzana', 'platano', 'cereza']
for fruta in frutas:
    print(fruta)
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>3. Bucle While (Condición continua)</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Ejecuta un bloque de código repetidamente mientras una condición sea verdadera.
            </p>
            <div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>
                <p class='text-sm'>
                    <i class='fa-solid fa-triangle-exclamation text-yellow-500 mr-2'></i>
                    <strong>Precaución con bucles infinitos:</strong> Asegúrate de que la condición dentro del <code>while</code> cambie en algún momento a <code>False</code>, o de usar la instrucción <code>break</code>, de lo contrario colgarás el programa.
                </p>
            </div>
        """,
        "codigo_inicial": "# -- Práctica Módulo 1: Lección 2 --\n# Tarea: Usa un bucle for y la función range() para imprimir los números del 1 al 10\n\nfor numero in range(1, 11):\n    pass # Borra 'pass' y escribe tu código aquí\n\n"
    },
    "m1_l3": {
        "teoria_html": """
            <h1 class='text-3xl font-extrabold mb-4'>Funciones y Scope</h1>
             <p class='mb-4 text-gray-700 dark:text-gray-400'>
                Las funciones son la piedra angular de la reutilización de código (principio DRY: Don't Repeat Yourself). En Python se definen utilizando la palabra reservada <code>def</code>.
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>Definición y Argumentos</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Las funciones pueden aceptar cero o múltiples argumentos. Puedes definir valores por defecto en los parámetros, lo que hace que dicho argumento sea opcional.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
def presentar_trabajador(nombre, puesto="Desarrollador Junior"):
    '''Esta es una docstring. Documenta qué hace la función.'''
    return f"{nombre} trabaja como {puesto}"

print(presentar_trabajador("Laura")) # Usa puesto por defecto
print(presentar_trabajador("Carlos", "Data Scientist")) # Sobreescribe el puesto
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>Valores de Retorno Múltiples</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Una característica estelar de Python es que una función puede retornar múltiples valores separándolos por comas. Lo que devuelve implícitamente es una "Tupla", que luego se desempaca.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
def operaciones(a, b):
    suma = a + b
    resta = a - b
    return suma, resta

res_suma, res_resta = operaciones(10, 5)
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>El Alcance (Scope) Local vs Global</h2>
            <p class='mb-4 text-gray-700 dark:text-gray-400'>
                Las variables creadas dentro de una función solo existen allí (Scope Local). Si necesitas modificar una variable de fuera, debes inyectarla o usar la palabra reservada <code>global</code> (una práctica poco recomendada debido a los efectos colaterales).
            </p>
        """,
        "codigo_inicial": "# -- Práctica Módulo 1: Lección 3 --\n# Define una función llamada 'saludar' que acepte un parámetro 'nombre' \n# y devuelva el texto 'Hola, [nombre]'. Imprime el retorno al final.\n\ndef saludar(nombre):\n    pass\n\n"
    },
    "m1_l4": {
        "teoria_html": """
            <h1 class='text-3xl font-extrabold mb-4'>Programación Orientada a Objetos</h1>
             <p class='mb-4 text-gray-700 dark:text-gray-400'>
                La Programación Orientada a Objetos (POO) es un paradigma de programación que provee un medio de estructurar el código de manera que propiedades y comportamientos estén empaquetados en contenedores individuales llamados "Objetos".
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>Clases y Atributos de Instancia</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Una clase actúa como el molde o plano. Utilizando la clase, creas copias independientes o 'instancias'. En Python, el inicializador fundamental es el método especial (o "mágico") <code>__init__</code>.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
class Coche:
    # Constructor de la clase
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.encendido = False
    
    # Método (comportamiento de la clase)
    def arrancar(self):
        self.encendido = True
        return f"El {self.marca} está encendido."

# Creación del objeto (instanciación)
mi_auto = Coche("Toyota", "Corolla")
print(mi_auto.arrancar())
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>El factor "self"</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Habrás notado que cada método tiene como primer argumento <code>self</code>. Esta es la referencia a la instancia temporal del objeto. Es el equivalente a <code>this</code> en Java o JavaScript, con la diferencia de que en Python debe escribirse explícitamente como parámetro.
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>Herencia</h2>
            <p class='mb-4 text-gray-700 dark:text-gray-400'>
                Se pueden crear clases que tomen comportamientos de otra clase padre. Esto fomenta el reuso de código altamente. Se denota como: <code>class CocheDeportivo(Coche):</code>
            </p>
        """,
        "codigo_inicial": "class Mascota:\n    def __init__(self, nombre):\n        self.nombre = nombre\n\n    def hacer_sonido(self):\n        return \"...\"\n\n# Crea una clase Perro que herede de Mascota\n# y sobreescriba 'hacer_sonido' para que retorne '¡Guau!'\n\n\n\n"
    },
    "m1_l5": {
        "teoria_html": """
            <h1 class='text-3xl font-extrabold mb-4'>Manejo de Errores (Excepciones)</h1>
             <p class='mb-4 text-gray-700 dark:text-gray-400'>
                Los programas reales experimentan comportamientos o entradas de datos no esperadas que provocarían que colapsen por completo. Para evitarlo, Python utiliza bloques <code>try/except</code> (Equivalente al <code>try/catch</code> de otros lenguajes).
            </p>
            <h2 class='text-xl font-bold mt-6 mb-2'>La Estructura Completa</h2>
            <p class='mb-2 text-gray-700 dark:text-gray-400'>
                Puedes prepararte para fallos específicos para responder de la mejor forma a cada eventualidad.
            </p>
            <pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>
try:
    # Código crítico que puede fallar
    resultado = 10 / 0
except ZeroDivisionError as e:
    # Solo atrapa divisiones por cero
    print("¡No puedes dividir entre cero!", e)
except FileNotFoundError:
    # Atrapa errores al abrir archivos inexistentes
    print("Archivo no encontrado")
else:
    # Se ejecuta SI NO OCURRIÓ NINGÚN ERROR
    print("El código funcionó perfectamente")
finally:
    # Siempre se ejecuta (haya fallado o no). Ideal para liberar recursos.
    print("Terminado.")
</pre>
            <h2 class='text-xl font-bold mt-6 mb-2'>EAFP: "Es mejor pedir perdón que permiso"</h2>
            <p class='mb-4 text-gray-700 dark:text-gray-400'>
                En el diseño de Python, prevalece el "Easier to Ask for Forgiveness than Permission (EAFP)" frente al enfoque de mirar antes de saltar (LBYL). Se prefiere intentar la lectura directa y rodear la estructura en un control <code>try/except</code> que construir múltiples <code>if x != 0</code> antes de proceder.
            </p>
        """,
        "codigo_inicial": "# Corrige este código envolviéndolo en un bloque try y except para\n# evitar que la División por cero crashee el programa. \n# En el except, imprime un mensaje de error amigable.\n\nnumero = 10\ndivisor = 0\nresultado = numero / divisor\nprint(resultado)\n"
    }
}

for mod in data["modulos"]:
    for lec in mod["lecciones"]:
        if lec["id"] in m1_theories:
            lec["teoria_html"] = m1_theories[lec["id"]]["teoria_html"]
            lec["codigo_inicial"] = m1_theories[lec["id"]]["codigo_inicial"]
        else:
            # Fallback para el resto del curso
            lec["teoria_html"] = f"""
                <h1 class='text-3xl font-extrabold mb-4'>{lec["titulo"]}</h1>
                <p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>
                    Sección teórica interactiva. Los conceptos avanzados de <strong>{lec["titulo"].lower()}</strong> del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas actualizaciones del temario. ¡Sigue superando tus metas!
                </p>
                <div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>
                    <p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i> <strong>Consejo:</strong> Usa el editor para repasar libremente.</p>
                </div>
            """
            lec["codigo_inicial"] = f"# Explora y repasa libremente {lec['titulo']}\n"

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("contenidos.json actualizado exitosamente.")
