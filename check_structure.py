import json

with open('data/contenidos.json', encoding='utf-8') as f:
    d = json.load(f)

for m in d['modulos']:
    print(f"\nMODULO {m['id']}: {m['titulo']}")
    for l in m['lecciones']:
        print(f"  {l['id']} - {l['titulo']}")
