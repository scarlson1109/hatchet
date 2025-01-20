# Location System

The location system in A Dark Room manages world generation, exploration, landmarks, and movement mechanics. This document details the implementation and features of the location system.

## Core Mechanics

### World Generation
```javascript
// World dimensions and configuration
World.RADIUS = 30;           // World radius from center
World.VILLAGE_POS = [30, 30]; // Starting village position
World.STICKINESS = 0.5;      // Terrain continuity factor

// Terrain probabilities (must sum to 1)
World.TILE_PROBS = {
    FOREST: 0.15,   // 15% forests
    FIELD: 0.35,    // 35% fields
    BARRENS: 0.5    // 50% barrens
}
```

### Tile Types
- **Basic Terrain**:
  - `FOREST (;)`: Dense woodland areas, resource-rich
  - `FIELD (,)`: Open grasslands, safer travel
  - `BARRENS (.)`: Wasteland, dangerous
  - `ROAD (#)`: Connecting pathways, safer travel

- **Landmarks**:
  - `VILLAGE (A)`: Central starting point
  - `IRON_MINE (I)`: Source of iron
  - `COAL_MINE (C)`: Source of coal
  - `SULPHUR_MINE (S)`: Source of sulphur
  - `HOUSE (H)`: Abandoned dwellings
  - `CAVE (V)`: Natural caverns
  - `TOWN (O)`: Abandoned settlements
  - `CITY (Y)`: Ruined urban areas
  - `OUTPOST (P)`: Supply stations
  - `SHIP (W)`: Crashed starship
  - `BOREHOLE (B)`: Resource extraction site
  - `BATTLEFIELD (F)`: Combat zones
  - `SWAMP (M)`: Hazardous wetlands
  - `CACHE (U)`: Previous game resources
  - `EXECUTIONER (X)`: Special late-game location

### Movement Mechanics
```javascript
// Direction vectors
NORTH: [ 0, -1],
SOUTH: [ 0,  1],
WEST:  [-1,  0],
EAST:  [ 1,  0],

// Resource costs
MOVES_PER_FOOD: 2,    // Steps per food unit
MOVES_PER_WATER: 1,   // Steps per water unit
BASE_WATER: 10,       // Starting water
LIGHT_RADIUS: 2       // Visible tiles
```

### Exploration System
```javascript
// Combat and survival
FIGHT_CHANCE: 0.20,      // Base combat encounter rate
FIGHT_DELAY: 3,          // Minimum moves between fights
BASE_HEALTH: 10,         // Starting health
BASE_HIT_CHANCE: 0.8     // Base accuracy

// Healing items
MEAT_HEAL: 8,            // Health from meat
MEDS_HEAL: 20,          // Health from medicine
HYPO_HEAL: 30           // Health from hypo
```

## Landmark Features

### Landmark Placement
```javascript
LANDMARKS: {
    'OUTPOST': { num: 0, minRadius: 0, maxRadius: 0 },
    'IRON_MINE': { num: 1, minRadius: 5, maxRadius: 5 },
    'COAL_MINE': { num: 1, minRadius: 10, maxRadius: 10 },
    'SULPHUR_MINE': { num: 1, minRadius: 20, maxRadius: 20 },
    'HOUSE': { num: 10, minRadius: 0, maxRadius: 45 },
    'CAVE': { num: 5, minRadius: 3, maxRadius: 10 },
    'TOWN': { num: 10, minRadius: 10, maxRadius: 20 },
    'CITY': { num: 20, minRadius: 20, maxRadius: 45 },
    'SHIP': { num: 1, minRadius: 28, maxRadius: 28 },
    'BOREHOLE': { num: 10, minRadius: 15, maxRadius: 45 },
    'BATTLEFIELD': { num: 5, minRadius: 18, maxRadius: 45 },
    'SWAMP': { num: 1, minRadius: 15, maxRadius: 45 }
}
```

### Resource Locations
- **Iron Mine**:
  - Location for iron gathering
  - Requires clearing of hostile creatures
  - Enables iron production when secured

- **Coal Mine**:
  - Source of coal resources
  - Must be cleared of threats
  - Enables coal production when secured

- **Sulphur Mine**:
  - Advanced resource location
  - Provides sulphur for ammunition
  - Requires clearing of threats

### Exploration Locations
- **House**:
  - Common landmark
  - Can contain supplies, medicine
  - May be occupied by hostiles
  - Sometimes has water sources

- **Cave**:
  - Contains various resources
  - May have hostile encounters
  - Can find equipment and supplies

- **Town/City**:
  - Large resource caches
  - Multiple exploration options
  - Higher danger levels
  - Better loot possibilities

### Special Locations
- **Ship**:
  - Unique landmark
  - Advanced technology
  - Story progression point
  - Enables space travel

- **Borehole**:
  - Source of alien alloy
  - Advanced resource site
  - Evidence of past harvesting

- **Battlefield**:
  - Military equipment
  - Advanced weapons
  - High-value resources
  - Dangerous area

## Technical Implementation

### Map Generation
- Spiral generation from center
- Terrain type selection based on adjacent tiles
- Landmark placement with distance constraints
- Road generation:
  - Automatically connects outposts to nearest road
  - All roads eventually lead to village
  - Uses spiral search to find closest connection
  - Roads provide safer travel paths

### Movement System
- Cardinal direction movement
- Resource consumption per move
- Terrain-based movement costs
- Danger level calculations
- Equipment effects on movement
- Capacity management:
  ```javascript
  // Capacity increases with better equipment
  DEFAULT_BAG_SPACE: 10
  // Additional space:
  // +10 with rucksack
  // +30 with wagon
  // +60 with convoy
  // +100 with cargo drone
  ```

### Compass System
```javascript
// Direction calculation based on relative position
compassDir: function(pos) {
    var dir = '';
    var horz = pos.x < 0 ? 'west' : 'east';
    var vert = pos.y < 0 ? 'north' : 'south';
    if(Math.abs(pos.x) / 2 > Math.abs(pos.y)) {
        dir = horz;
    } else if(Math.abs(pos.y) / 2 > Math.abs(pos.x)) {
        dir = vert;
    } else {
        dir = vert + horz;
    }
    return dir;
}
```

### Event Integration
- Location-specific events
- Combat encounters
- Resource discovery
- Story progression
- Prestige system integration:
  - Cache locations from previous games
  - Destroyed village locations
  - Special encounters based on progress

## References

### Core Implementation
- `script/world.js`: Main world implementation
  - World generation
  - Movement mechanics
  - Location management
  - Map rendering

### Location Systems
- `script/events/setpieces.js`: Location events
  - Landmark definitions
  - Event scenes
  - Loot tables
  - Combat encounters

### Movement Systems
- `script/path.js`: Movement mechanics
  - Capacity management
  - Resource consumption
  - Equipment effects
  - Movement validation

### Resource Integration
- `script/room.js`: Base location
  - Building definitions
  - Resource production
  - Upgrade paths

### UI Systems
- `script/engine.js`: Interface management
  - Map rendering
  - Movement controls
  - Location transitions
