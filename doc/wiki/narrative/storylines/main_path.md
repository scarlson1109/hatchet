# Main Path Narrative Flow

## The Room
[MECHANIC: fire]
[THEME: survival]

darkness. cold seeps through thin walls. embers die in the fireplace.
the room is freezing. the fire is dead.
the wind howls outside.

[EVENT: fire_awakens]
builder stokes the fire.
the light from the fire spills from the windows, out into the dark.
warmth returns.

## The Builder's Rise
[MECHANIC: building]
[CHARACTER: builder]

the stranger is standing by the fire. she says she can help. says she builds things.
builder says she can make traps to catch any creatures might still be alive out there.
builder says she can make a cart for carrying wood.

[EVENT: village_start]
builder puts up a hut, out in the forest. says word will get around.
the hunting lodge stands in the forest, a ways out of town.

## The Village Growth
[MECHANIC: trade]
[RESOURCE: wood, fur, meat]

[EVENT: village_expansion]
a weathered family takes up in one of the huts.
a small group arrives, all dust and bones.
a convoy lurches in, equal parts worry and hope.

[EVENT: village_development]
tannery goes up quick, on the edge of the village
builder finishes the smokehouse. she looks hungry.
workshop's finally ready. builder's excited to get to it.

[EVENT: village_threats]
the sickness is spreading through the village.
medicine is needed immediately.
a pack of snarling beasts pours out of the trees.
the fight is short and bloody, but the beasts are repelled.

## The Forest
[MECHANIC: exploration]
[RESOURCE: wood, fur]

the sky is grey and the wind blows relentlessly.
dry brush and dead branches litter the forest floor.

[EVENT: forest_encounters]
a snarling beast leaps out of the underbrush.
the grass thrashes wildly as a huge lizard pushes through.
a gaunt man approaches, a crazed look in his eye.

## The Wasteland
[MECHANIC: exploration, survival]
[THEME: desolation]

[EVENT: terrain_transition]
the trees yield to dry grass. the yellowed brush rustles in the wind.
the trees are gone. parched earth and blowing dust are poor replacements.
the barrens break at a sea of dying grass, swaying in the arid breeze.

[EVENT: resource_discovery]
an iron mine
a coal mine
a sulphur mine
a borehole

[EVENT: wasteland_encounters]
a soldier opens fire from across the desert.
a shot rings out, from somewhere in the long grass.
a scavenger draws close, hoping for an easy score.

## The Ruins
[MECHANIC: scavenging]
[THEME: civilization]

[EVENT: settlement_exploration]
an old house remains here, once white siding yellowed and peeling.
a small suburb lays ahead, empty houses scorched and peeling.
the towers that haven't crumbled jut from the landscape like the ribcage of some ancient beast.

[EVENT: military_encounters]
the military has set up a small camp just inside the city.
soldiers patrol the perimeter, rifles slung over their shoulders.
well armed men charge out of the forest, firing into the crowd.

## The First Ship
[MECHANIC: technology]
[LOCATION: crashed_starship]

[EVENT: ship_discovery]
the familiar curves of a wanderer vessel rise up out of the dust and ash.
lucky that the natives can't work the mechanisms.
with a little effort, it might fly again.

[EVENT: ship_salvage]
the interior of the ship is cold and dark.
the walls hum faintly.
deeper into the ship, the darkness seems almost to writhe.

## The Executioner
[MECHANIC: combat]
[LOCATION: ravaged_battleship]

[EVENT: battleship_infiltration]
metal grinds, and the elevator doors open halfway. beyond is a brightly lit battlefield.
remains litter the corridor, undisturbed by scavengers.
looks like they tried to barricade the elevators.

[EVENT: wing_exploration]
[LOCATION: engineering_wing]
experimental plans cover one wall, held by an unseen force.
an automated assembly line performs its empty routines.
must have been the engine room, once.

[LOCATION: martial_wing]
ruined defence turrets flank the corridor.
crew cabins flank the hall, devoid of life.
weapons are strewn about.

[LOCATION: medical_wing]
containment cells arranged at the back of the room, all open.
more medical robots stand frozen, attached by a network of wires.
the machines here look unfinished, abandoned by their creator.

## The Truth
[MECHANIC: revelation]
[THEME: discovery]

[EVENT: blueprint_collection]
hypo blueprint: advanced medical technology
kinetic armour blueprint: force field protection
plasma rifle blueprint: devastating energy weapon
stim blueprint: combat enhancement
glowstone blueprint: mysterious power source

[EVENT: final_discovery]
beyond the bulkhead is a small antechamber, seemingly untouched by scavengers.
a strange device sits on the floor. looks important.
samples of something biological inside.

[EVENT: ending]
the crystal pulses brightly, then goes dark.
time to get out of here.

[CORE PROGRESSION MARKERS]
- fire lit (Room.js: _FIRE_COOL_DELAY)
- builder awakens (Room.js: _BUILDER_STATE_DELAY)
- village established (Room.Craftables: hut, lodge)
- wasteland explored (World.TILE_PROBS)
- ruins scavenged (World.LANDMARKS)
- first ship found (World.TILE.SHIP)
- executioner infiltrated (World.TILE.EXECUTIONER)
- blueprints recovered (Events.Executioner)
- truth revealed (World.state.medical, engineering, martial)