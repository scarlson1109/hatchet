# World Module

The World module in A Dark Room manages the game's procedurally generated world map, including terrain generation, landmark placement, movement mechanics, and combat system. This module is central to the game's exploration and survival mechanics.

## Core Mechanics

### World Generation
```javascript
// World dimensions and configuration
World.RADIUS = 30;           // World radius from center
World.VILLAGE_POS = [30, 30]; // Starting village position

// Terrain types and probabilities
World.TILE = {
    VILLAGE: 'A',      // Starting point
    FOREST: ';',       // Resource gathering
    FIELD: ',',        // Basic terrain
    BARRENS: '.',      // Wasteland
    ROAD: '#',         // Connecting paths
    // ... other tile types
};

// Terrain distribution
World.TILE_PROBS = {
    FOREST: 0.15,   // 15% forests
    FIELD: 0.35,    // 35% fields
    BARRENS: 0.5    // 50% barrens
};
```

### Landmarks
```javascript
World.LANDMARKS = {
    OUTPOST: {
        num: 0,           // Number to generate
        minRadius: 0,     // Minimum distance from center
        maxRadius: 0,     // Maximum distance from center
        scene: 'outpost', // Associated event scene
        label: 'An Outpost' // Display name
    },
    // ... other landmarks
};
```

### Movement System
```javascript
// Direction vectors
NORTH: [ 0, -1],
SOUTH: [ 0,  1],
WEST:  [-1,  0],
EAST:  [ 1,  0],

// Resource costs
MOVES_PER_FOOD: 2,    // Steps per food unit
MOVES_PER_WATER: 1,   // Steps per water unit
```

### Combat System
```javascript
// Combat configuration
FIGHT_CHANCE: 0.20,      // Encounter probability
BASE_HEALTH: 10,         // Starting health
BASE_HIT_CHANCE: 0.8,    // Base accuracy
FIGHT_DELAY: 3,          // Moves between fights

// Healing items
MEAT_HEAL: 8,            // Health from meat
MEDS_HEAL: 20,          // Health from medicine
HYPO_HEAL: 30           // Health from hypo
```

## Technical Implementation

### Map Generation
- Procedural terrain generation
- Landmark placement algorithms
- Road network generation
- Fog of war system
- Map persistence

### Weapon System
```javascript
World.Weapons = {
    'fists': {
        verb: 'punch',
        type: 'unarmed',
        damage: 1,
        cooldown: 2
    },
    // ... other weapons
};
```

### State Management
- Map state persistence
- Character position tracking
- Resource management
- Combat state handling
- Landmark discovery

## Integration Points

### Engine Integration
- Location system
- Event triggers
- State persistence
- Scene transitions

### Module Integration
- Room module connection
- Path module interaction
- Outside module coordination
- Ship module discovery

### Event System
- Combat encounters
- Location discoveries
- Resource gathering
- Special events

## Technical Features

### Map Features
- Procedural generation
- Landmark placement
- Path finding
- Fog of war
- Distance calculations

### Combat Features
- Weapon management
- Health system
- Resource consumption
- Enemy encounters
- Combat cooldowns

### Performance Optimization
- Efficient map generation
- Smart state updates
- Minimal recalculations
- Memory management

## References

### Core Implementation
- `script/world.js`: World module
  - Map generation
  - Combat system
  - Movement mechanics
  - State management

### Integration Files
- `script/engine.js`: Game engine
  - State persistence
  - Event handling
- `script/events.js`: Event system
  - Combat events
  - Location events
- `script/room.js`: Room module
  - Resource management
  - Base mechanics 