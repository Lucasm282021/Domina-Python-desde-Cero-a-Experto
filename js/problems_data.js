// problems_data.js — Banco de problemas de práctica por lección (selección aleatoria)
window.LESSON_PROBLEMS = {

  // ─── Lección 1: Variables y Tipos de Datos ─────────────────────────────
  m1_l1: [
    {
      titulo: "Calculadora de presentación personal",
      descripcion: 'Completá las variables e imprimilas con sus tipos:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Tu <strong>nombre</strong> (str)</li><li>Tu <strong>edad</strong> (int)</li><li>Tu <strong>altura</strong> (float)</li><li>Si sos <strong>estudiante</strong> (bool)</li></ul><p class="mt-2">Usá <code>type()</code> para mostrar el tipo de cada una.</p>',
      ejemplo: "Ana  <class 'str'>\n22  <class 'int'>",
      codigo_inicial: "# Problema: Presentación personal\nnombre     = \"\"    # tu nombre\nedad       = 0     # tu edad\naltura     = 0.0   # altura en metros\nestudiante = False # ¿sos estudiante?\n\nprint(nombre, type(nombre))\nprint(edad,   type(edad))\nprint(altura, type(altura))\nprint(estudiante, type(estudiante))\n"
    },
    {
      titulo: "Convertidor de temperatura",
      descripcion: 'Convertí <strong>25°C a Fahrenheit</strong> con la fórmula <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">F = (C × 9/5) + 32</code>. Imprimí el resultado y su tipo con <code>type()</code>.',
      ejemplo: "25°C equivale a 77.0°F\nTipo: <class 'float'>",
      codigo_inicial: "# Problema: Convertidor de temperatura\ncelsius = 25\n\nfahrenheit = 0  # Reemplazá con: (celsius * 9/5) + 32\n\nprint(f\"{celsius}°C equivale a {fahrenheit}°F\")\nprint(\"Tipo del resultado:\", type(fahrenheit))\n"
    },
    {
      titulo: "Área y perímetro de un rectángulo",
      descripcion: 'Con <strong>base = 8.5</strong> y <strong>altura = 4</strong>, calculá el <strong>área</strong> (base × altura) y el <strong>perímetro</strong> (2 × (base + altura)). Imprimí ambos con 2 decimales.',
      ejemplo: "Área: 34.00 m²\nPerímetro: 25.00 m\nTipo área: <class 'float'>",
      codigo_inicial: "# Problema: Área y perímetro\nbase   = 8.5\naltura = 4\n\narea      = 0  # base × altura\nperimetro = 0  # 2 × (base + altura)\n\nprint(f\"Área: {area:.2f} m²\")\nprint(f\"Perímetro: {perimetro:.2f} m\")\nprint(\"Tipo área:\", type(area))\n"
    }
  ],

  // ─── Lección 2: Control de Flujo ───────────────────────────────────────
  m1_l2: [
    {
      titulo: "Clasificador de edades",
      descripcion: 'Clasificá las edades <code>[8, 15, 30, 70]</code> con <code>for</code> e <code>if/elif/else</code>:<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>0-12:</strong> Niño/a</li><li><strong>13-17:</strong> Adolescente</li><li><strong>18-64:</strong> Adulto/a</li><li><strong>65+:</strong> Adulto mayor</li></ul>',
      ejemplo: "Edad 8: Niño/a\nEdad 15: Adolescente\nEdad 30: Adulto/a\nEdad 70: Adulto mayor",
      codigo_inicial: "# Problema: Clasificador de edades\nedades = [8, 15, 30, 70]\n\nfor edad in edades:\n    if edad <= 12:\n        categoria = \"Niño/a\"\n    elif edad <= 17:\n        categoria = \"Adolescente\"\n    elif edad <= 64:\n        categoria = \"Adulto/a\"\n    else:\n        categoria = \"Adulto mayor\"\n    print(f\"Edad {edad}: {categoria}\")\n"
    },
    {
      titulo: "Tabla de multiplicar del 7",
      descripcion: 'Generá la tabla de multiplicar del <strong>7</strong> del 1 al 10. Al final mostrá cuántos resultados son <strong>pares</strong>. Usá <code>range()</code> y un contador.',
      ejemplo: "7 × 1 = 7\n7 × 2 = 14\n...\nResultados pares: 5",
      codigo_inicial: "# Problema: Tabla de multiplicar del 7\nnumero = 7\npares  = 0\n\nfor i in range(1, 11):\n    resultado = numero * i\n    print(f\"{numero} × {i} = {resultado}\")\n    if resultado % 2 == 0:\n        pares += 1\n\nprint(f\"\\nResultados pares: {pares}\")\n"
    },
    {
      titulo: "FizzBuzz del 1 al 30",
      descripcion: 'Para cada número del 1 al 30:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Múltiplo de <strong>3 y 5</strong>: imprimí "FizzBuzz"</li><li>Múltiplo de <strong>3</strong>: "Fizz"</li><li>Múltiplo de <strong>5</strong>: "Buzz"</li><li>Otro: el número</li></ul><p class="mt-2">💡 Verificá el caso 15 primero.</p>',
      ejemplo: "1\n2\nFizz\n4\nBuzz\n...\nFizzBuzz (en 15)",
      codigo_inicial: "# Problema: FizzBuzz del 1 al 30\nfor n in range(1, 31):\n    if n % 15 == 0:\n        print(\"FizzBuzz\")\n    elif n % 3 == 0:\n        print(\"Fizz\")\n    elif n % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(n)\n"
    }
  ],

  // ─── Lección 3: Funciones y Scope ──────────────────────────────────────
  m1_l3: [
    {
      titulo: "Calculadora con 4 funciones",
      descripcion: 'Completá las funciones <code>restar</code>, <code>multiplicar</code> y <code>dividir</code> (retorná <code>None</code> si b = 0). Probá con los valores <strong>10 y 3</strong>.',
      ejemplo: "10 + 3 = 13\n10 - 3 = 7\n10 × 3 = 30\n10 / 3 = 3.33",
      codigo_inicial: "# Problema: Calculadora con funciones\ndef sumar(a, b):\n    return a + b\n\ndef restar(a, b):\n    pass  # ← implementá\n\ndef multiplicar(a, b):\n    pass  # ← implementá\n\ndef dividir(a, b):\n    if b == 0:\n        print(\"Error: no se puede dividir por cero\"); return None\n    pass  # ← implementá\n\nprint(f\"10 + 3 = {sumar(10, 3)}\")\nprint(f\"10 - 3 = {restar(10, 3)}\")\nprint(f\"10 × 3 = {multiplicar(10, 3)}\")\nr = dividir(10, 3)\nif r is not None: print(f\"10 / 3 = {r:.2f}\")\n"
    },
    {
      titulo: "Analizador de texto",
      descripcion: 'La función <code>analizar_texto(texto)</code> retorna 3 valores: chars, palabras y si es palíndromo. Agregá un <strong>texto de prueba propio</strong> a la lista. 💡 <code>s[::-1]</code> invierte el string.',
      ejemplo: '"Ana": 3 chars, palíndromo: True\n"Python": 6 chars, palíndromo: False',
      codigo_inicial: "# Problema: Analizador de texto\ndef analizar_texto(texto):\n    s = texto.replace(\" \", \"\").lower()\n    chars     = len(s)\n    palabras  = len(texto.split())\n    palindromo= s == s[::-1]\n    return chars, palabras, palindromo\n\n# Agrega un texto tuyo a la lista:\ntextos = [\"Ana\", \"Python\", \"amor a Roma\"]\n\nfor t in textos:\n    c, p, pal = analizar_texto(t)\n    print(f'\"{t}\": {c} chars, {p} palabra(s), palíndromo: {pal}')\n"
    },
    {
      titulo: "Evaluador de contraseñas",
      descripcion: 'La función ya está hecha. Agregá <strong>3 contraseñas propias</strong> a la lista (una Débil, una Media, una Fuerte) y commentá por qué cada una cae en esa categoría.',
      ejemplo: "abc → Débil\ncontrasena → Media\nContrasena1 → Fuerte",
      codigo_inicial: "# Problema: Evaluador de contraseñas\ndef evaluar_contrasena(pwd):\n    largo_ok  = len(pwd) >= 8\n    tiene_num = any(c.isdigit() for c in pwd)\n    tiene_may = any(c.isupper() for c in pwd)\n    if not largo_ok:                     return \"Débil\"\n    elif not tiene_num or not tiene_may: return \"Media\"\n    else:                                return \"Fuerte\"\n\n# Tus 3 contraseñas (una Débil, una Media, una Fuerte):\nmis_passwords = [\"abc\", \"contrasena\", \"Contrasena1\"]\n\nfor pwd in mis_passwords:\n    print(f\"{pwd} → {evaluar_contrasena(pwd)}\")\n"
    }
  ],

  // ─── Lección 4: POO ────────────────────────────────────────────────────
  m1_l4: [
    {
      titulo: "Clase Estudiante con calificaciones",
      descripcion: 'Completá <code>promedio()</code> (suma / cantidad) y <code>estado()</code> ("Aprobado" si promedio ≥ 60). Probá con notas: 75, 60, 82.',
      ejemplo: "Estudiante: Lucas\nPromedio: 72.3\nEstado: Aprobado",
      codigo_inicial: "# Problema: Clase Estudiante\nclass Estudiante:\n    def __init__(self, nombre):\n        self.nombre = nombre\n        self.notas  = []\n\n    def agregar_nota(self, nota):\n        self.notas.append(nota)\n\n    def promedio(self):\n        if not self.notas: return 0\n        pass  # ← suma de notas / cantidad\n\n    def estado(self):\n        pass  # ← \"Aprobado\" si promedio >= 60\n\ne = Estudiante(\"Lucas\")\ne.agregar_nota(75)\ne.agregar_nota(60)\ne.agregar_nota(82)\nprint(f\"Estudiante: {e.nombre}\")\nprint(f\"Promedio: {e.promedio():.1f}\")\nprint(f\"Estado: {e.estado()}\")\n"
    },
    {
      titulo: "Herencia de vehículos",
      descripcion: 'Sobreescribí <code>describir()</code> en las subclases: <code>Auto</code> debe incluir las puertas y <code>Moto</code> el tipo. Usá <code>super().__init__()</code>.',
      ejemplo: "Auto Toyota (4 puertas) — 180 km/h\nMoto Honda deportiva — 240 km/h",
      codigo_inicial: "# Problema: Jerarquía de vehículos\nclass Vehiculo:\n    def __init__(self, marca, vel_max):\n        self.marca   = marca\n        self.vel_max = vel_max\n    def describir(self):\n        return f\"{self.marca} — {self.vel_max} km/h\"\n\nclass Auto(Vehiculo):\n    def __init__(self, marca, vel_max, puertas):\n        super().__init__(marca, vel_max)\n        self.puertas = puertas\n    def describir(self):\n        pass  # incluí self.puertas en el mensaje\n\nclass Moto(Vehiculo):\n    def __init__(self, marca, vel_max, tipo):\n        super().__init__(marca, vel_max)\n        self.tipo = tipo\n    def describir(self):\n        pass  # incluí self.tipo en el mensaje\n\nprint(Auto(\"Toyota\", 180, 4).describir())\nprint(Moto(\"Honda\", 240, \"deportiva\").describir())\n"
    },
    {
      titulo: "Contador con límites mínimo y máximo",
      descripcion: 'Completá <code>decrementar()</code> usando <code>max()</code>, <code>reiniciar()</code> para volver a 0, y <code>__str__</code> que muestre el estado.',
      ejemplo: "Contador [0/10]: 0\nDespués de +3: 3\nDespués de -10: 0",
      codigo_inicial: "# Problema: Contador con límites\nclass Contador:\n    def __init__(self, minimo=0, maximo=10):\n        self.valor  = 0\n        self.minimo = minimo\n        self.maximo = maximo\n\n    def incrementar(self, paso=1):\n        self.valor = min(self.valor + paso, self.maximo)\n\n    def decrementar(self, paso=1):\n        self.valor = max(self.valor - paso, self.minimo)\n\n    def reiniciar(self):\n        self.valor = 0\n\n    def __str__(self):\n        return f\"Contador [{self.minimo}/{self.maximo}]: {self.valor}\"\n\nc = Contador(0, 10)\nprint(c)\nc.incrementar(3)\nprint(f\"Después de +3: {c.valor}\")\nc.decrementar(10)\nprint(f\"Después de -10: {c.valor}\")\nc.reiniciar()\nprint(f\"Después de reiniciar: {c.valor}\")\n"
    }
  ],

  // ─── Lección 5: Manejo de Errores ──────────────────────────────────────
  m1_l5: [
    {
      titulo: "División robusta con excepciones",
      descripcion: 'Probá la función con los 3 casos: <code>(10, 2)</code>, <code>(10, 0)</code>, <code>("diez", 2)</code>. El código ya maneja los errores. Asegurate de que el output muestre ✅ en éxito y ❌ en error.',
      ejemplo: "✅ 10 / 2 = 5.0\n❌ Error: No se puede dividir por cero",
      codigo_inicial: "# Problema: División segura con excepciones\ndef dividir_seguro(a, b):\n    try:\n        resultado = a / b\n        print(f\"✅ {a} / {b} = {resultado}\")\n        return resultado\n    except ZeroDivisionError:\n        print(\"❌ Error: No se puede dividir por cero\")\n        return None\n    except TypeError:\n        print(\"❌ Error: Los valores deben ser números\")\n        return None\n\ncasos = [(10, 2), (10, 0), (\"diez\", 2)]\nfor a, b in casos:\n    dividir_seguro(a, b)\n"
    },
    {
      titulo: "Validador de edades con try/except/finally",
      descripcion: 'La función <code>parsear_edad(texto)</code> ya tiene la estructura. Probá con "25", "abc", "150" y "-5". Observá cuándo se ejecuta el bloque <code>finally</code>.',
      ejemplo: 'parsear_edad("25") → 25\nparsear_edad("abc") → Error\nparsear_edad("150") → Error fuera de rango',
      codigo_inicial: "# Problema: Validador de edad\ndef parsear_edad(texto):\n    try:\n        edad = int(texto)\n        if not (0 <= edad <= 120):\n            raise ValueError(f\"Edad {edad} fuera de rango (0-120)\")\n        return edad\n    except ValueError as e:\n        print(f\"Error: {e}\")\n        return None\n    finally:\n        print(\"Validación terminada\")\n\nfor entrada in [\"25\", \"abc\", \"150\", \"-5\"]:\n    r = parsear_edad(entrada)\n    print(f\"  Resultado: {r}\\n\")\n"
    },
    {
      titulo: "Lector de archivos simulado",
      descripcion: 'Usá <code>try/except/else/finally</code> con un diccionario como sistema de archivos:<ul class="list-disc pl-5 mt-2 space-y-1"><li>Si no existe: lanzá <code>FileNotFoundError</code></li><li><code>else</code>: mostrá el contenido</li><li><code>finally</code>: siempre imprimí "Operación completada"</li></ul>',
      ejemplo: "✅ config.txt:\nBASE=sqlite3\nOperación completada\n❌ secretos.txt no encontrado",
      codigo_inicial: "# Problema: Lector de archivos simulado\narchivos = {\n    \"config.txt\":   \"BASE=sqlite3\\nPUERTO=5000\",\n    \"usuarios.txt\": \"admin,root,user1\",\n}\n\ndef leer_archivo(nombre):\n    try:\n        if nombre not in archivos:\n            raise FileNotFoundError(f\"'{nombre}' no encontrado\")\n        contenido = archivos[nombre]\n    except FileNotFoundError as e:\n        print(f\"❌ {e}\")\n    else:\n        print(f\"✅ {nombre}:\\n{contenido}\")\n    finally:\n        print(\"Operación completada\\n\")\n\nleer_archivo(\"config.txt\")\nleer_archivo(\"secretos.txt\")\nleer_archivo(\"usuarios.txt\")\n"
    }
  ]
};
