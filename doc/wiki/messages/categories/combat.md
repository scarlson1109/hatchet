# Combat Messages

## Encounters Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `encounters.combat.snarling_beast` | "snarling beast" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_snarling_beast_is_dead` | "the snarling beast is dead" | enemy: 'snarling beast', | - | encounters | encounters.js |
| `encounters.combat.gaunt_man` | "gaunt man" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_gaunt_man_is_dead` | "the gaunt man is dead" | enemy: 'gaunt man', | - | encounters | encounters.js |
| `encounters.combat.strange_bird` | "strange bird" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_strange_bird_is_dead` | "the strange bird is dead" | enemy: 'strange bird', | - | encounters | encounters.js |
| `encounters.combat.shivering_man` | "shivering man" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_shivering_man_is_dead` | "the shivering man is dead" | enemy: 'shivering man', | - | encounters | encounters.js |
| `encounters.combat.man_eater` | "man-eater" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_man_eater_is_dead` | "the man-eater is dead" | enemy: 'man-eater', | - | encounters | encounters.js |
| `encounters.combat.scavenger` | "scavenger" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_scavenger_is_dead` | "the scavenger is dead" | enemy: 'scavenger', | - | encounters | encounters.js |
| `encounters.combat.lizard` | "lizard" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_lizard_is_dead` | "the lizard is dead" | enemy: 'lizard', | - | encounters | encounters.js |
| `encounters.combat.feral_terror` | "feral terror" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_feral_terror_is_dead` | "the feral terror is dead" | enemy: 'feral terror', | - | encounters | encounters.js |
| `encounters.combat.soldier` | "soldier" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_soldier_is_dead` | "the soldier is dead" | enemy: 'soldier', | - | encounters | encounters.js |
| `encounters.combat.sniper` | "sniper" | combat: true, | - | encounters | encounters.js |
| `encounters.combat.the_sniper_is_dead` | "the sniper is dead" | enemy: 'sniper', | - | encounters | encounters.js |

## Executioner Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `executioner.combat.debris_is_stacked_in_the_corridor_forming_a_low_barricade_` | "debris is stacked in the corridor, forming a low barricade." | '2-3': { | - | executioner | executioner.js |
| `executioner.combat.the_walls_are_scorched_and_melted_` | "the walls are scorched and melted." | 'text': [ | - | executioner | executioner.js |
| `executioner.combat.behind_the_barricade_a_few_weapons_lay_abandoned_` | "behind the barricade, a few weapons lay abandoned." | _('debris is stacked in the corridor, forming a low barricade.'),  | - | executioner | executioner.js |
| `executioner.combat.ancient_beast` | "ancient beast" | combat: true, | - | executioner | executioner.js |
| `executioner.combat.weapons_are_strewn_about_the_medical_dispatch_bay_must_have_been_used_as_a_muster_point_` | "weapons are strewn about the medical dispatch bay. must have been used as a muster point." | '7-1': { | - | executioner | executioner.js |
| `executioner.combat.more_strange_graffiti_adorns_the_walls_` | "more strange graffiti adorns the walls." | 'text': [ | - | executioner | executioner.js |
| `executioner.combat.small_weapons_cache_in_a_cabinet_` | "small weapons cache in a cabinet." | '3a': { | - | executioner | executioner.js |
| `executioner.combat.lucky_` | "lucky." | 'text': [ | - | executioner | executioner.js |

## Localization Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `localization.combat.coal_mine` | "coal mine" | _('iron mine'), | - | localization | localization.js |
| `localization.combat.sulphur_miner` | "sulphur miner" | _('coal miner'), | - | localization | localization.js |
| `localization.combat.sulphur_mine` | "sulphur mine" | _('coal mine'), | - | localization | localization.js |
| `localization.combat.armourer` | "armourer" | _('sulphur miner'), | - | localization | localization.js |
| `localization.combat.steelworker` | "steelworker" | _('sulphur mine'), | - | localization | localization.js |
| `localization.combat.bait` | "bait" | _('armourer'), | - | localization | localization.js |

## Path Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `path.combat.none` | "none" | // Add the armour row | - | path | path.js |
| `path.combat.kinetic` | "kinetic" | var armour = _("none"); | - | path | path.js |
| `path.combat.steel` | "steel" | armour = _("kinetic"); | - | path | path.js |
| `path.combat.iron` | "iron" | armour = _("steel"); | - | path | path.js |
| `path.combat.use_with_rifle` | "use with rifle" | var carryable = $.extend({ | - | path | path.js |
| `path.combat.emits_a_soft_red_glow` | "emits a soft red glow" | 'bolas': {type: 'weapon' }, | - | path | path.js |
| `path.combat.restores` | "restores" | 'charm': {type: 'tool'}, | - | path | path.js |
| `path.combat.hp` | "hp" | 'charm': {type: 'tool'}, | - | path | path.js |

## World Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `world.combat.punch` | "punch" | Weapons: { | - | world | world.js |
| `world.combat.stab` | "stab" | }, | - | world | world.js |
| `world.combat.swing` | "swing" | }, | - | world | world.js |
| `world.combat.slash` | "slash" | }, | - | world | world.js |
| `world.combat.thrust` | "thrust" | }, | - | world | world.js |
| `world.combat.shoot` | "shoot" | }, | - | world | world.js |
| `world.combat.blast` | "blast" | }, | - | world | world.js |
| `world.combat.lob` | "lob" | }, | - | world | world.js |
| `world.combat.tangle` | "tangle" | }, | - | world | world.js |
| `world.combat.disintigrate` | "disintigrate" | }, | - | world | world.js |
| `world.combat.slice` | "slice" | }, | - | world | world.js |
| `world.combat.stun` | "stun" | }, | - | world | world.js |

