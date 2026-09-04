# BitGods version history

This is the canonical index of every BitGods version currently supported by repository evidence or preserved project records. It distinguishes archived checkpoints from named lineage and reconstructed milestones.

## Evidence levels

| Label | Meaning |
| --- | --- |
| Archived | Manifest or packaged checkpoint is preserved and inspectable. |
| Current | Source is the active root build and passes the current verifier. |
| Documented | The milestone is named in preserved project records, but its standalone artifact is not present. |
| Gap | No reliable version-specific artifact or release record is currently available. |

## Original build train

Versions B001–B015 are preserved as named design lineage only. The current repository does not contain their standalone manifests or source snapshots.

| Build | Name | Evidence |
| --- | --- | --- |
| B001 | Genesis | Documented |
| B002 | Ecology | Documented |
| B003 | Life | Documented |
| B004 | Minds | Documented |
| B005 | Society | Documented |
| B006 | Settlement | Documented |
| B007 | Economy | Documented |
| B008 | Crafting / Engineering | Documented |
| B009 | Knowledge | Documented |
| B010 | Civilization | Documented |
| B011 | Combat / Adventure | Documented |
| B012 | Planetary Ecology | Documented |
| B013 | World Expansion | Documented |
| B014 | Integration | Documented |
| B015 | Player Experience | Documented |

## Archived B-series checkpoints

Each row below is backed by its manifest in [`archive/build-history/`](archive/build-history/).

| Version | Build | Focus | Preserved status |
| --- | --- | --- | --- |
| 0.16.0-prealpha | B016 | Content Factory | Structured content baseline |
| 0.17.0-prealpha | B017 | Polish | Presentation contract baseline |
| 0.18.0-prealpha | B018 | Alpha Integration | Headless vertical slice verified |
| 0.19.0-prealpha | B019 | Runtime Client | Minimal browser runtime |
| 0.20.0-prealpha | B020 | Playable Systems | Additive runtime module |
| 0.21.0-prealpha | B021 | Emergent Settlement | Headless emergence gate verified |
| 0.22.0-prealpha | B022 | Multi-Settlement Economy | Headless economy gate verified |
| 0.23.0-prealpha | B023 | Institutions, Markets, Civilization | Headless civilization gate verified |
| 0.24.0-prealpha | B024 | Government, Law, Culture, Diplomacy | Governance scenario verified |
| 0.25.0-prealpha | B025 | War, Migration, Collapse, Succession | Headless conflict-causality gate verified |
| 0.26.0-prealpha | B026 | Science, Genetics, Atomic, Quantum | Headless science-progression gate verified |
| 0.27.0-prealpha | B027 | God Mode and Timeline Forks | Headless counterfactual gate verified |
| 0.28.0-prealpha | B028 | Runtime Unification | Browser integration adapter |
| 0.29.0-prealpha | B029 | Canvas Simulation Integration | Visible canvas integration |
| 0.30.0-prealpha | B030 | Living World Integration | Headless living-world gate verified |
| 0.31.0-prealpha | B031 | Live Emergence Scale | Scale gate verified with canvas telemetry |
| 0.32.0-alpha | B032 | Playtest Alpha Packaging | Alpha package ready for human testing |
| 0.33.0-alpha | B033 | Alpha Triage Readiness | Pre-triage ready |
| 0.34.0-alpha | B034 | Runtime Verification | Local HTTP runtime verified |

## Modern playable lineage

| Version | Focus | Evidence | Verification at release |
| --- | --- | --- | --- |
| 67 | Canonical persistence and recovery overhaul | Documented | Structural validation; device migration remained open |
| 72 | Open-world civilization network | Documented | Canonical basis recorded by 73.0 |
| 73.0.0 | Item and progression overhaul | Archived package | 20/20 static architecture gates; device runtime QA required |
| 74.0.0 | Settlement identity and cutaway architecture | Archived package | Static pass; device runtime QA required |
| 75.0.0 | Release integrity and RPG interface | Archived package | 18/18 deterministic runtime gates |
| 76.0.0 | Atmosphere and combat presentation quality | Archived package | 25/25 deterministic runtime gates |
| 77.0.0 | Deterministic dungeon quality | Archived package | 28/28 deterministic runtime gates at release; later audit identified a verifier limitation and intermittent missing callout helper |
| 77.1.0 | Interface clarity and character scale | Current | 32/32 deterministic runtime gates; callout defect repaired |

### Known gaps

- No reliable standalone checkpoint is currently preserved for modern versions 35–66.
- Version 67 is documented, but versions 68–71 do not have reliable standalone records in the current archive.
- Version 72 is documented as the canonical basis of 73.0, but its standalone bundle is not preserved here.
- A missing artifact should be added with provenance and a checksum; its contents must not be inferred from the version number.

## Preserved package identities

The packages are retained outside the Git source tree. These SHA-256 values identify the exact inspected archives.

| Version | Package | SHA-256 |
| --- | --- | --- |
| 73.0.0 | `BitGods_73.0.0_ITEM_PROGRESSION_OVERHAUL.zip` | `7bdd38a3094b1546fbc40c5bd24e6dd43ecde6ca26852e9067b175f4e2a23776` |
| 74.0.0 | `BitGods_74.0.0_SETTLEMENT_IDENTITY_CUTAWAY_OVERHAUL.zip` | `9c1cd134a04971c6c1326c21084b93c89b32773f6612b4f86e83aa32f4219b50` |
| 75.0.0 | `BitGods_75.0.0_RELEASE_INTEGRITY_RPG_INTERFACE.zip` | `52c1f03be96a9551d9a1a1f1d3341d95c984732192bd8f92706bf06f4c377eaf` |
| 76.0.0 | `BitGods_76.0.0_ATMOSPHERE_COMBAT_QUALITY.zip` | `5c8af4a92b4571ee505ba5337280ac2b86a137de29fd040c58e853bb5f7cddb4` |
| 77.0.0 | `BitGods_77.0.0_DETERMINISTIC_DUNGEON_QUALITY.zip` | `1763978760da33b032cc7f8efefb5e8e6611f1b50a01a05ad5ec6291291c869c` |
| 77.1.0 | `BitGods_77.1.0_INTERFACE_CLARITY_SCALE.zip` | `e90b56db1a12a8c65024ef32f586e4b245a960b40546969a8ad5c4dd4366c9c4` |

## Git publication history

The repository was imported on August 22, 2026, promoted to the 77.1 playable line on September 3, and reorganized without gameplay changes on September 4. Git commit dates describe repository publication, not necessarily the original creation date of each earlier checkpoint.
