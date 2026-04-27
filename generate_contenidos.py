"""
generate_contenidos.py
Genera data/contenidos.json con las 7 lecciones reales del Módulo 1
basadas en los PDFs de la carpeta Teoria/.
"""
import json, os

# ---------------------------------------------------------------------------
# HELPERS
# ---------------------------------------------------------------------------

def code_block(code):
    return (
        "<pre class='bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 "
        "font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300'>"
        + code +
        "</pre>"
    )

def h1(text):
    return f"<h1 class='text-3xl font-extrabold mb-4'>{text}</h1>"

def h2(text):
    return f"<h2 class='text-xl font-bold mt-6 mb-2'>{text}</h2>"

def p(text):
    return f"<p class='mb-4 text-gray-700 dark:text-gray-400'>{text}</p>"

def p2(text):
    return f"<p class='mb-2 text-gray-700 dark:text-gray-400'>{text}</p>"

def tip(text):
    return (
        "<div class='bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded my-6'>"
        f"<p class='text-sm'><i class='fa-solid fa-circle-info text-blue-500 mr-2'></i>{text}</p>"
        "</div>"
    )

def warn(text):
    return (
        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
        f"<p class='text-sm'><i class='fa-solid fa-triangle-exclamation text-yellow-500 mr-2'></i>{text}</p>"
        "</div>"
    )

def ul(items):
    lis = "".join(f"<li class='mb-1'>{i}</li>" for i in items)
    return f"<ul class='list-disc pl-5 mb-4 space-y-1 text-gray-700 dark:text-gray-300'>{lis}</ul>"

def table(headers, rows):
    th = "".join(f"<th class='border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-left'>{h}</th>" for h in headers)
    trs = ""
    for row in rows:
        tds = "".join(f"<td class='border border-gray-300 dark:border-gray-600 px-3 py-2'>{c}</td>" for c in row)
        trs += f"<tr>{tds}</tr>"
    return (
        "<div class='overflow-x-auto my-4'>"
        "<table class='w-full text-sm border-collapse border border-gray-300 dark:border-gray-600'>"
        f"<thead><tr>{th}</tr></thead><tbody>{trs}</tbody>"
        "</table></div>"
    )


# ---------------------------------------------------------------------------
# LECCIÓN 1 – Variables, Tipos de Datos y Operadores
# ---------------------------------------------------------------------------

l1_teoria = "\n".join([
    h1("Variables, Tipos de Datos y Operadores"),
    p("Python es un lenguaje de <strong>tipado dinámico y fuerte</strong>: "
      "no declarás el tipo de una variable, lo infiere el intérprete; "
      "pero una vez asignado, no podés mezclar tipos sin una conversión explícita."),

    h2("1. Variables"),
    p2("Una variable es un espacio en memoria que almacena un valor. "
       "Se crea en el momento en que le asignás un valor con <code>=</code>."),
    code_block(
        "nombre = \"Ana\"       # str\n"
        "edad   = 25          # int\n"
        "altura = 1.68        # float\n"
        "es_estudiante = True # bool\n"
        "print(type(nombre))  # &lt;class 'str'&gt;"
    ),
    tip("<strong>Reglas de nombrado:</strong> Pueden contener letras, números y <code>_</code>. "
        "No pueden empezar con número ni usar palabras reservadas del lenguaje. "
        "La convención PEP&nbsp;8 es <em>snake_case</em>: <code>mi_variable</code>."),

    h2("2. Tipos de Datos Fundamentales"),
    table(
        ["Tipo", "Descripción", "Ejemplo"],
        [
            ["<code>int</code>", "Enteros, sin límite de tamaño", "<code>edad = 25</code>"],
            ["<code>float</code>", "Decimales (64 bits)", "<code>pi = 3.14159</code>"],
            ["<code>str</code>", "Cadenas de texto Unicode", "<code>saludo = 'Hola'</code>"],
            ["<code>bool</code>", "Verdadero o Falso (subtipo de int)", "<code>activo = True</code>"],
        ]
    ),

    h2("3. Operadores"),
    p2("Python agrupa los operadores por categoría:"),
    ul([
        "<strong>Aritméticos:</strong> <code>+  -  *  /  //  %  **</code> &nbsp;(/ devuelve float, // divisón entera, ** potencia, % resto)",
        "<strong>Relacionales:</strong> <code>==  !=  &gt;  &lt;  &gt;=  &lt;=</code> → devuelven <code>bool</code>",
        "<strong>Lógicos:</strong> <code>and  or  not</code>",
        "<strong>Asignación:</strong> <code>=  +=  -=  *=</code> …",
    ]),
    code_block(
        "print(5 / 2)    # 2.5\n"
        "print(5 // 2)   # 2\n"
        "print(3 ** 4)   # 81\n"
        "print(9 % 6)    # 3\n"
        "print(3 * 4 == 2 * 6)  # True"
    ),

    h2("4. Conversión de Tipos (Casting)"),
    table(
        ["Función", "Ejemplo", "Resultado"],
        [
            ["<code>int(x)</code>", "<code>int(3.9)</code>", "<code>3</code>"],
            ["<code>float(x)</code>", "<code>float('5.67')</code>", "<code>5.67</code>"],
            ["<code>str(x)</code>", "<code>str(42)</code>", "<code>'42'</code>"],
            ["<code>bool(x)</code>", "<code>bool(0)</code>", "<code>False</code>"],
        ]
    ),
    warn("<strong>Tipado fuerte en acción:</strong> <code>\"5\" + 5</code> genera un "
         "<code>TypeError</code>. Debés convertir explícitamente: <code>int(\"5\") + 5</code>."),
])

