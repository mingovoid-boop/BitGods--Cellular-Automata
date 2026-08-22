#!/usr/bin/env python3
from pathlib import Path
import json, sys
ROOT = Path(__file__).resolve().parents[1]
INDEX = json.loads((ROOT/"content/content.index.json").read_text(encoding="utf-8"))
errors=[]
seen={}
all_ids=set()
docs=[]
for rel in INDEX["catalogs"]:
    p=ROOT/"content"/rel
    if not p.exists():
        errors.append(f"missing catalog: {rel}")
        continue
    try:
        data=json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        errors.append(f"invalid json {rel}: {e}")
        continue
    docs.append((rel,data))
    if isinstance(data,list):
        for obj in data:
            if isinstance(obj,dict) and "id" in obj:
                i=obj["id"]
                if i in seen: errors.append(f"duplicate id {i}: {seen[i]} and {rel}")
                seen[i]=rel; all_ids.add(i)
# Validate known reference-bearing keys conservatively.
for rel,data in docs:
    if not isinstance(data,list): continue
    for obj in data:
        if not isinstance(obj,dict): continue
        for key in ("requires","unlocks"):
            for ref in obj.get(key,[]) or []:
                if ref.startswith(("mat.","structure.","machine.","tech.","item.","creature.","plant.","gene.","cell.","event.","quest.","biome.")) and ref not in all_ids:
                    # capability refs are intentionally external registry references
                    if not ref.startswith("capability."):
                        errors.append(f"unresolved reference {ref} in {obj.get('id')} ({rel})")
if errors:
    print("B016 VALIDATION: FAIL")
    for e in errors: print(" -",e)
    sys.exit(1)
print(f"B016 VALIDATION: PASS | {len(all_ids)} registered content IDs | {len(docs)} catalogs")
