# State System Overview

The state system in A Dark Room is a sophisticated framework for managing game state, progress, and persistence. This document provides a comprehensive overview of the state system architecture and its role in the game.

## Core Concepts

### State Categories
The game state is organized into distinct categories:
- **Features**: Tracks unlocked game features and progression
  - Buildings
  - Location availability
  - Game unlocks
- **Stores**: Manages resource quantities and limits
  - Cannot be negative
  - Maximum value: 99999999999999
  - Automatic validation
- **Character**: Handles player attributes and status
  - Perks and abilities
  - Health and stats
  - Combat attributes
- **Game**: Controls game settings and difficulty
  - Fire temperature
  - Worker population
  - World map state
- **Income**: Tracks resource generation rates
  - Worker production
  - Building outputs
  - Passive income
- **Timers**: Manages cooldowns and timed events
  - Event scheduling
  - Action cooldowns
  - Resource generation
- **PlayStats**: Records gameplay statistics
  - Play time
  - Load count
  - Achievement progress
- **Previous**: Stores historical and achievement data
  - Prestige information
  - Score tracking
  - Trophy data
- **Outfit**: Manages equipped items and inventory
  - Path loadout
  - Equipment stats
- **Config**: Handles game configuration
  - Audio settings
  - Display preferences
  - Language selection
- **Wait**: Controls event timing and wanderer returns
  - Event delays
  - Return timers
- **Cooldown**: Manages button cooldowns
  - Action timing
  - UI interaction limits

### State Operations

#### Core Operations
```javascript
// Get state value with optional default
$SM.get('stores.wood', true)  // Returns 0 if undefined

// Set state value with validation
$SM.set('stores.wood', 100)   // Triggers state update

// Add to numerical states
$SM.add('stores.wood', 10)    // Handles validation

// Remove state
$SM.remove('stores.wood')     // Cleanup and events

// Batch operations
$SM.setM('stores', {
    wood: 100,
    fur: 50,
    meat: 25
})
```

#### State Validation
- Type checking for values
- Maximum value constraints
- Negative value prevention
- Parent state creation
- Empty object handling

#### Event System
States emit events when changed:
```javascript
$.Dispatch('stateUpdate').subscribe(function(event) {
    // event.category: Changed category
    // event.stateName: Specific state changed
})
```

### State Structure
```javascript
State = {
    stores: {
        wood: 100,
        fur: 50,
        weapons: {
            'steel sword': 1
        }
    },
    character: {
        perks: ['scout', 'boxer'],
        health: 100
    },
    game: {
        population: 10,
        fire: {
            value: 2,
            temp: 3
        }
    }
}
```

## Technical Implementation

### State Manager ($SM)
Core functionality:
```javascript
const StateManager = {
    MAX_STORE: 99999999999999,
    
    // Initialize state categories
    init: function() {
        var cats = [
            'features', 'stores', 'character',
            'income', 'timers', 'game',
            'playStats', 'previous', 'outfit',
            'config', 'wait', 'cooldown'
        ];
        // Create empty objects for each category
        for(var which in cats) {
            if(!$SM.get(cats[which])) {
                $SM.set(cats[which], {});
            }
        }
    },
    
    // State operations
    get: function(stateName, requestZero) {
        // Return state or 0 if requested
    },
    
    set: function(stateName, value, noEvent) {
        // Set state with validation
        // Trigger updates if noEvent is false
    },
    
    add: function(stateName, value, noEvent) {
        // Add to numerical states
        // Validate results
    }
}
```

### Save System Integration

#### Auto-Save
```javascript
// Automatic saving on state changes
if(!noEvent) {
    Engine.saveGame();
    $SM.fireUpdate(stateName);
}
```

#### Version Control
```javascript
// Version tracking and migration
if(typeof version != 'number') version = 1.0;
if(version == 1.0) {
    // Migrate to v1.1
    $SM.remove('outside.workers.hunter', true);
    version = 1.1;
}
```

### Performance Optimizations

#### Caching
```javascript
caching: {
    enabled: true,
    max_size: 1000,
    ttl: 60000,
    invalidation: {
        on_set: true,
        on_remove: true
    }
}
```

#### Batch Operations
```javascript
batch_ops: {
    enabled: true,
    max_size: 100,
    timeout: 100,
    categories: ['stores']
}
```

## Integration Points

### Game Engine
- State initialization
- Save/Load operations
- Game state coordination
- Performance monitoring

### Events System
- State change notifications
- Progress tracking
- Combat state management
- Resource updates

### UI System
- Value display updates
- Button state management
- Notification handling
- Progress indicators

### Save System
- State persistence
- Version migration
- Error handling
- Auto-save functionality

## References

### Core Implementation
- `script/state_manager.js`: Core state management
  - State operations
  - Validation logic
  - Event handling
  - Save mechanics

### State Categories
- `script/state/features.js`: Feature management
  - Building states
  - Location unlocks
  - Game progression
- `script/state/stores.js`: Resource tracking
  - Item management
  - Resource limits
  - Income calculation
- `script/state/character.js`: Character stats
  - Perk system
  - Health tracking
  - Equipment management

### Integration Files
- `script/engine.js`: Game engine integration
  - State coordination
  - Module management
  - Performance tracking
- `script/events.js`: Event system
  - State updates
  - Combat handling
  - Progress tracking
- `script/save.js`: Save system
  - State persistence
  - Migration logic
  - Error handling
