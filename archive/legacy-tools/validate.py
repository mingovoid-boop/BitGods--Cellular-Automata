import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
required = {"id", "type", "name", "version", "status", "tags", "provenance"}
cat = json.loads((root / "content" / "starter_catalog.json").read_text())
errors = []
ids = set()
for i, record in enumerate(cat.get("records", [])):
    missing = required - record.keys()
    if missing: errors.append(f"record[{i}] missing {sorted(missing)}")
    rid = record.get("id")
    if rid in ids: errors.append(f"duplicate id: {rid}")
    ids.add(rid)
if errors:
    print("FAIL")
    print("\n".join(errors))
    raise SystemExit(1)
print(f"PASS: {len(ids)} starter records validated")
