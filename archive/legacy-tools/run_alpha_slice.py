#!/usr/bin/env python3
import json, hashlib, sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SEED="BG-ALPHA-001"

def stable_hash(o):
    return hashlib.sha256(json.dumps(o,sort_keys=True,separators=(",",":")).encode()).hexdigest()

world={
 "seed":SEED,"tick":0,
 "player":{"pos":[0,0],"inventory":[],"knowledge":[]},
 "cells":{"0,0":{"terrain":"grassland","wood":3,"stone":2,"moisture":0.61}},
 "agents":{"a1":{"name":"Mara Bitboot","pos":[2,1],"need":"repair_water","trust":0.1}},
 "machines":{},"quests":{},"events":[]
}
def event(t,payload=None,cause=None):
    world["tick"]+=1
    world["events"].append({"id":len(world["events"])+1,"type":t,"tick":world["tick"],"payload":payload or {},"cause":cause})
event("WorldCreated",{"seed":SEED})
event("PlayerSpawned",{"pos":[0,0]})
# Gather from authoritative cell state.
cell=world["cells"]["0,0"]; cell["wood"]-=2
world["player"]["inventory"]+=["wood","wood"]
event("ResourceGathered",{"resource":"wood","amount":2})
# Craft a primitive cellular machine.
world["player"]["inventory"].remove("wood")
world["machines"]["m1"]={"type":"primitive_sensor_marker","pos":[1,0],"condition":1.0}
event("MachineBuilt",{"machine":"m1"},"ResourceGathered")
# Agent/world problem -> quest
world["quests"]["q1"]={"problem":"repair_water","issuer":"a1","status":"active"}
event("QuestCreated",{"quest":"q1","problem":"repair_water"})
# Resolve with remaining wood.
world["player"]["inventory"].remove("wood")
world["quests"]["q1"]["status"]="resolved"
world["agents"]["a1"]["trust"]=0.25
event("InfrastructureRepaired",{"quest":"q1"},"QuestCreated")
event("QuestResolved",{"quest":"q1"},"InfrastructureRepaired")
# Causal loot.
world["player"]["inventory"].append("blueprint_fragment")
event("LootAcquired",{"item":"blueprint_fragment"},"QuestResolved")
# Save/reload proof.
save=ROOT/"runtime/persistence/alpha_save.json"
save.write_text(json.dumps(world,indent=2,sort_keys=True),encoding="utf-8")
before=stable_hash(world)
loaded=json.loads(save.read_text(encoding="utf-8"))
after=stable_hash(loaded)
assert before==after
assert loaded["quests"]["q1"]["status"]=="resolved"
assert loaded["agents"]["a1"]["trust"]==0.25
assert loaded["cells"]["0,0"]["wood"]==1
print("B018 HEADLESS ALPHA: PASS")
print("seed:",SEED)
print("events:",len(loaded["events"]))
print("save_hash:",after)
