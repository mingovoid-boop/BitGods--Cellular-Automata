# BitGods 77.1

The current root build is a self-contained offline HTML RPG. Open `START_HERE.html` or `index.html` directly—no install, server, or internet connection is required.

## Current playable

- Click/tap terrain to move.
- Click/tap an enemy to target, approach, and attack without opening a floating target card.
- Use the compact action bar for attacks, weapon abilities, skills, dodge, interactions, gear, and world navigation.
- Close the in-game QA checklist with **X**; reopen it from the compact **QA** button.
- Player rendering is reduced to 78%; NPC rendering is enlarged to 128% with matching interaction bounds.
- Deterministic dungeon, combat, NPC routing/trading, item, progression, atmosphere, and recovery-save systems are retained from 77.0.

Run the release verification with:

```bash
node verify-runtime.cjs
```

Current automated status: **32/32 checks pass**. Physical Android visual, touch, audio, heat, and sustained-frame-rate checks are still required.

## Development archive

The remaining B-series files preserve the earlier structured design and simulation package.

## Active gate
B014 Integration is the architecture freeze point. B015 defines player experience. B016 Content Factory is next.

## Contents
- `docs/` canonical product and simulation contracts
- `schemas/` machine-readable content contracts
- `content/` starter content catalogs
- `tests/` acceptance and QA definitions
- `builds/` build-train manifests
- `tools/` validation/build entry points

## Build train
B001 Genesis → B002 Ecology → B003 Life → B004 Minds → B005 Society → B006 Settlement → B007 Economy → B008 Crafting/Engineering → B009 Knowledge → B010 Civilization → B011 Combat/Adventure → B012 Planetary Ecology → B013 World Expansion → B014 Integration → B015 Player Experience → B016 Content Factory → B017 Polish → B018 Alpha → B019 RC → B020 v1.0.

## Core law

State has an owner. Actions require capabilities. Change occurs through transformations. Important changes emit causal events. Knowledge is not global. Resources do not teleport. Rendering does not define simulation truth.

## v0.16 update
B016 Content Factory is now structurally instantiated with domain catalogs, a content index, a B016 manifest, acceptance gate and static validator.

This historical section did **not** claim runtime gameplay integration; the root 77.1 build above is now the playable runtime.


[![Netlify Status](https://api.netlify.com/api/v1/badges/ca6ac1e3-f33e-460c-b611-491923975cd1/deploy-status)](https://app.netlify.com/projects/bitgods/deploys)
