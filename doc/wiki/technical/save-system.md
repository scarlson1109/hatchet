# Save System

The save system in A Dark Room manages game state persistence, versioning, and migration. This document details the technical implementation and features of the save system.

## Core Mechanics

### State Categories
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

### Save Format
```javascript
// Basic save structure
{
    version: 1.3,
    timestamp: Date.now(),
    state: {
        features: {},    // Game features and unlocks
        stores: {},      // Resources and items
        character: {},   // Player stats and perks
        game: {},        // World state and progress
        income: {},      // Resource generation
        previous: {}     // Prestige data
    }
}
```

### Storage Methods

#### Local Storage
```javascript
// Save game state
localStorage.gameState = JSON.stringify(State);

// Load game state
try {
    var savedState = JSON.parse(localStorage.gameState);
    if(savedState) {
        State = savedState;
        $SM.updateOldState();
        Engine.log("loaded save!");
    }
} catch(e) {
    State = {};
    $SM.set('version', Engine.VERSION);
    Engine.event('progress', 'new game');
}
```

#### Export/Import
```javascript
// Base64 encoded state for sharing
Engine.export64();
Engine.import64(savedState);

// Export/Import UI
Events.startEvent({
    title: _('Export / Import'),
    scenes: {
        start: {
            text: [
                _('export or import save data, for backing up'),
                _('or migrating computers')
            ],
            buttons: {
                'export': { text: _('export') },
                'import': { text: _('import') },
                'cancel': { text: _('cancel') }
            }
        }
    }
});
```

#### Dropbox Integration
```javascript
// Save to Dropbox
saveGame = {
    gameState: Engine.generateExport64(),
    timestamp: new Date().getTime()
};

// Load from Dropbox
if (record && record.get('gameState')) {
    Engine.import64(record.get('gameState'));
}
```

## Save Mechanics

### Auto-Save System
```javascript
// Auto-save on state changes
if(!noEvent) {
    Engine.saveGame();
    $SM.fireUpdate(stateName);
}

// State update event handling
$.Dispatch('stateUpdate').subscribe(function(event) {
    Engine.saveGame();
});
```

### Version Control
```javascript
// Version tracking
if(typeof version != 'number') version = 1.0;

// Version migration example (v1.0 to v1.1)
if(version == 1.0) {
    // v1.1 introduced the Lodge, remove lodgeless hunters
    $SM.remove('outside.workers.hunter', true);
    $SM.remove('income.hunter', true);
    version = 1.1;
}

// Version migration example (v1.1 to v1.2)
if(version == 1.1) {
    // v1.2 added the Swamp to the map
    if($SM.get('world')) {
        World.placeLandmark(15, World.RADIUS * 1.5, World.TILE.SWAMP, $SM.get('world.map'));
    }
    version = 1.2;
}
```

### State Migration
```javascript
// Example migration (v1.2 to StateManager)
if($SM.get('room')){
    // Move room data to new structure
    $SM.set('features.location.room', true);
    $SM.set('game.builder.level', $SM.get('room.builder'));
    $SM.remove('room');
}

if($SM.get('ship')){
    // Move ship data to new structure
    $SM.set('features.location.spaceShip', true);
    $SM.set('game.spaceShip.hull', $SM.get('ship.hull', true));
    $SM.set('game.spaceShip.thrusters', $SM.get('ship.thrusters', true));
    $SM.remove('ship');
}
```

## Technical Features

### State Validation
- Type checking for values:
```javascript
if(typeof old != 'number' || typeof value != 'number'){
    Engine.log('WARNING: Can not do math with state:'+stateName+' or value:'+value+' because at least one is not a number.');
    err = 1;
}
```
- Maximum value constraints:
```javascript
MAX_STORE: 99999999999999,  // Maximum value for numerical states

if(typeof value == 'number' && value > $SM.MAX_STORE) {
    value = $SM.MAX_STORE;
}
```
- Negative value prevention:
```javascript
if(stateName.indexOf('stores') === 0 && $SM.get(stateName, true) < 0) {
    eval('('+fullPath+') = 0');
    Engine.log('WARNING: state:' + stateName + ' can not be a negative value. Set to 0 instead.');
}
```
- Structure validation:
```javascript
// Validate state path
var words = stateName.split(/[.\[\]'"]+/);
for (var j = 0; j < words.length; j++) {
    if (words[j] === '') {
        words.splice(j, 1);
        j--;
    }
}
```

### Error Handling
```javascript
try {
    var savedState = JSON.parse(localStorage.gameState);
    if(savedState) {
        State = savedState;
        $SM.updateOldState();
    }
} catch(e) {
    State = {};
    $SM.set('version', Engine.VERSION);
}

// NaN detection and recovery
if(old != old){
    Engine.log('WARNING: '+stateName+' was corrupted (NaN). Resetting to 0.');
    old = 0;
    $SM.set(stateName, old + value, noEvent);
}
```

### Delayed State Saving
```javascript
Events.saveDelay = function(action, stateName, delay) {
    var state = Events.delayState + '.' + stateName;
    if(delay) {
        $SM.set(state, delay);
    }
    // Save countdown state every 500ms
    Engine.setInterval(function() {
        $SM.set(state, ($SM.get(state) - 0.5), true);
    }, 500);
}
```

## Integration Points

### State Manager Integration
```javascript
// State update event handling
$.Dispatch('stateUpdate').subscribe(function(event) {
    // event.category: The category changed
    // event.stateName: The specific state changed
    Engine.saveGame();
});

// State path resolution
buildPath: function(input){
    var dot = (input.charAt(0) == '[')? '' : '.';
    return 'State' + dot + input;
}
```

### Events System Integration
```javascript
// Save delayed states
Events.saveDelay(action, stateName, delay);

// Clear saved delays
$SM.remove(state);
$SM.removeBranch(Events.delayState);

// Event state persistence
if(!noEvent) {
    Engine.saveGame();
    $SM.fireUpdate(stateName);
}
```

### Engine Integration
```javascript
Engine.saveGame = function() {
    // Persist current state
    localStorage.gameState = JSON.stringify(State);
}

Engine.loadGame = function() {
    // Load and migrate saved state
    try {
        var savedState = JSON.parse(localStorage.gameState);
        if(savedState) {
            State = savedState;
            $SM.updateOldState();
        }
    } catch(e) {
        State = {};
        $SM.set('version', Engine.VERSION);
    }
}
```

## Technical Implementation

### Save Operations

#### Auto-Save
- Triggered by state changes
- Includes validation checks
- Fires state update events
- Handles error recovery

#### Manual Save
- Export/Import functionality with Base64 encoding
- Dropbox integration with timestamp tracking
- Version compatibility checks
- Data structure validation

#### State Migration
- Version checking and tracking
- Data structure updates for compatibility
- Backward compatibility maintenance
- Error recovery during migration

### Performance Considerations
- Efficient state serialization using JSON
- Minimal save frequency with event batching
- Optimized validation checks
- Memory management for large states

## References

### Core Implementation
- `script/engine.js`: Save/load operations
  - Game state persistence
  - Export/Import functions
  - Version management
  - Error handling
  - Performance optimization

### Save Systems
- `script/state_manager.js`: State management
  - State validation
  - Migration logic
  - Update handling
  - Path resolution
  - Type checking
  - Value constraints

### Integration Points
- `script/events.js`: Event system integration
  - Delayed state saving
  - State cleanup
  - Event persistence
  - Update dispatching

### External Systems
- `script/dropbox.js`: Cloud save support
  - Dropbox integration
  - Remote state management
  - Sync operations
  - Error handling
  - Version compatibility
