# BitGods

BitGods is a self-contained offline pixel RPG with click/tap movement, contextual combat, NPC trading, cutaway buildings, deterministic dungeons, item progression, atmosphere, and recovery-safe local saves.

- **Current build:** 77.1.0
- **Automated gate:** 32/32 passing
- **Device gate:** Android visual, touch, audio, heat, and sustained-frame-rate testing still required

## Play

Open [`START_HERE.html`](START_HERE.html) or [`index.html`](index.html) directly in a modern browser. The game requires no install, server, account, or network connection.

### Controls

- Click or tap terrain to move.
- Click or tap an enemy to target, approach, and attack.
- Use the action bar for attacks, abilities, skills, dodge, interaction, equipment, and navigation.
- Close the tester checklist with **X** and reopen it with **QA**.

## Verify

Install Node.js, then run:

```bash
node verify-runtime.cjs
```

The verifier covers boot evaluation, core-system ownership, world update/render, enemy targeting, combat, projectile behavior, NPC routing and trading, inventory transactions, progression, save recovery, building cutaways, and deterministic dungeon generation.

## Repository layout

| Path | Purpose |
| --- | --- |
| `index.html` | Current browser entry point and deploy target |
| `START_HERE.html` | Identical offline-friendly entry point |
| `verify-runtime.cjs` | Deterministic release verifier |
| `PROJECT_STATE.json` | Machine-readable current release state |
| `QUALITY_GATE.md` | Current evidence and remaining device gates |
| `CHANGELOG.md` | Release history |
| `VERSION_HISTORY.md` | Complete evidence-labeled version index |
| `archive/` | Preserved B016-B034 development history and retired prototypes |

The current runtime is intentionally self-contained. Files under `archive/` are reference material and are not loaded by the game.

## Release rule

A build is not production-final until both the automated verifier and the physical-device checklist pass. Static or simulated checks do not substitute for Android touch, audio, resume, temperature, and sustained-performance evidence.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca6ac1e3-f33e-460c-b611-491923975cd1/deploy-status)](https://app.netlify.com/projects/bitgods/deploys)
