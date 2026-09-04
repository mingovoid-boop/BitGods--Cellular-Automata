from pathlib import Path
import json,sys
R=Path(__file__).resolve().parents[1]
req=["art/pixel_dna/manifest.json","ui/ui_manifest.json","audio/audio_dna.json","accessibility/accessibility.json","tests/visual_qa.json","builds/B017.manifest.json"]
err=[]
for rel in req:
 p=R/rel
 if not p.exists(): err.append("missing "+rel); continue
 try: json.loads(p.read_text(encoding="utf-8"))
 except Exception as e: err.append(f"invalid {rel}: {e}")
p=json.loads((R/"art/pixel_dna/manifest.json").read_text())
if p["rendering"]["filter"]!="nearest": err.append("pixel filtering must be nearest")
if not p["rendering"]["integer_scale"]: err.append("integer scaling required")
u=json.loads((R/"ui/ui_manifest.json").read_text())
for s in ["main_menu","game_hud","cellular_table","codex","god_mode"]:
 if s not in u["screens"]: err.append("missing screen "+s)
if err:
 print("B017 VALIDATION: FAIL")
 [print(" -",e) for e in err]
 sys.exit(1)
print("B017 VALIDATION: PASS | presentation contracts coherent")
