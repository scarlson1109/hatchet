# A Dark Room Narrative Documentation Requirements

## Overview
This document outlines how to write narrative documentation for A Dark Room. The goal is to tell stories that emerge from the game's mechanics while maintaining its distinctive voice and atmosphere.

## Directory Structure
```
narrative/
├── storylines/
│   ├── main_path.md         # Primary storyline
│   ├── alternate_paths.md   # Major story branches
│   └── hidden_events.md     # Secret storylines
├── story_elements/
│   ├── character_arcs.md    # Character progressions
│   ├── world_evolution.md   # World changes
│   └── location_stories.md  # Location narratives
└── mechanics_narrative/
    ├── resource_progression.md  # Resource story ties
    └── technology_progression.md # Tech advancement story
```

## Writing Approach

### Core Style Elements
0. **Use Actual Game Text**
   - Draw from `messages/categories/` for authentic voice
   - Combine existing phrases in meaningful ways
   - Maintain the game's terse, evocative style
1. **Sentence Structure**
   - Use lowercase throughout
   - Omit quotation marks
   - Often omit articles ("a", "the")
   - Use present tense
   - Keep phrases short and impactful

2. **Show Don't Tell**
   - "a snarling beast leaps out of the underbrush" not "enemies appear"
   - "the nights are rent with screams" not "villagers are dying"
   - "deeper into the ship, the darkness seems almost to writhe" not "the ship is dangerous"

3. **Environmental Storytelling**
   - "rotting reeds rise out of the swampy earth"
   - "the towers that haven't crumbled jut from the landscape like the ribcage of some ancient beast"
   - "dry brush and dead branches litter the forest floor"

### Story Structure
```
[EVENT/MECHANIC/THEME marker]
short, evocative line describing the scene
immediate situation or consequence
implied future or choice
```

Example:
```
[EVENT: builder_arrival]
the stranger is standing by the fire. she says she can help. says she builds things.
wood becomes walls. walls become shelter.
others will come.
```

## Technical Foundation

### Required Markers
- `[MECHANIC: type]`: Core gameplay mechanics
- `[RESOURCE: name]`: Resource-driven story points
- `[EVENT: type]`: Key story events
- `[CHARACTER: role]`: Character archetypes
- `[THEME: concept]`: Thematic elements
- `[LOCATION: name]`: Specific game locations

### Message Sources
Use text from these files for authenticity:
- `notification.md`: Immediate events and encounters
- `event.md`: Major story moments
- `location.md`: Places and discoveries
- `combat.md`: Fight descriptions
- `status.md`: State changes

### Core Systems
| System | Purpose | Key Events |
|--------|---------|------------|
| Room | Fire, building, crafting | Builder arrival, fire mechanics |
| Outside | Gathering, exploration | Resource discovery, encounters |
| World | Map, locations | Landmark discovery, terrain changes |
| Events | Story progression | Major story beats, choices |
| Ship | Late-game content | Technology, revelations |

## Gameplay Understanding

### Early Game Flow
```
darkness. cold seeps in. only embers remain.
[MECHANIC: fire]
- Start with dark room
- Fire mechanics (stoke, feed, maintain)
- Builder arrival triggers
- First resource gathering

[EVENT: stranger_arrival]
the stranger is standing by the fire. she says she can help.
```

### Mid-Game Progression
```
[MECHANIC: village]
a weathered family takes up in one of the huts.
a small group arrives, all dust and bones.
- Village development path
- Combat encounters
- Resource management
- Map exploration
```

### Late Game Content
```
[EVENT: ship_discovery]
the remains of a huge ship are embedded in the earth.
deeper into the ship, the darkness seems almost to writhe.
- Ship exploration
- Technology advancement
- Final choices
```

## Writing Process

1. **Understand the Game Flow**
   - Play through multiple paths
   - Note key decision points
   - Track resource impacts
   - Identify story branches

2. **Gather Game Text**
   - Search message files
   - Note environmental descriptions
   - Collect character interactions
   - Find threat descriptions

3. **Craft the Narrative**
   - Use actual game text
   - Show consequences
   - Maintain mystery
   - Preserve atmosphere

## Story Elements

### Scene Description
Use environmental cues:
```
the wind howls outside
the light from the fire spills from the windows, out into the dark
broken streetlights stand, rusting. light hasn't graced this place in a long time.
```

### Character Moments
Show through action:
```
a ragged stranger stumbles through the door and collapses in the corner
won't say from where he came, but it's clear that he's not staying
the stranger in the corner stops shivering. her breathing calms.
```

### Threat Description
Build tension through detail:
```
the grass thrashes wildly as a huge lizard pushes through
a soldier opens fire from across the desert
shuffling noises can be heard from within
```

## Success Criteria

1. **Authentic Voice**
   - Uses actual game text
   - Maintains terse style
   - Preserves atmosphere

2. **Mechanical Integration**
   - Events match game systems
   - Resources affect narrative
   - Choices have consequences

3. **Narrative Flow**
   - Clear progression
   - Natural branching
   - Environmental storytelling

4. **Technical Accuracy**
   - Correct event markers
   - Proper game state tracking
   - Accurate resource impacts

## Gameplay Simulation Guide

### Key Script Files
1. **Core Game Flow**
   - `room.js`: Fire mechanics, builder arrival
   - `outside.js`: Resource gathering, village growth
   - `world.js`: Map generation, locations
   - `events.js`: Story beats, encounters
   - `ship.js`: Late-game content

2. **Story Progression**
   ```
   [Early Game]
   darkness -> fire -> builder -> village
   
   [Mid Game]
   gathering -> exploration -> combat -> growth
   
   [Late Game]
   ship discovery -> technology -> revelation
   ```

3. **Resource Impact**
   - Wood affects fire, building
   - Food drives population
   - Weapons enable exploration
   - Technology unlocks story

### State Changes
Track these for story progression:
- Fire status (dead -> roaring)
- Builder presence (arrival -> helping)
- Village size (hut -> town)
- Map revealed (dark -> known)
- Ship status (sealed -> explored)