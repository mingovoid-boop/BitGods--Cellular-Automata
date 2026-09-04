from pathlib import Path
import re,sys
R=Path(__file__).resolve().parents[2]/"client"
req=["index.html","style.css","game.js"]
err=[x for x in req if not (R/x).exists()]
js=(R/"game.js").read_text()
for token in ["WorldCreated","ResourceGathered","MachineBuilt","QuestCreated","QuestResolved","LootAcquired","WorldSaved","WorldLoaded","localStorage"]:
    if token not in js: err.append("missing runtime token "+token)
html=(R/"index.html").read_text()
for control in ["pause","step","gather","craft","save","load"]:
    if f'id="{control}"' not in html: err.append("missing control "+control)
if err:
 print("B019 VALIDATION: FAIL"); [print(" -",e) for e in err]; sys.exit(1)
print("B019 VALIDATION: PASS | browser runtime vertical slice present")
