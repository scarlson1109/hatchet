# Event Messages

## Executioner Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `executioner.event.deeper_into_the_ship_the_darkness_seems_almost_to_writhe_` | "deeper into the ship, the darkness seems almost to writhe." | 'text': [ | - | executioner | executioner.js |
| `executioner.event.a_small_knapsack_hangs_from_a_cluster_of_webs_a_few_feet_from_the_floor_` | "a small knapsack hangs from a cluster of webs, a few feet from the floor." | _('thick, sticky webbing covers the walls of the corridor.'),  | - | executioner | executioner.js |
| `executioner.event.scraps_of_copper_wire_litter_the_floor_` | "scraps of copper wire litter the floor." | _('the military has set up a small camp just inside the ship.'),  | - | executioner | executioner.js |
| `executioner.event.two_bedrolls_are_wedged_into_a_corner_` | "two bedrolls are wedged into a corner." | _('crude attempts have been made to cut into the walls.'),  | - | executioner | executioner.js |
| `executioner.event.the_partially_devoured_remains_of_several_wanderers_are_piled_before_a_dark_corridor_` | "the partially devoured remains of several wanderers are piled before a dark corridor." | '3-3': { | - | executioner | executioner.js |
| `executioner.event.shuffling_noises_can_be_heard_from_within_` | "shuffling noises can be heard from within." | 'text': [ | - | executioner | executioner.js |
| `executioner.event.bits_of_them_can_be_scavenged_` | "bits of them can be scavenged." | _('must have been the engine room, once. the massive machines now stand inert, twisted and scorched by explosions.'), | - | executioner | executioner.js |
| `executioner.event.hinges_rusted_through_no_challenge_` | "hinges rusted through. no challenge." | '6-2a-intro': { | - | executioner | executioner.js |
| `executioner.event.the_air_is_cooler_here_low_cabinets_ring_the_room_doors_dusted_with_frost_` | "the air is cooler here. low cabinets ring the room, doors dusted with frost." | '12-1': { | - | executioner | executioner.js |
| `executioner.event.samples_of_something_biological_inside_` | "samples of something biological inside." | 'text': [ | - | executioner | executioner.js |
| `executioner.event.the_air_in_this_room_has_a_metallic_tinge_floor_is_covered_in_dark_powder_` | "the air in this room has a metallic tinge. floor is covered in dark powder." | '13-2b': { | - | executioner | executioner.js |
| `executioner.event.some_completed_explosives_in_the_corner_` | "some completed explosives in the corner." | 'text': [ | - | executioner | executioner.js |
| `executioner.event.found_some_medical_supplies_in_a_discarded_bag_` | "found some medical supplies in a discarded bag." | '3b': { | - | executioner | executioner.js |

## Setpieces Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `setpieces.event.can_t_tell_what_left_it_here_` | "can't tell what left it here." | _("rot's been to work on it, and some of the pieces are missing."), | - | setpieces | setpieces.js |

## World Module

| Key | Text | Context | Variables | Module | File |
|-----|------|---------|-----------|---------|------|
| `world.event.an_nbsp_outpost` | "An&nbsp;Outpost" | // Setpiece definitions | - | world | world.js |
| `world.event.iron_nbsp_mine` | "Iron&nbsp;Mine" | // Setpiece definitions | - | world | world.js |
| `world.event.coal_nbsp_mine` | "Coal&nbsp;Mine" | World.LANDMARKS[World.TILE.OUTPOST] = { num: 0, minRadius: 0, maxRadius: 0, scene: 'outpost', label: _('An&nbsp;Outpost') }; | - | world | world.js |
| `world.event.sulphur_nbsp_mine` | "Sulphur&nbsp;Mine" | World.LANDMARKS[World.TILE.IRON_MINE] = { num: 1, minRadius: 5, maxRadius: 5, scene: 'ironmine', label:  _('Iron&nbsp;Mine') }; | - | world | world.js |
| `world.event.an_nbsp_old_nbsp_house` | "An&nbsp;Old&nbsp;House" | World.LANDMARKS[World.TILE.COAL_MINE] = { num: 1, minRadius: 10, maxRadius: 10, scene: 'coalmine', label:  _('Coal&nbsp;Mine') }; | - | world | world.js |
| `world.event.a_nbsp_damp_nbsp_cave` | "A&nbsp;Damp&nbsp;Cave" | World.LANDMARKS[World.TILE.SULPHUR_MINE] = { num: 1, minRadius: 20, maxRadius: 20, scene: 'sulphurmine', label:  _('Sulphur&nbsp;Mine') }; | - | world | world.js |
| `world.event.an_nbsp_abandoned_nbsp_town` | "An&nbsp;Abandoned&nbsp;Town" | World.LANDMARKS[World.TILE.HOUSE] = { num: 10, minRadius: 0, maxRadius: World.RADIUS * 1.5, scene: 'house', label:  _('An&nbsp;Old&nbsp;House') }; | - | world | world.js |
| `world.event.a_nbsp_ruined_nbsp_city` | "A&nbsp;Ruined&nbsp;City" | World.LANDMARKS[World.TILE.CAVE] = { num: 5, minRadius: 3, maxRadius: 10, scene: 'cave', label:  _('A&nbsp;Damp&nbsp;Cave') }; | - | world | world.js |
| `world.event.a_nbsp_crashed_nbsp_starship` | "A&nbsp;Crashed&nbsp;Starship" | World.LANDMARKS[World.TILE.TOWN] = { num: 10, minRadius: 10, maxRadius: 20, scene: 'town', label:  _('An&nbsp;Abandoned&nbsp;Town') }; | - | world | world.js |
| `world.event.a_nbsp_borehole` | "A&nbsp;Borehole" | World.LANDMARKS[World.TILE.CITY] = { num: 20, minRadius: 20, maxRadius: World.RADIUS * 1.5, scene: 'city', label:  _('A&nbsp;Ruined&nbsp;City') }; | - | world | world.js |
| `world.event.a_nbsp_battlefield` | "A&nbsp;Battlefield" | World.LANDMARKS[World.TILE.SHIP] = { num: 1, minRadius: 28, maxRadius: 28, scene: 'ship', label:  _('A&nbsp;Crashed&nbsp;Starship')}; | - | world | world.js |
| `world.event.a_nbsp_murky_nbsp_swamp` | "A&nbsp;Murky&nbsp;Swamp" | World.LANDMARKS[World.TILE.BOREHOLE] = { num: 10, minRadius: 15, maxRadius: World.RADIUS * 1.5, scene: 'borehole', label:  _('A&nbsp;Borehole')}; | - | world | world.js |
| `world.event.a_nbsp_ravaged_nbsp_battleship` | "A&nbsp;Ravaged&nbsp;Battleship" | World.LANDMARKS[World.TILE.BATTLEFIELD] = { num: 5, minRadius: 18, maxRadius: World.RADIUS * 1.5, scene: 'battlefield', label:  _('A&nbsp;Battlefield')}; | - | world | world.js |
| `world.event.a_nbsp_destroyed_nbsp_village` | "A&nbsp;Destroyed&nbsp;Village" | // Only add the cache if there is prestige data | - | world | world.js |

