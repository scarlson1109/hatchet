# State Management System

The State Manager (`$SM`) is a sophisticated module that handles all game state operations, providing a centralized and consistent way to manage game data. This documentation covers the technical implementation and usage of the state management system.

## Architecture Overview

The State Manager is implemented as a singleton object that provides:
- Hierarchical state management
- State validation and error handling
- Event dispatching on state changes
- Save game compatibility
- State categories organization

### Core Constants

```javascript
MAX_STORE: 99999999999999  // Maximum value for numerical states
```

## State Management Mechanics

### State Categories
```javascript
categories: {
  features: {
    type: 'boolean',
    default: false,
    persistence: true,
    validation: true
  },
  stores: {
    type: 'number',
    default: 0,
    max: MAX_STORE,
    persistence: true,
    validation: true
  },
  character: {
    type: 'object',
    persistence: true,
    validation: true,
    schema: {
      perks: 'array',
      health: 'number',
      stamina: 'number'
    }
  },
  game: {
    type: 'object',
    persistence: true,
    validation: true,
    schema: {
      difficulty: 'string',
      playtime: 'number',
      achievements: 'array'
    }
  },
  temp: {
    type: 'any',
    persistence: false,
    validation: false
  }
}
```

### State Operations
```javascript
operations: {
  get: {
    path_resolution: true,
    default_value: true,
    type_coercion: false
  },
  set: {
    validation: true,
    events: true,
    undo_stack: true
  },
  remove: {
    cleanup: true,
    events: true
  },
  reset: {
    categories: ['stores', 'temp'],
    preserve: ['features', 'character', 'game']
  }
}
```

### Validation Rules
```javascript
validation: {
  stores: {
    min: 0,
    max: MAX_STORE,
    integer: true
  },
  character: {
    health: {
      min: 0,
      max: 100,
      integer: true
    },
    stamina: {
      min: 0,
      max: 100,
      integer: true
    },
    perks: {
      unique: true,
      max_length: 10
    }
  },
  game: {
    difficulty: ['easy', 'normal', 'hard'],
    playtime: {
      min: 0,
      integer: true
    }
  }
}
```

## State Events

### Event Types
```javascript
event_types: {
  STATE_CHANGE: {
    data: {
      path: 'string',
      old_value: 'any',
      new_value: 'any'
    },
    debounce: 100
  },
  CATEGORY_RESET: {
    data: {
      category: 'string'
    },
    debounce: 0
  },
  VALIDATION_ERROR: {
    data: {
      path: 'string',
      value: 'any',
      error: 'string'
    },
    debounce: 0
  }
}
```

### Event Handlers
```javascript
handlers: {
  stores: {
    onChange: ['updateUI', 'checkAchievements', 'save'],
    onMax: ['notifyFull', 'triggerEvent'],
    onMin: ['notifyEmpty', 'triggerEvent']
  },
  character: {
    onChange: ['updateUI', 'save'],
    onDeath: ['gameOver', 'save']
  },
  game: {
    onChange: ['save'],
    onAchievement: ['notify', 'save']
  }
}
```

## Save System Integration

### Save Format
```javascript
save_format: {
  version: 1,
  timestamp: 'number',
  categories: ['stores', 'character', 'game', 'features'],
  compression: true,
  validation: true
}
```

### Save Operations
```javascript
save_ops: {
  auto_save: {
    interval: 30000,
    categories: ['stores', 'character']
  },
  manual_save: {
    categories: 'all',
    validate: true
  },
  load: {
    validation: true,
    migration: true,
    events: true
  }
}
```

## Performance Optimizations

### Caching
```javascript
caching: {
  enabled: true,
  max_size: 1000,
  ttl: 60000,
  invalidation: {
    on_set: true,
    on_remove: true,
    on_reset: true
  }
}
```

### Batch Operations
```javascript
batch_ops: {
  enabled: true,
  max_size: 100,
  timeout: 100,
  categories: ['stores']
}
```

### Memory Management
```javascript
memory: {
  max_undo_stack: 50,
  cleanup_interval: 300000,
  gc_threshold: 0.9
}
```

## State Categories

The system organizes state into predefined categories:

```javascript
categories: [
  'features',     // Buildings, locations, unlocks
  'stores',       // Items, weapons, resources
  'character',    // Player stats, perks
  'income',       // Resource generation
  'timers',       // Game timing states
  'game',         // World state (fire, workers, population)
  'playStats',    // Gameplay statistics
  'previous',     // Prestige, achievements
  'outfit',       // Path inventory
  'config',       // Game configuration
  'wait',         // Event timing
  'cooldown'      // Button cooldowns
]
```

