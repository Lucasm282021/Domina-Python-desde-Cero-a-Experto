# Plan de Implementación: "Dominio Profesional de Python: De Cero a Experto"

El objetivo es crear una plataforma web educativa interactiva, moderna y responsive sin requerir un backend complejo, utilizando tecnologías web estándar (HTML5, CSS3, JavaScript) e integrando herramientas avanzadas como ejecución de Python en el navegador (Pyodide) y persistencia de progreso local (LocalStorage).

## Construcción del Diseño y UI
Para lograr una estética premium (estilo Coursera/Platzi/Udemy) se utilizará **Tailwind CSS** (vía CDN para desarrollo rápido sin dependencias pesadas de Node, o como build paso si se prefiere) combinado con un archivo `styles.css` para animaciones personalizadas (glassmorphism, micro-animaciones) y variables CSS para el cambio de temas claro/oscuro. Se integrará **Font Awesome** para la iconografía y **Google Fonts** (ej. 'Inter' u 'Outfit').

## Cambios Propuestos

### Generación de Estructura de Directorios

Se creará la siguiente estructura base en el directorio de trabajo:
- `/css/styles.css`
- `/js/app.js` (Lógica global, temas)
- `/js/quiz.js` (Lógica de cuestionarios)
- `/js/editor.js` (Integración CodeMirror/Ace + Pyodide para ejecución de código)
- `/js/progress.js` (Cálculo de progreso y localStorage)
- `/assets/images/` y `/assets/icons/`
- `/data/contenidos.json` (Estructura de módulos y lecciones en formato JSON)

---

### Implementación de Vistas (HTML)

#### [NUEVO] `index.html` (Landing Page)
- Hero section impactante con llamado a la acción.
- Sección de "Qué vas a aprender" extraída dinámicamente o estructurada.
- Footer con links y navegación.

#### [NUEVO] `cursos.html` (Índice)
- Panel con las tarjetas de los 5 Módulos.
- Barras de progreso generales e individuales por módulo (leyendo de LocalStorage).

#### [NUEVO] `leccion.html` (Layout Principal de Aprendizaje)
- **Navegación Lateral** colapsable con el temario.
- **Área Central**: Teoría rica en estilos (markdown transformado a HTML o directamente HTML para la teoría).
- **Consola Interactiva**: Sección dividida con un editor de texto bonito (CodeMirror) y un panel de salida donde se ejecuta Python en tiempo real en el navegador usando **Pyodide**.

#### [NUEVO] `ejercicios.html` (Retos Prácticos)
- Interface similar a `leccion.html` pero con foco en el enunciado de un problema y evaluación del código del estudiante contra un resultado esperado.

#### [NUEVO] `evaluaciones.html` (Quizzes)
- Formularios interactivos tipo multiple-choice generados dinámicamente desde Javascript basado en los capítulos.

#### [NUEVO] `certificado.html` (Diploma)
- Gráfico bonito del diploma que comprueba en LocalStorage si el curso fue superado al 100%. Uso de librerías como `html2canvas` o `html2pdf.js` para permitir descarga.

---

### Lógica Core (JavaScript)

#### [NUEVO] `js/app.js`
- Gestión de tema claro/oscuro en `localStorage`.
- Interactividad de la barra lateral (Sidebar) en móviles y escritorio.
- Animaciones dinámicas de navegación.

#### [NUEVO] `js/editor.js`
- Inicialización de **Pyodide** para disponer de un intérprete Python puro en el navegador.
- Integración de **CodeMirror** o **Monaco Editor** para brindar experiencia de editor real (coloreado sintáctico, autocompletado básico).
- Funciones de `Ejecutar`, `Limpiar Consola` y `Ver Solución`.

#### [NUEVO] `js/progress.js`
- API interna para marcar lecciones como leídas.
- Actualización de barras de progreso en el DOM según el porcentaje de lecciones y quizzes completados interactuando con el objeto JSON del temario.

#### [NUEVO] `data/contenidos.json`
- Estructura base conteniendo los 5 módulos descritos junto a sus respectivos temas, links a lecciones y datos para generar el temario lateral dinámicamente.

## Preguntas Abiertas

> [!CAUTION]
> **Decisión Técnica sobre TailwindCSS:** ¿Prefieres utilizar Tailwind CSS vía CDN (ideal para páginas estáticas rápidas, sin tener que ejecutar `npm install`) o a través de un proyecto formal inicializado con `npm` y proceso de build? En mi recomendación, usar Tailwind CDN para este tamaño de proyecto HTML puro acelera mucho el desarrollo y evita problemas de configuración, pero te limitará un poco en optimización final pro.

> [!NOTE]
> **Contenido de las Lecciones:** Para la implementación inicial, popularé `leccion.html` con un ejemplo robusto correspondiente al "Módulo 1: Fundamentos". Los demás temas podrán ser enrutados dinámicamente o requerirán duplicar la plantilla `leccion.html` para sus contenidos. ¿Te parece bien manejar el primer módulo como demo 100% funcional y la estructura para el resto?

## Plan de Verificación

### Verificación Manual
1. **Testing de Responsividad**: Comprobar que en pantallas pequeñas la barra lateral se oculta y el editor de código se acomoda horizontalmente.
2. **Modo Tema**: Comprobar que el interruptor oscuro/claro se aplique instántameante y sobreviva a refrescos de la página (localStorage).
3. **Ejecución Python**: Cargar `leccion.html`, escribir código válido de Python (ej: `print("Hola Mundo")`), pulsar ejecutar y verificar si la salida se renderiza. También probar un error sintáctico para confirmar el manejo de errores.
4. **Progreso**: Completar un módulo y confirmar en el panel principal que el porcentaje refleja la subida.
5. **Diploma**: Tratar de imprimir el diploma sin progreso al 100% (debería bloquear) o con progreso al 100% (debería exportar archivo pdf o imagen).