l1_codigo = (
    "# ── Práctica: Variables, Tipos y Operadores ──\n\n"
    "# 1. Definí variables con tu nombre, edad y altura\n"
    "nombre = \"Tu nombre\"\n"
    "edad = 25\n"
    "altura = 1.70\n\n"
    "# 2. Imprimí el tipo de cada variable\n"
    "print(type(nombre), type(edad), type(altura))\n\n"
    "# 3. Operadores aritméticos\n"
    "print(f\"2**10 = {2**10}\")\n"
    "print(f\"17 // 5 = {17 // 5}, resto: {17 % 5}\")\n\n"
    "# 4. Convertí la temperatura de Celsius a Fahrenheit\n"
    "celsius = 22\n"
    "fahrenheit = celsius * 9/5 + 32\n"
    "print(f\"{celsius}°C = {fahrenheit}°F\")\n\n"
    "# 5. Casting: convertí el string '42' a entero y sumale 8\n"
    "resultado = int('42') + 8\n"
    "print(f\"'42' + 8 = {resultado}\")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 2 – Strings
# ---------------------------------------------------------------------------

l2_teoria = "\n".join([
    h1("Strings: Métodos, Slicing e Input"),
    p("Las cadenas (<code>str</code>) son secuencias <strong>inmutables</strong> de caracteres Unicode. "
      "Python ofrece un conjunto muy rico de métodos integrados para manipularlas."),

    h2("1. Creación y caracteres especiales"),
    code_block(
        "linea = \"*\" * 35\n"
        "menu = \"\"\" Menú de opciones:\n"
        "         1.- Jugar\n"
        "         2.- Configurar\n"
        "         3.- Salir\"\"\"\n"
        "print(\"Hola\\n\\t Empezamos\")  # \\n = nueva línea, \\t = tab"
    ),

    h2("2. len() y parámetros de print()"),
    code_block(
        "cadena = \"Python\"\n"
        "print(len(cadena))          # 6\n"
        "print(\"A\", \"B\", sep=\"-\", end=\"!\\n\")  # A-B!"
    ),

    h2("3. Slicing (subcadenas)"),
    p2("Formato: <code>cadena[inicio:fin:salto]</code>. "
       "El índice <code>fin</code> <strong>no</strong> se incluye. "
       "Los índices negativos cuentan desde el final."),
    code_block(
        "cadena = \"Hola mundo\"\n"
        "print(cadena[2])      # 'l'\n"
        "print(cadena[-3])     # 'n'\n"
        "print(cadena[2:-1])   # 'la mund'\n"
        "print(cadena[:5])     # 'Hola '\n"
        "print(cadena[::-1])   # 'odnum aloH'  (invertir)"
    ),

    h2("4. Métodos principales"),
    code_block(
        "s = \"Python es lo más!\"\n"
        "print(s.upper())          # PYTHON ES LO MÁS!\n"
        "print(s.lower())          # python es lo más!\n"
        "print(s.title())          # Python Es Lo Más!\n"
        "print(s.replace('s','5')) # Python e5 lo má5!\n"
        "print(s.count('s'))       # 2\n"
        "print(s.split(' '))       # ['Python', 'es', 'lo', 'más!']\n"
        "print(s.find('o'))        # 4\n"
        "print(s.startswith('Py')) # True"
    ),

    h2("5. F-strings"),
    p2("La forma moderna y preferida de insertar variables en texto."),
    code_block(
        "nombre = \"Diego\"\n"
        "intentos = 3\n"
        "print(f\"Hola {nombre}! Ganaste en {intentos} intentos.\")"
    ),

    h2("6. El operador in"),
    code_block(
        "palabra = \"Argentina\"\n"
        "print(\"gen\" in palabra)   # True\n"
        "print(\"xyz\" in palabra)   # False"
    ),
    tip("<strong>Strings son inmutables:</strong> <code>cadena[0] = 'X'</code> genera <code>TypeError</code>. "
        "Para 'modificar' un string, creás uno nuevo con los métodos como <code>replace()</code>."),
])

l2_codigo = (
    "# ── Práctica: Strings ──\n\n"
    "# 1. Pedimos el nombre completo al usuario (simulado aquí)\n"
    "nombre_completo = \"juan perez\"\n\n"
    "# Imprimí: en minúsculas, MAYÚSCULAS y Title Case\n"
    "print(nombre_completo.lower())\n"
    "print(nombre_completo.upper())\n"
    "print(nombre_completo.title())\n\n"
    "# 2. Slicing: imprimí solo el nombre (primera palabra)\n"
    "partes = nombre_completo.split(\" \")\n"
    "print(f\"Solo el nombre: {partes[0]}\")\n"
    "print(f\"Solo el apellido: {partes[-1]}\")\n\n"
    "# 3. ¿Es palíndromo?\n"
    "frase = \"anilina\"\n"
    "invertida = frase[::-1]\n"
    "print(f\"Frase invertida: {invertida}\")\n"
    "print(f\"¿Es palíndromo? {frase == invertida}\")\n\n"
    "# 4. Cantidad de letras usando len()\n"
    "print(f\"{nombre_completo.title()} tiene {len(nombre_completo.replace(' ',''))} letras\")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 3 – Condicionales
# ---------------------------------------------------------------------------

l3_teoria = "\n".join([
    h1("Condicionales y Lógica Booleana"),
    p("Las estructuras condicionales permiten que el programa tome decisiones "
      "ejecutando distintos bloques de código según si una condición es <code>True</code> o <code>False</code>."),

    h2("1. Operadores Relacionales y Lógicos"),
    table(
        ["Operador", "Significado", "Ejemplo", "Resultado"],
        [
            ["<code>==</code>", "Igual a", "<code>3 == 3</code>", "<code>True</code>"],
            ["<code>!=</code>", "Distinto de", "<code>4 != 4</code>", "<code>False</code>"],
            ["<code>&gt;</code> / <code>&lt;</code>", "Mayor / Menor", "<code>10 &gt; 5</code>", "<code>True</code>"],
            ["<code>and</code>", "Ambas verdaderas", "<code>True and False</code>", "<code>False</code>"],
            ["<code>or</code>", "Al menos una verdadera", "<code>True or False</code>", "<code>True</code>"],
            ["<code>not</code>", "Negación", "<code>not True</code>", "<code>False</code>"],
            ["<code>in</code>", "Pertenencia", "<code>'gen' in 'Argentina'</code>", "<code>True</code>"],
        ]
    ),

    h2("2. if / elif / else"),
    p2("Python usa <strong>indentación</strong> (4 espacios) para delimitar los bloques, "
       "no llaves <code>{}</code>."),
    code_block(
        "temp = 32\n"
        "if temp &gt; 24:\n"
        "    print(\"Hace mucho calor\")\n"
        "    print(\"Tomá agua\")\n"
        "elif temp &gt; 18:\n"
        "    print(\"Hermoso día\")\n"
        "else:\n"
        "    print(\"Día frío\")"
    ),

    h2("3. Condicionales Anidadas"),
    code_block(
        "edad = 20\n"
        "tiene_entrada = True\n"
        "if edad &gt;= 18:\n"
        "    if tiene_entrada:\n"
        "        print(\"Podés entrar\")\n"
        "    else:\n"
        "        print(\"Necesitás comprar entrada\")\n"
        "else:\n"
        "    print(\"Sos menor de edad\")"
    ),

    h2("4. Ejemplo FizzBuzz"),
    p2("Un clásico de entrevistas: si el número es divisible por 3 → Fizz, "
       "por 5 → Buzz, por ambos → FizzBuzz."),
    code_block(
        "numero = 15\n"
        "if numero % 15 == 0:\n"
        "    print(\"FizzBuzz\")\n"
        "elif numero % 3 == 0:\n"
        "    print(\"Fizz\")\n"
        "elif numero % 5 == 0:\n"
        "    print(\"Buzz\")\n"
        "else:\n"
        "    print(numero)"
    ),
    warn("<strong>Orden importa:</strong> En una cadena if/elif/else, Python evalúa de arriba hacia abajo "
         "y ejecuta el <em>primer</em> bloque cuya condición sea verdadera. "
         "El resto se ignora aunque también sean verdaderas."),
])

l3_codigo = (
    "# ── Práctica: Condicionales ──\n\n"
    "# 1. Clasificar por edad\n"
    "edad = 17  # Cambiá este valor y observá el resultado\n\n"
    "if edad < 13:\n"
    "    print(\"Niño\")\n"
    "elif edad < 18:\n"
    "    print(\"Adolescente\")\n"
    "elif edad < 65:\n"
    "    print(\"Adulto\")\n"
    "else:\n"
    "    print(\"Adulto mayor\")\n\n"
    "# 2. Calculadora simple\n"
    "a = 10\n"
    "b = 4\n"
    "operacion = \"/\"  # Probá con +, -, *, /\n\n"
    "if operacion == \"+\":\n"
    "    print(f\"{a} + {b} = {a + b}\")\n"
    "elif operacion == \"-\":\n"
    "    print(f\"{a} - {b} = {a - b}\")\n"
    "elif operacion == \"*\":\n"
    "    print(f\"{a} * {b} = {a * b}\")\n"
    "elif operacion == \"/\":\n"
    "    if b == 0:\n"
    "        print(\"Error: no se puede dividir por cero\")\n"
    "    else:\n"
    "        print(f\"{a} / {b} = {a / b}\")\n\n"
    "# 3. FizzBuzz del 1 al 20\n"
    "for n in range(1, 21):\n"
    "    if n % 15 == 0:\n"
    "        print(\"FizzBuzz\", end=\" \")\n"
    "    elif n % 3 == 0:\n"
    "        print(\"Fizz\", end=\" \")\n"
    "    elif n % 5 == 0:\n"
    "        print(\"Buzz\", end=\" \")\n"
    "    else:\n"
    "        print(n, end=\" \")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 4 – Iteraciones
# ---------------------------------------------------------------------------

l4_teoria = "\n".join([
    h1("Iteraciones: for, while y range()"),
    p("Los bucles permiten repetir un bloque de código múltiples veces. "
      "Python tiene dos estructuras principales: <code>for</code> y <code>while</code>."),

    h2("1. Bucle while"),
    p2("Ejecuta el bloque <strong>mientras</strong> la condición sea <code>True</code>. "
       "Útil cuando no sabemos de antemano cuántas veces repetir."),
    code_block(
        "contador = 1\n"
        "while contador &lt;= 5:\n"
        "    print(f\"Número: {contador}\")\n"
        "    contador += 1  # ¡Imprescindible para no crear bucle infinito!\n"
        "print(\"Salí del bucle\")"
    ),
    warn("<strong>Cuidado con bucles infinitos:</strong> Si la condición nunca se vuelve <code>False</code> "
         "y no usás <code>break</code>, el programa se colgará indefinidamente."),

    h2("2. Bucle for e iteración"),
    p2("El <code>for</code> de Python itera <strong>sobre los elementos</strong> de cualquier secuencia "
       "(string, lista, rango, etc.). No es el típico <code>for i=0; i&lt;10; i++</code>."),
    code_block(
        "# Iterar un string\n"
        "for letra in \"Python\":\n"
        "    print(letra, end=\" \")\n\n"
        "# Iterar una lista\n"
        "frutas = ['manzana', 'banana', 'cereza']\n"
        "for fruta in frutas:\n"
        "    print(fruta)"
    ),

    h2("3. La función range()"),
    table(
        ["Llamada", "Genera", "Ejemplo de uso"],
        [
            ["<code>range(5)</code>", "0, 1, 2, 3, 4", "<code>for i in range(5):</code>"],
            ["<code>range(1, 6)</code>", "1, 2, 3, 4, 5", "<code>for i in range(1, 6):</code>"],
            ["<code>range(2, 11, 3)</code>", "2, 5, 8", "<code>for i in range(2, 11, 3):</code>"],
            ["<code>range(10, 0, -1)</code>", "10, 9, 8 … 1", "Cuenta regresiva"],
        ]
    ),
    code_block(
        "# Pares del 0 al 9\n"
        "for i in range(10):\n"
        "    if i % 2 == 0:\n"
        "        print(i, end=\"  \")"
    ),

    h2("4. pass, continue y break"),
    table(
        ["Instrucción", "Efecto"],
        [
            ["<code>pass</code>", "No hace nada; actúa como marcador de posición"],
            ["<code>continue</code>", "Salta a la siguiente iteración del bucle"],
            ["<code>break</code>", "Sale del bucle inmediatamente"],
        ]
    ),
    code_block(
        "for i in range(10):\n"
        "    if i == 5:\n"
        "        continue      # salta el 5\n"
        "    if i == 8:\n"
        "        break         # sale al llegar a 8\n"
        "    print(i, end=\" \")"
    ),
])

l4_codigo = (
    "# ── Práctica: Iteraciones ──\n\n"
    "# 1. Imprimí los números del 1 al 10\n"
    "for i in range(1, 11):\n"
    "    print(i, end=\" \")\n"
    "print()\n\n"
    "# 2. Tabla de multiplicar del 7\n"
    "numero = 7\n"
    "for i in range(1, 11):\n"
    "    print(f\"{numero} x {i} = {numero * i}\")\n\n"
    "# 3. Contar vocales en una palabra\n"
    "palabra = \"programacion\"\n"
    "vocales = \"aeiouáéíóú\"\n"
    "contador = 0\n"
    "for letra in palabra:\n"
    "    if letra in vocales:\n"
    "        contador += 1\n"
    "print(f\"'{palabra}' tiene {contador} vocales\")\n\n"
    "# 4. While: adivinar un número (simulado)\n"
    "secreto = 7\n"
    "intentos = [3, 5, 9, 7]  # Probamos estos valores en orden\n"
    "for intento in intentos:\n"
    "    if intento == secreto:\n"
    "        print(f\"¡Correcto! El número era {secreto}\")\n"
    "        break\n"
    "    elif intento < secreto:\n"
    "        print(f\"{intento}: muy bajo\")\n"
    "    else:\n"
    "        print(f\"{intento}: muy alto\")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 5 – Listas
# ---------------------------------------------------------------------------

l5_teoria = "\n".join([
    h1("Listas y Colecciones"),
    p("Una <strong>lista</strong> es la colección más versátil de Python: "
      "ordenada, mutable y heterogénea. Puede contener cualquier tipo de dato, incluso otras listas."),

    h2("1. Crear y acceder"),
    code_block(
        "variedad = [1, \"dos\", [3, \"cuatro\"], True]\n"
        "print(variedad[0])       # 1\n"
        "print(variedad[-1])      # True\n"
        "print(variedad[2][1])    # 'cuatro'"
    ),

    h2("2. Mutabilidad y copias"),
    code_block(
        "lista = [1, 2, 3]\n"
        "lista[0] = 99            # Modificar elemento\n"
        "print(lista)             # [99, 2, 3]\n\n"
        "# ⚠ Referencia vs. Copia\n"
        "a = [1, 2, 3]\n"
        "b = a          # b y a apuntan al MISMO objeto\n"
        "c = a.copy()   # c es una copia independiente\n"
        "a.append(4)\n"
        "print(b)       # [1, 2, 3, 4]  ← afectada\n"
        "print(c)       # [1, 2, 3]     ← no afectada"
    ),
    warn("<strong>Referencia directa:</strong> Al hacer <code>b = a</code> no copiás la lista, "
         "solo copiás la <em>referencia</em>. Usá <code>.copy()</code> o slicing <code>[:]</code> para una copia real."),

    h2("3. Métodos esenciales"),
    table(
        ["Método", "Descripción"],
        [
            ["<code>append(x)</code>", "Agrega <code>x</code> al final"],
            ["<code>insert(i, x)</code>", "Inserta <code>x</code> en el índice <code>i</code>"],
            ["<code>remove(x)</code>", "Elimina la primera ocurrencia de <code>x</code>"],
            ["<code>pop(i)</code>", "Elimina y devuelve el elemento del índice <code>i</code>"],
            ["<code>sort()</code>", "Ordena la lista (in-place)"],
            ["<code>index(x)</code>", "Devuelve el índice de <code>x</code>"],
            ["<code>count(x)</code>", "Cuenta cuántas veces aparece <code>x</code>"],
        ]
    ),

    h2("4. Comprensión de listas"),
    p2("Forma compacta y Pythonica de crear listas."),
    code_block(
        "# Forma tradicional vs. comprensión\n"
        "cuadrados = [i**2 for i in range(10)]\n"
        "print(cuadrados)\n"
        "# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n"
        "# Con filtro\n"
        "pares = [i**2 for i in range(10) if i % 2 == 0]\n"
        "print(pares)\n"
        "# [0, 4, 16, 36, 64]"
    ),
    tip("<strong>Mutables vs. Inmutables:</strong> Las <em>listas</em> son mutables (podés modificarlas). "
        "Las <em>tuplas</em> <code>()</code> son inmutables y más eficientes para datos fijos. "
        "Los <em>conjuntos</em> <code>{}</code> son mutables pero sin duplicados ni orden garantizado."),
])

l5_codigo = (
    "# ── Práctica: Listas ──\n\n"
    "numeros = [3, 7, 2, 9, 5, 1, 8]\n\n"
    "# 1. Suma total sin usar sum()\n"
    "total = 0\n"
    "for n in numeros:\n"
    "    total += n\n"
    "print(f\"Suma: {total}\")\n\n"
    "# 2. Números pares con comprensión de lista\n"
    "pares = [n for n in numeros if n % 2 == 0]\n"
    "print(f\"Pares: {pares}\")\n\n"
    "# 3. Mayor elemento sin max()\n"
    "mayor = numeros[0]\n"
    "for n in numeros:\n"
    "    if n > mayor:\n"
    "        mayor = n\n"
    "print(f\"Mayor: {mayor}\")\n\n"
    "# 4. Ordenar y mostrar\n"
    "copia = numeros.copy()\n"
    "copia.sort()\n"
    "print(f\"Ordenados: {copia}\")\n\n"
    "# 5. Lista sin duplicados\n"
    "datos = [1, 2, 2, 3, 4, 4, 5]\n"
    "sin_duplicados = list(set(datos))\n"
    "sin_duplicados.sort()\n"
    "print(f\"Sin duplicados: {sin_duplicados}\")\n\n"
    "# 6. Cuadrados con comprensión\n"
    "cuadrados = [n**2 for n in range(1, 8)]\n"
    "print(f\"Cuadrados: {cuadrados}\")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 6 – Diccionarios
# ---------------------------------------------------------------------------

l6_teoria = "\n".join([
    h1("Diccionarios (dict)"),
    p("Un <strong>diccionario</strong> es una colección mutable de pares "
      "<code>clave: valor</code>. Las claves deben ser únicas e inmutables "
      "(strings, números, tuplas). Los valores pueden ser cualquier tipo."),

    h2("1. Crear y acceder"),
    code_block(
        "persona = {\"nombre\": \"Juan\", \"edad\": 23, \"activo\": True}\n"
        "print(persona[\"nombre\"])     # 'Juan'\n"
        "print(persona.get(\"email\", \"Sin email\"))  # .get() es seguro\n"
        "# persona[\"inexistente\"]  →  KeyError"
    ),
    tip("<strong>Prefiere <code>.get()</code>:</strong> Si la clave puede no existir, "
        "usá <code>dicci.get(clave, valor_por_defecto)</code> para evitar <code>KeyError</code>."),

    h2("2. Agregar, modificar y eliminar"),
    code_block(
        "meses = {\"enero\": 31, \"febrero\": 28}\n"
        "meses[\"febrero\"] = 29   # Modificar\n"
        "meses[\"marzo\"] = 31    # Agregar\n"
        "del meses[\"enero\"]     # Eliminar\n"
        "print(meses)             # {'febrero': 29, 'marzo': 31}"
    ),

    h2("3. Recorrer un diccionario"),
    code_block(
        "musica = {\"rock\": [\"The Beatles\", \"Radiohead\"],\n"
        "          \"punk\": [\"Ramones\", \"Attaque 77\"]}\n\n"
        "# Solo claves\n"
        "for genero in musica:\n"
        "    print(genero)\n\n"
        "# Clave y valor (lo más común)\n"
        "for genero, bandas in musica.items():\n"
        "    print(f\"{genero}: {', '.join(bandas)}\")"
    ),

    h2("4. Métodos clave"),
    table(
        ["Método", "Descripción"],
        [
            ["<code>.keys()</code>", "Vista de todas las claves"],
            ["<code>.values()</code>", "Vista de todos los valores"],
            ["<code>.items()</code>", "Vista de tuplas <code>(clave, valor)</code>"],
            ["<code>.get(k, default)</code>", "Acceso seguro con valor por defecto"],
            ["<code>.pop(k)</code>", "Elimina y devuelve el valor de la clave <code>k</code>"],
            ["<code>.update(otro)</code>", "Fusiona con otro diccionario"],
        ]
    ),

    h2("5. Comprensión de diccionarios"),
    code_block(
        "cuadrados = {x: x**2 for x in range(1, 6)}\n"
        "print(cuadrados)\n"
        "# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
    ),
])

l6_codigo = (
    "# ── Práctica: Diccionarios ──\n\n"
    "# 1. Crear y mostrar un diccionario de persona\n"
    "persona = {\n"
    "    \"nombre\": \"Ana\",\n"
    "    \"edad\": 28,\n"
    "    \"ciudad\": \"Buenos Aires\"\n"
    "}\n"
    "print(f\"{persona['nombre']} tiene {persona['edad']} años, vive en {persona['ciudad']}\")\n\n"
    "# 2. Agregar un campo\n"
    "persona[\"profesion\"] = \"Desarrolladora\"\n"
    "print(f\"Profesión: {persona['profesion']}\")\n\n"
    "# 3. Recorrer e imprimir todos los datos\n"
    "print(\"\\nDatos completos:\")\n"
    "for clave, valor in persona.items():\n"
    "    print(f\"  {clave}: {valor}\")\n\n"
    "# 4. Buscador de símbolo de moneda\n"
    "monedas = {\"Euro\": \"€\", \"Dolar\": \"$\", \"Yen\": \"¥\", \"Peso\": \"$\"}\n"
    "divisa = \"Euro\"  # Cambiá este valor\n"
    "if divisa in monedas:\n"
    "    print(f\"Símbolo de {divisa}: {monedas[divisa]}\")\n"
    "else:\n"
    "    print(f\"La divisa '{divisa}' no está en el diccionario\")\n\n"
    "# 5. Comprensión de diccionarios\n"
    "cuadrados = {x: x**2 for x in range(1, 8)}\n"
    "print(f\"\\nCuadrados: {cuadrados}\")\n"
)

# ---------------------------------------------------------------------------
# LECCIÓN 7 – Funciones
# ---------------------------------------------------------------------------

l7_teoria = "\n".join([
    h1("Funciones y Parámetros"),
    p("Una función es un bloque de código <strong>reutilizable</strong> que realiza una tarea específica. "
      "Definirlas bien es esencial para escribir código limpio y mantenible (principio DRY: "
      "<em>Don't Repeat Yourself</em>)."),

    h2("1. Definición básica"),
    code_block(
        "def saludar(nombre):        # nombre es el parámetro\n"
        "    \"\"\"Retorna un saludo personalizado.\"\"\"  # docstring\n"
        "    return f\"Hola, {nombre}!\"\n\n"
        "print(saludar(\"Diego\"))     # 'Diego' es el argumento\n"
        "print(saludar(\"Ana\"))"
    ),

    h2("2. Parámetros con valor por defecto"),
    p2("Los parámetros con valor por defecto son <strong>opcionales</strong> al llamar la función."),
    code_block(
        "def calcular_iva(precio, iva=0.21):\n"
        "    return precio * (1 + iva)\n\n"
        "print(calcular_iva(1000))        # 1210.0  (IVA 21% por defecto)\n"
        "print(calcular_iva(1000, 0.10))  # 1100.0  (IVA 10%)"
    ),
    warn("<strong>Los valores por defecto se evalúan UNA SOLA VEZ</strong> al definirse la función. "
         "Evitá usar objetos mutables (listas, dicts) como valor por defecto, puede causar bugs inesperados."),

    h2("3. Retorno múltiple"),
    p2("Python permite retornar varios valores separados por coma. En realidad devuelve una <strong>tupla</strong>."),
    code_block(
        "def contar_vocales(cadena):\n"
        "    cadena = cadena.lower()\n"
        "    abiertas = sum(1 for c in cadena if c in \"aeo\")\n"
        "    cerradas  = sum(1 for c in cadena if c in \"iu\")\n"
        "    return abiertas, cerradas, len(cadena)\n\n"
        "a, c, total = contar_vocales(\"La argentinidad al palo\")\n"
        "print(f\"Abiertas: {a}, Cerradas: {c}, Total: {total}\")"
    ),

    h2("4. *args y **kwargs"),
    p2("<code>*args</code> captura múltiples argumentos posicionales como una tupla. "
       "<code>**kwargs</code> captura argumentos nombrados como un diccionario."),
    code_block(
        "def sumar(*args):\n"
        "    return sum(args)\n\n"
        "print(sumar(1, 2, 3))       # 6\n"
        "print(sumar(10, 20, 30, 40))# 100\n\n"
        "def mostrar(**kwargs):\n"
        "    for k, v in kwargs.items():\n"
        "        print(f\"{k}: {v}\")\n\n"
        "mostrar(nombre=\"Laura\", edad=25, ciudad=\"Córdoba\")"
    ),

    h2("5. Scope: Local vs. Global"),
    code_block(
        "contador = 0  # Variable global\n\n"
        "def incrementar():\n"
        "    global contador          # Necesario para modificar la global\n"
        "    contador += 1\n\n"
        "incrementar()\n"
        "print(contador)  # 1"
    ),
    tip("<strong>Buena práctica:</strong> Evitá usar <code>global</code> cuando sea posible. "
        "Preferí que las funciones reciban los datos por parámetro y los retornen como resultado. "
        "Esto hace el código más predecible y testeable."),
])

l7_codigo = (
    "# ── Práctica: Funciones ──\n\n"
    "# 1. Factorial iterativo\n"
    "def factorial(n):\n"
    "    \"\"\"Retorna el factorial de n.\"\"\"\n"
    "    resultado = 1\n"
    "    for i in range(1, n + 1):\n"
    "        resultado *= i\n"
    "    return resultado\n\n"
    "print(f\"5! = {factorial(5)}\")\n"
    "print(f\"6! = {factorial(6)}\")\n\n"
    "# 2. Calcular IVA con valor por defecto\n"
    "def calcular_iva(precio, iva=0.21):\n"
    "    return round(precio * (1 + iva), 2)\n\n"
    "print(f\"$1000 + 21% IVA = ${calcular_iva(1000)}\")\n"
    "print(f\"$1000 + 10% IVA = ${calcular_iva(1000, 0.10)}\")\n\n"
    "# 3. Retorno múltiple: área de círculo y volumen de cilindro\n"
    "from math import pi\n\n"
    "def area_circulo(radio):\n"
    "    return pi * radio**2\n\n"
    "def volumen_cilindro(radio, altura):\n"
    "    return area_circulo(radio) * altura\n\n"
    "print(f\"Área círculo r=5: {area_circulo(5):.2f}\")\n"
    "print(f\"Volumen cilindro r=5, h=10: {volumen_cilindro(5, 10):.2f}\")\n\n"
    "# 4. *args: función suma flexible\n"
    "def sumar(*numeros):\n"
    "    return sum(numeros)\n\n"
    "print(f\"Suma: {sumar(1, 2, 3, 4, 5)}\")\n"
)

# ---------------------------------------------------------------------------
# ESTRUCTURA FINAL DEL JSON
# ---------------------------------------------------------------------------

modulo_1_lecciones = [
    {
        "id": "m1_l1",
        "titulo": "Variables, Tipos de Datos y Operadores",
        "url": "leccion.html?id=m1_l1",
        "teoria_html": l1_teoria,
        "codigo_inicial": l1_codigo,
    },
    {
        "id": "m1_l2",
        "titulo": "Strings: Métodos, Slicing e Input",
        "url": "leccion.html?id=m1_l2",
        "teoria_html": l2_teoria,
        "codigo_inicial": l2_codigo,
    },
    {
        "id": "m1_l3",
        "titulo": "Condicionales y Lógica Booleana",
        "url": "leccion.html?id=m1_l3",
        "teoria_html": l3_teoria,
        "codigo_inicial": l3_codigo,
    },
    {
        "id": "m1_l4",
        "titulo": "Iteraciones: for, while y range()",
        "url": "leccion.html?id=m1_l4",
        "teoria_html": l4_teoria,
        "codigo_inicial": l4_codigo,
    },
    {
        "id": "m1_l5",
        "titulo": "Listas y Colecciones",
        "url": "leccion.html?id=m1_l5",
        "teoria_html": l5_teoria,
        "codigo_inicial": l5_codigo,
    },
    {
        "id": "m1_l6",
        "titulo": "Diccionarios",
        "url": "leccion.html?id=m1_l6",
        "teoria_html": l6_teoria,
        "codigo_inicial": l6_codigo,
    },
    {
        "id": "m1_l7",
        "titulo": "Funciones y Parámetros",
        "url": "leccion.html?id=m1_l7",
        "teoria_html": l7_teoria,
        "codigo_inicial": l7_codigo,
    },
]

contenidos = {
    "modulos": [
        {
            "id": "modulo_1",
            "titulo": "Módulo 1: Dominio de Python 'Puro' (Core)",
            "descripcion": "Aprende las bases sólidas del lenguaje Python.",
            "lecciones": modulo_1_lecciones,
        },
        {
            "id": "modulo_2",
            "titulo": "Módulo 2: Entorno y Herramientas",
            "descripcion": "Prepara tu entorno de trabajo profesional.",
            "lecciones": [
                {
                    "id": "m2_l1",
                    "titulo": "Entornos Virtuales (venv, conda)",
                    "url": "leccion.html?id=m2_l1",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Entornos Virtuales (venv, conda)</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>entornos virtuales (venv, conda)</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Entornos Virtuales (venv, conda)\n",
                },
                {
                    "id": "m2_l2",
                    "titulo": "Git y Control de Versiones",
                    "url": "leccion.html?id=m2_l2",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Git y Control de Versiones</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>git y control de versiones</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Git y Control de Versiones\n",
                },
            ],
        },
        {
            "id": "modulo_3",
            "titulo": "Módulo 3: Bases de Datos",
            "descripcion": "Conecta e interactúa con bases de datos relacionales.",
            "lecciones": [
                {
                    "id": "m3_l1",
                    "titulo": "Introducción a SQL",
                    "url": "leccion.html?id=m3_l1",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Introducción a SQL</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>introducción a sql</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Introducción a SQL\n",
                },
                {
                    "id": "m3_l2",
                    "titulo": "Integración con Python (SQLite/SQLAlchemy)",
                    "url": "leccion.html?id=m3_l2",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Integración con Python (SQLite/SQLAlchemy)</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>integración con python (sqlite/sqlalchemy)</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Integración con Python (SQLite/SQLAlchemy)\n",
                },
            ],
        },
        {
            "id": "modulo_4",
            "titulo": "Módulo 4: Rutas de Especialización",
            "descripcion": "Elige tu camino: Web, Datos o Scripting.",
            "lecciones": [
                {
                    "id": "m4_l1",
                    "titulo": "Desarrollo Web (FastAPI, Django)",
                    "url": "leccion.html?id=m4_l1",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Desarrollo Web (FastAPI, Django)</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>desarrollo web (fastapi, django)</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Desarrollo Web (FastAPI, Django)\n",
                },
                {
                    "id": "m4_l2",
                    "titulo": "Data Science (NumPy, Pandas)",
                    "url": "leccion.html?id=m4_l2",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Data Science (NumPy, Pandas)</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>data science (numpy, pandas)</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Data Science (NumPy, Pandas)\n",
                },
                {
                    "id": "m4_l3",
                    "titulo": "Automatización y Web Scraping",
                    "url": "leccion.html?id=m4_l3",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Automatización y Web Scraping</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>automatización y web scraping</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Automatización y Web Scraping\n",
                },
            ],
        },
        {
            "id": "modulo_5",
            "titulo": "Módulo 5: Algoritmos y Clean Code",
            "descripcion": "Escribe código profesional y mantenible.",
            "lecciones": [
                {
                    "id": "m5_l1",
                    "titulo": "Principios Clean Code y PEP 8",
                    "url": "leccion.html?id=m5_l1",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Principios Clean Code y PEP 8</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>principios clean code y pep 8</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Principios Clean Code y PEP 8\n",
                },
                {
                    "id": "m5_l2",
                    "titulo": "Algoritmos y Optimización",
                    "url": "leccion.html?id=m5_l2",
                    "teoria_html": (
                        "<h1 class='text-3xl font-extrabold mb-4'>Algoritmos y Optimización</h1>"
                        "<p class='text-lg text-gray-600 dark:text-gray-300 mb-4'>"
                        "Sección teórica interactiva. Los conceptos avanzados de <strong>algoritmos y optimización</strong>"
                        " del entorno profesional son detallados en los módulos de suscripción avanzada o en próximas"
                        " actualizaciones del temario. ¡Sigue superando tus metas!</p>"
                        "<div class='bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded my-6'>"
                        "<p class='text-sm'><i class='fa-solid fa-lightbulb text-yellow-500 mr-2'></i>"
                        " <strong>Consejo:</strong> Usa el editor para repasar libremente.</p></div>"
                    ),
                    "codigo_inicial": "# Explora y repasa libremente Algoritmos y Optimización\n",
                },
            ],
        },
    ]
}

out_path = os.path.join(os.path.dirname(__file__), "data", "contenidos.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(contenidos, f, ensure_ascii=False, indent=2)

# Verificación
total_lecciones = sum(len(m["lecciones"]) for m in contenidos["modulos"])
print(f"✅ contenidos.json generado correctamente.")
print(f"   Módulos: {len(contenidos['modulos'])}")
print(f"   Lecciones totales: {total_lecciones}")
for m in contenidos["modulos"]:
    print(f"   {m['id']}: {len(m['lecciones'])} lecciones → {[l['id'] for l in m['lecciones']]}")