## Core Operations

### State Access
```javascript
// Get state value
$SM.get('stores.wood')               // Get wood count
$SM.get('character.perks')           // Get all perks
$SM.get('some.deep.state', true)     // Get with zero fallback

// Set state value
$SM.set('stores.wood', 100)          // Set wood to 100
$SM.set('features.location', {})      // Initialize location features

// Modify number values
$SM.add('stores.wood', 10)           // Add 10 wood
$SM.add('population', -1)            // Remove 1 population
```

### Batch Operations
```javascript
// Set multiple states
$SM.setM('stores', {
  'wood': 100,
  'meat': 50,
  'fur': 25
})

// Add to multiple states
$SM.addM('stores', {
  'wood': 10,
  'meat': 5
})
```

### State Removal
```javascript
// Remove single state
$SM.remove('stores.wood')

// Remove entire branch
$SM.removeBranch('stores.weapons')
```

## State Structure

States are organized hierarchically:
```javascript
State = {
  stores: {
    wood: 100,
    meat: 50,
    weapons: {
      'steel sword': 1,
      'rifle': 1
    }
  },
  character: {
    perks: ['scout', 'boxer'],
    health: 100
  }
}
```

## Event System

### State Updates
- Every state change triggers a `stateUpdate` event
- Events include category and specific state changed
- Used for UI updates and game logic

```javascript
// Subscribe to state updates
$.Dispatch('stateUpdate').subscribe(function(event) {
  // event.category: The category changed
  // event.stateName: The specific state changed
})
```

## Technical Features

### 1. Value Validation
- Numerical limits enforcement
- Negative value prevention for stores
- Type checking for mathematical operations

### 2. Path Resolution
- Automatic parent state creation
- Deep state access
- Safe state deletion

### 3. Save Game Management
- State versioning
- Migration support
- Automatic saving on changes

## Integration Points

### 1. Game Engine
- Save/Load operations
- Game initialization
- State updates

### 2. Events System
- Event state tracking
- Progress management
- Resource management

### 3. UI System
- State change notifications
- Value display updates
- Button state management

## Usage Examples

### Basic State Management
```javascript
// Initialize a feature
$SM.set('features.location.outside', true)

// Check if feature exists
if($SM.get('features.location.outside')) {
  // Feature is available
}

// Manage resources
$SM.add('stores.wood', 10)
if($SM.get('stores.wood', true) >= 100) {
  // Have enough wood
}
```

### Complex State Operations
```javascript
// Batch resource updates
$SM.addM('stores', {
  'wood': -10,
  'meat': -5,
  'fur': 2
})

// Initialize complex structure
$SM.setM('features.location', {
  'outside': true,
  'cave': false,
  'town': {
    'discovered': true,
    'visited': false
  }
})
```

## Technical Considerations

### 1. Performance
- Efficient state access
- Minimal event dispatching
- Optimized batch operations

### 2. Error Handling
- Type validation
- Path existence checks
- Value bounds enforcement

### 3. Save Compatibility
- Version tracking
- State migration
- Backward compatibility

## Extending the System

### Adding New State Categories
1. Add category to initialization list
2. Create migration handlers if needed
3. Update save/load handlers

### Custom State Types
1. Implement validation
2. Add type-specific operations
3. Update serialization handling

## References

The state management system implementation can be found in the following source files:

1. **Core State Management**
   - `script/state_manager.js` - Main state manager implementation
     - State operations (get, set, add, remove)
     - State validation
     - Event dispatching
     - Save/load mechanics
   - `script/state_schema.js` - State structure definitions
     - Category schemas
     - Validation rules
     - Default values

2. **State Categories**
   - `script/state/features.js` - Feature state management
     - Building states
     - Location unlocks
     - Game progression
   - `script/state/stores.js` - Resource management
     - Item tracking
     - Resource limits
     - Income calculations
   - `script/state/character.js` - Character state
     - Stats tracking
     - Perk management
     - Equipment state

3. **Integration Systems**
   - `script/engine.js` - Engine integration
     - Game state coordination
     - Module state tracking
     - Performance monitoring
   - `script/events.js` - Event system integration
     - Event state tracking
     - Combat state management
     - Progress tracking
   - `script/save.js` - Save system
     - Save format handling
     - State serialization
     - Migration logic

4. **Performance & Optimization**
   - `script/state/cache.js` - State caching
     - Cache management
     - Invalidation rules
     - Memory optimization
   - `script/state/batch.js` - Batch operations
     - Operation queuing
     - State debouncing
     - Event batching 