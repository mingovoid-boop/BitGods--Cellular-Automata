# BitGods 75.0 — Release Integrity + RPG Interface

> Repository maintenance on 2026-09-04 moved the B016-B034 build history and retired prototypes into a documented `archive/` hierarchy. The deployed 77.1 game files remain byte-for-byte unchanged.

Added a unified RPG click/tap interaction model: terrain moves, NPCs are approached and engaged, and enemies are targeted, approached to weapon range, and attacked. Added a seven-slot desktop hotbar, compact five-slot mobile bar, target panel, keyboard controls, optional mobile joystick, and accessible Settings tab.

Established the Ancient Circuitry brand: basalt panels, bone text, oxidized iron, relic gold, ember combat cues, signal-cyan magic, geometric BitGods mark, and a rebuilt launch screen.

Restored capped A-star NPC routing and replaced role trade mutations with an atomic NPC_TRADE boundary.

Replaced raw primary/backup persistence with revisioned checksum envelopes, staging verification, backup rotation, corruption rejection, and best-valid-candidate recovery.

Fixed two stop-the-line runtime defects exposed by executable verification: the missing enemy-status processor, the missing projectile simulation, and the absent character-art contract/equipment binding.

Added articulated NPC arms, walking gait, distinct clothing palettes, hats, hair, carried profession tools/accessories, and nameplates for all eight Mosswatch residents.

Added direct two-way trading with every NPC. Personal stock reflects each resident's profession and relationship discounts affect prices.

Reworked buildings into an elevated three-quarter/cutaway presentation. Solid preserves the exterior silhouette, Smart reveals rooms near the player, and Cutaway keeps interiors visible. Interacting at a door enters/leaves a highlighted room view. ROOF is available on mobile; R cycles modes on keyboard.

Preserved the canonical item ledger, progression core, renderer, game loop, input router, UI system, combat core and save/apply pipeline.
# 76.0.0 — Atmosphere + Combat Presentation Quality

- Consolidated regional tint, time-of-day, weather, ambient motion and performance scaling into one `ATMOSPHERE_SYSTEM`.
- Added persistent Low / Balanced / Full world-atmosphere control with adaptive caps of 4 / 9 / 16 ambient elements.
- Added six regional atmosphere profiles, dusk/night settlement window light, restrained vignette and static-storm rain language.
- Rebuilt combat presentation around nine weapon families with individual windup, contact and recovery poses.
- Added authored projectile silhouettes/trails for arrows, arcane shots, static, bone, thorn, hex and hostile bolts.
- Added family-specific slash width and arc language, including spear thrusts, axe weight, hammer impact and scythe sweep.
- Fixed canonical equipped-weapon lookup and the missing combat distance helper uncovered by the new gates.
- Expanded deterministic validation to 25 tests; all pass.
# 77.0.0 — Deterministic Dungeon Run Integrity

- Added authoritative `DUNGEON_RUN` generation, validation, fingerprint and resume boundaries.
- Fixed Fractured Vault entrances that could land outside the first room.
- Fixed unreachable Reliquary bonus-chest generation.
- Validated rooms, waves, bosses, checkpoints, chest floors and branch-specific reward counts.
- Added deterministic same-seed replay tests and a 120-seed layout-entry sweep.
- Expanded the full runtime suite to 28 passing gates.

# 77.1.0 — Interface Clarity + Character Scale

- Removed the separate floating enemy target panel; click/tap targeting, approach and auto-attack behavior remain intact.
- Added a touch-safe close button to the release checklist and a compact QA control that reopens it.
- Persisted the checklist open/closed preference across reloads.
- Reduced the player render to 78% for a better world-scale relationship.
- Enlarged NPC rendering to 128% and expanded NPC tap/click targeting to match the new silhouettes.
- Restored the missing rate-limited `tacticalCallout()` helper that could intermittently break resisted melee hits.
- Expanded deterministic validation to 32 tests; all pass.
