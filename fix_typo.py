import glob
import os

project_dir = r"c:\Users\lucas\Desktop\Proyectos de 2026\sitio-de_apendisaje-Python"

html_files = glob.glob(os.path.join(project_dir, "*.html"))

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Enable typography plugin
    if 'src="https://cdn.tailwindcss.com"' in content:
        content = content.replace('src="https://cdn.tailwindcss.com"', 'src="https://cdn.tailwindcss.com?plugins=typography"')

    # Bump prose size in leccion.html
    if os.path.basename(file_path) == "leccion.html":
        content = content.replace('class="prose dark:prose-invert max-w-none"', 'class="prose prose-lg dark:prose-invert max-w-none"')
        
    # Bump prose size in ejercicios.html
    if os.path.basename(file_path) == "ejercicios.html":
        content = content.replace('class="prose dark:prose-invert prose-sm"', 'class="prose prose-lg dark:prose-invert max-w-none"')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Actualización de tipografía aplicada a todos los archivos HTML.")
