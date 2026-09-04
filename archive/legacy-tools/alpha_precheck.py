from pathlib import Path
import json,sys
R=Path(__file__).resolve().parents[1]
required=["client/index.html","client/game.js","alpha/PLAYTEST.md","builds/B032.manifest.json"]
missing=[x for x in required if not (R/x).exists()]
print("BITGODS ALPHA PRECHECK")
if missing:
 print("FAIL")
 for x in missing: print("missing:",x)
 sys.exit(1)
print("PASS")
print("client:",R/"client/index.html")
print("playtest:",R/"alpha/PLAYTEST.md")
