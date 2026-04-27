// problems_data.js — Banco de problemas de práctica alineados con contenidos.json
window.LESSON_PROBLEMS = {

  // m1_l1: Variables, Tipos de Datos y Operadores
  m1_l1: [
    {
      titulo: "Calculadora de presentación personal",
      descripcion: 'Creá 4 variables con tus datos personales e imprimí cada una junto con su tipo usando <code>type()</code>:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Tu <strong>nombre</strong> (str)</li><li>Tu <strong>edad</strong> (int)</li><li>Tu <strong>altura</strong> (float)</li><li>Si sos <strong>estudiante</strong> (bool)</li></ul>',
      ejemplo: "Ana  <class 'str'>\n22  <class 'int'>",
      codigo_inicial: "nombre     = \"\"\nedad       = 0\naltura     = 0.0\nestudiante = False\n\nprint(nombre, type(nombre))\nprint(edad,   type(edad))\nprint(altura, type(altura))\nprint(estudiante, type(estudiante))\n"
    },
    {
      titulo: "Convertidor de temperatura",
      descripcion: 'Convertí <strong>25°C a Fahrenheit</strong> con la fórmula <code>F = (C × 9/5) + 32</code>. Imprimí el resultado formateado con 2 decimales y su tipo.',
      ejemplo: "25°C equivale a 77.00°F\nTipo: <class 'float'>",
      codigo_inicial: "celsius = 25\nfahrenheit = 0  # Completá la fórmula\n\nprint(f\"{celsius}°C equivale a {fahrenheit:.2f}°F\")\nprint(\"Tipo:\", type(fahrenheit))\n"
    },
    {
      titulo: "Operadores aritméticos y de comparación",
      descripcion: 'Con <strong>a = 17</strong> y <strong>b = 5</strong>, calculá e imprimí: suma, resta, multiplicación, división, división entera, módulo y potencia. Luego imprimí si a es mayor que b y si son iguales.',
      ejemplo: "17 + 5 = 22\n17 % 5 = 2\n17 > 5: True",
      codigo_inicial: "a = 17\nb = 5\n\nprint(f\"{a} + {b} =\", a + b)\nprint(f\"{a} - {b} =\", a - b)\n# Completá el resto de operaciones\n"
    }
  ],

  // m1_l2: Strings: Métodos, Slicing e Input
  m1_l2: [
    {
      titulo: "Analizador de strings",
      descripcion: 'Dada la variable <code>frase = "Python es un lenguaje poderoso"</code>, imprimí:<ul class="list-disc pl-5 mt-2 space-y-1"><li>La frase en mayúsculas y en minúsculas</li><li>Cuántas palabras tiene</li><li>Si contiene la palabra "poderoso"</li><li>La frase al revés usando slicing</li></ul>',
      ejemplo: "PYTHON ES UN LENGUAJE PODEROSO\nPalabras: 5\nContiene poderoso: True",
      codigo_inicial: "frase = \"Python es un lenguaje poderoso\"\n\nprint(frase.upper())\nprint(frase.lower())\n# Completá los demás\n"
    },
    {
      titulo: "Slicing avanzado",
      descripcion: 'Con el string <code>texto = \"Programacion\"</code>, usá slicing para obtener e imprimir:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Los primeros 5 caracteres</li><li>Los últimos 4 caracteres</li><li>Los caracteres en posiciones pares</li><li>El texto al revés</li></ul>',
      ejemplo: "Progr\ncion\nPormcoi\nnoicamargorP",
      codigo_inicial: "texto = \"Programacion\"\n\nprint(texto[:5])\n# Completá el resto usando slicing\n"
    },
    {
      titulo: "Formateador de datos con input",
      descripcion: 'Pedile al usuario su nombre, ciudad y año de nacimiento usando <code>input()</code>. Luego imprimí una presentación formateada calculando su edad aproximada (2025 - año_nacimiento) y el nombre en mayúsculas.',
      ejemplo: "=== Presentación ===\nNombre: ANA\nCiudad: Buenos Aires\nEdad aproximada: 23 años",
      codigo_inicial: "nombre = input(\"Tu nombre: \")\nciudad = input(\"Tu ciudad: \")\nanio   = int(input(\"Año de nacimiento: \"))\n\nedad = 2025 - anio\n# Imprimí la presentación formateada\n"
    }
  ],

  // m1_l3: Condicionales y Lógica Booleana
  m1_l3: [
    {
      titulo: "Clasificador de edades",
      descripcion: 'Clasificá las edades <code>[8, 15, 30, 70]</code> con <code>for</code> e <code>if/elif/else</code>:<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>0-12:</strong> Niño/a</li><li><strong>13-17:</strong> Adolescente</li><li><strong>18-64:</strong> Adulto/a</li><li><strong>65+:</strong> Adulto mayor</li></ul>',
      ejemplo: "Edad 8: Niño/a\nEdad 15: Adolescente\nEdad 30: Adulto/a\nEdad 70: Adulto mayor",
      codigo_inicial: "edades = [8, 15, 30, 70]\n\nfor edad in edades:\n    if edad <= 12:\n        categoria = \"Niño/a\"\n    # Completá elif y else\n    print(f\"Edad {edad}: {categoria}\")\n"
    },
    {
      titulo: "Calculadora de descuentos",
      descripcion: 'Dado un precio y cantidad comprada, aplicá el descuento correspondiente:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Cantidad ≥ 100: 20% descuento</li><li>Cantidad ≥ 50: 10% descuento</li><li>Cantidad ≥ 10: 5% descuento</li><li>Menos de 10: sin descuento</li></ul><p class="mt-2">Imprimí precio original, descuento aplicado y precio final.</p>',
      ejemplo: "Precio: $100\nDescuento: 10%\nPrecio final: $90.00",
      codigo_inicial: "precio   = 100\ncantidad = 50\n\n# Determiná el descuento con if/elif/else\ndescuento = 0\n\nprecio_final = precio * (1 - descuento / 100)\nprint(f\"Precio original: ${precio}\")\nprint(f\"Descuento: {descuento}%\")\nprint(f\"Precio final: ${precio_final:.2f}\")\n"
    },
    {
      titulo: "Evaluador de año bisiesto",
      descripcion: 'Un año es bisiesto si es divisible por 4, EXCEPTO si es divisible por 100, SALVO que también sea divisible por 400. Evaluá los años <code>[2000, 1900, 2024, 2023]</code> e imprimí si cada uno es bisiesto o no.',
      ejemplo: "2000: Bisiesto ✓\n1900: No bisiesto\n2024: Bisiesto ✓\n2023: No bisiesto",
      codigo_inicial: "anios = [2000, 1900, 2024, 2023]\n\nfor anio in anios:\n    # Usá operadores lógicos: and, or, not\n    bisiesto = False  # Reemplazá con la condición correcta\n    estado = \"Bisiesto ✓\" if bisiesto else \"No bisiesto\"\n    print(f\"{anio}: {estado}\")\n"
    }
  ],

  // m1_l4: Iteraciones: for, while y range()
  m1_l4: [
    {
      titulo: "Tabla de multiplicar del 7",
      descripcion: 'Generá la tabla de multiplicar del <strong>7</strong> del 1 al 10 usando <code>range()</code>. Al final mostrá cuántos resultados son pares.',
      ejemplo: "7 × 1 = 7\n7 × 2 = 14\n...\nResultados pares: 5",
      codigo_inicial: "numero = 7\npares  = 0\n\nfor i in range(1, 11):\n    resultado = numero * i\n    print(f\"{numero} × {i} = {resultado}\")\n    if resultado % 2 == 0:\n        pares += 1\n\nprint(f\"\\nResultados pares: {pares}\")\n"
    },
    {
      titulo: "FizzBuzz del 1 al 30",
      descripcion: 'Para cada número del 1 al 30:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Múltiplo de <strong>3 y 5</strong>: imprimí "FizzBuzz"</li><li>Múltiplo de <strong>3</strong>: "Fizz"</li><li>Múltiplo de <strong>5</strong>: "Buzz"</li><li>Otro: el número</li></ul>',
      ejemplo: "1\n2\nFizz\n4\nBuzz\n...",
      codigo_inicial: "for n in range(1, 31):\n    if n % 15 == 0:\n        print(\"FizzBuzz\")\n    # Completá los elif y else\n"
    },
    {
      titulo: "Acumulador con while",
      descripcion: 'Usá un bucle <code>while</code> para acumular números ingresados por el usuario. El bucle termina cuando el usuario escriba "0". Al final imprimí la suma total, el promedio y la cantidad de números ingresados.',
      ejemplo: "Ingresá un número (0 para terminar): 5\nIngresá un número: 3\nIngresá un número: 0\nSuma: 8 | Promedio: 4.0 | Cantidad: 2",
      codigo_inicial: "suma     = 0\ncantidad = 0\n\nwhile True:\n    numero = int(input(\"Ingresá un número (0 para terminar): \"))\n    if numero == 0:\n        break\n    # Actualizá suma y cantidad\n\nif cantidad > 0:\n    print(f\"Suma: {suma} | Promedio: {suma/cantidad:.1f} | Cantidad: {cantidad}\")\n"
    }
  ],

  // m1_l5: Listas y Colecciones
  m1_l5: [
    {
      titulo: "Operaciones con listas",
      descripcion: 'Dada la lista <code>notas = [85, 42, 91, 67, 55, 78, 93, 40]</code>:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Imprimí cuántas notas hay</li><li>Imprimí la nota más alta y más baja</li><li>Calculá el promedio</li><li>Creá una nueva lista solo con notas aprobatorias (≥60)</li><li>Ordená la lista original de mayor a menor</li></ul>',
      ejemplo: "Total: 8\nMáxima: 93 | Mínima: 40\nPromedio: 68.9\nAprobadas: [85, 91, 67, 78, 93]",
      codigo_inicial: "notas = [85, 42, 91, 67, 55, 78, 93, 40]\n\nprint(f\"Total: {len(notas)}\")\nprint(f\"Máxima: {max(notas)} | Mínima: {min(notas)}\")\n# Calculá el promedio\n# Filtrá las aprobatorias\n# Ordená de mayor a menor\n"
    },
    {
      titulo: "Set y Tuple: diferencias clave",
      descripcion: 'Trabajá con estas estructuras:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Creá una <strong>tuple</strong> de meses del año e imprimí el 3° y el último mes</li><li>Dada la lista <code>[1,2,2,3,3,3,4,5,5]</code>, convertila a <strong>set</strong> para obtener los únicos</li><li>Imprimí la diferencia entre len de la lista y el set</li></ul>',
      ejemplo: "Mes 3: Marzo | Último: Diciembre\nSet: {1, 2, 3, 4, 5}\nDuplicados eliminados: 4",
      codigo_inicial: "meses = (\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\n         \"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\")\n\nprint(f\"Mes 3: {meses[2]} | Último: {meses[-1]}\")\n\nnumeros = [1,2,2,3,3,3,4,5,5]\nnumeros_unicos = set(numeros)\n# Imprimí el set y la diferencia de longitudes\n"
    },
    {
      titulo: "List comprehension",
      descripcion: 'Usando <strong>list comprehension</strong>:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Creá una lista de los cuadrados de 1 a 10</li><li>Filtrá los números pares de 1 a 20</li><li>Creá una lista de strings en MAYÚSCULAS a partir de <code>[\"python\", \"es\", \"genial\"]</code></li></ul>',
      ejemplo: "Cuadrados: [1, 4, 9, ..., 100]\nPares: [2, 4, 6, ..., 20]\nMayúsculas: ['PYTHON', 'ES', 'GENIAL']",
      codigo_inicial: "# 1. Cuadrados del 1 al 10\ncuadrados = [x**2 for x in range(1, 11)]\nprint(\"Cuadrados:\", cuadrados)\n\n# 2. Pares del 1 al 20\n# Tu código aquí\n\n# 3. Palabras en mayúsculas\npalabras = [\"python\", \"es\", \"genial\"]\n# Tu código aquí\n"
    }
  ],

  // m1_l6: Diccionarios
  m1_l6: [
    {
      titulo: "Agenda de contactos",
      descripcion: 'Creá un diccionario de contactos <code>{nombre: telefono}</code> con al menos 3 entradas. Luego:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Imprimí todos los contactos con su teléfono</li><li>Buscá un contacto por nombre (usá <code>.get()</code>)</li><li>Agregá un nuevo contacto</li><li>Eliminá uno existente</li><li>Imprimí cuántos contactos quedan</li></ul>',
      ejemplo: "Ana: 1234\nCarlos: 5678\nContacto nuevo agregado\nTotal: 3",
      codigo_inicial: "agenda = {\n    \"Ana\":    \"1234-5678\",\n    \"Carlos\": \"8765-4321\",\n    \"María\":  \"1111-2222\"\n}\n\n# Imprimí todos con for k,v in agenda.items():\n# Buscá \"Ana\" con .get()\n# Agregá un nuevo contacto\n# Eliminá uno\nprint(f\"Total contactos: {len(agenda)}\")\n"
    },
    {
      titulo: "Contador de palabras",
      descripcion: 'Dada la frase <code>"el gato y el perro y el pato"</code>, contá cuántas veces aparece cada palabra usando un diccionario. Al final imprimí las palabras ordenadas por frecuencia.',
      ejemplo: "el: 3\ny: 2\ngato: 1\nperro: 1\npato: 1",
      codigo_inicial: "frase = \"el gato y el perro y el pato\"\npalabras = frase.split()\n\ncontador = {}\nfor palabra in palabras:\n    # Si ya existe, sumá 1; si no, iniciala en 1\n    pass\n\n# Imprimí ordenado por frecuencia (de mayor a menor)\nfor palabra, freq in sorted(contador.items(), key=lambda x: x[1], reverse=True):\n    print(f\"{palabra}: {freq}\")\n"
    },
    {
      titulo: "Inventario de tienda",
      descripcion: 'Gestioná un inventario con diccionario anidado. Cada producto tiene <code>precio</code> y <code>stock</code>. Implementá funciones para:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Mostrar todos los productos con precio y stock</li><li>Calcular el valor total del inventario (precio × stock de cada uno)</li><li>Encontrar el producto más caro</li></ul>',
      ejemplo: "Manzana: $1.50 x 100 unid.\nValor total: $XXX\nMás caro: Laptop",
      codigo_inicial: "inventario = {\n    \"Manzana\": {\"precio\": 1.50,  \"stock\": 100},\n    \"Leche\":   {\"precio\": 2.30,  \"stock\": 50},\n    \"Laptop\":  {\"precio\": 999.0, \"stock\": 5},\n}\n\n# 1. Mostrá todos los productos\nfor nombre, datos in inventario.items():\n    print(f\"{nombre}: ${datos['precio']} x {datos['stock']} unid.\")\n\n# 2. Calculá el valor total del inventario\n# 3. Encontrá el producto más caro\n"
    }
  ],

  // m1_l7: Funciones y Parámetros
  m1_l7: [
    {
      titulo: "Calculadora con 4 operaciones",
      descripcion: 'Creá las funciones <code>sumar</code>, <code>restar</code>, <code>multiplicar</code> y <code>dividir</code>. Para <code>dividir</code>, retorná <code>None</code> si el divisor es 0 y mostrá un mensaje. Probá cada una con <strong>10 y 3</strong> e imprimí los resultados.',
      ejemplo: "10 + 3 = 13\n10 - 3 = 7\n10 × 3 = 30\n10 / 3 = 3.33",
      codigo_inicial: "def sumar(a, b):\n    return a + b\n\ndef restar(a, b):\n    pass\n\ndef multiplicar(a, b):\n    pass\n\ndef dividir(a, b):\n    pass  # Manejá la división por cero\n\nprint(f\"10 + 3 = {sumar(10, 3)}\")\n# Completá las demás\n"
    },
    {
      titulo: "Evaluador de contraseñas",
      descripcion: 'Creá la función <code>evaluar_contrasena(pwd)</code> que clasifique según estas reglas:<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Débil:</strong> menos de 8 caracteres</li><li><strong>Media:</strong> 8+ chars pero le falta dígito o mayúscula</li><li><strong>Fuerte:</strong> 8+ chars, al menos un dígito y una mayúscula</li></ul><p class="mt-2">Probá con al menos 3 contraseñas distintas e imprimí cada resultado.</p>',
      ejemplo: "abc → Débil\ncontrasena → Media\nContrasena1 → Fuerte",
      codigo_inicial: "def evaluar_contrasena(pwd):\n    tiene_mayuscula = any(c.isupper() for c in pwd)\n    tiene_digito    = any(c.isdigit() for c in pwd)\n    # Implementá la lógica de clasificación\n    pass\n\nprint(evaluar_contrasena(\"abc\"))\nprint(evaluar_contrasena(\"contrasena\"))\nprint(evaluar_contrasena(\"Contrasena1\"))\n"
    },
    {
      titulo: "Función con *args y **kwargs",
      descripcion: 'Creá la función <code>presentar(*nombres, **datos)</code> que:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Salude a cada nombre en <code>*nombres</code></li><li>Imprima cada dato extra de <code>**kwargs</code> (como ciudad, edad)</li></ul><p class="mt-2">Llamala con al menos 2 nombres y 2 datos extra.</p>',
      ejemplo: "Hola, Ana!\nHola, Luis!\nciudad: Buenos Aires\nedad: 25",
      codigo_inicial: "def presentar(*nombres, **datos):\n    for nombre in nombres:\n        print(f\"Hola, {nombre}!\")\n    for clave, valor in datos.items():\n        print(f\"{clave}: {valor}\")\n\npresentar(\"Ana\", \"Luis\", ciudad=\"Buenos Aires\", edad=25)\n"
    }
  ]
};
