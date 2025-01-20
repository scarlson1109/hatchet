# Game Engine

The game engine is the central orchestrator of the entire game, managing core systems, game state, UI, and interactions. This documentation covers the technical implementation and architecture of the engine.

## Architecture Overview

The engine is implemented as a singleton object (`Engine`) that provides:
- Game initialization and configuration
- State management
- Event handling
- UI management
- Save/load functionality
- Platform compatibility checks
- Audio control integration
- Localization support

### Core Constants

```javascript
SITE_URL: "http://adarkroom.doublespeakgames.com"
VERSION: 1.3
MAX_STORE: 99999999999999
SAVE_DISPLAY: 30 * 1000
```

## Game Mechanics

### Save System
```javascript
save_mechanics: {
  auto_save: {
    interval: 30 * 1000,  // Auto-save every 30 seconds
    trigger_on_events: true,  // Save after significant events
    max_saves: 'unlimited'
  },
  save_format: {
    version: 1.3,
    compression: true,
    encryption: false
  },
  compatibility: {
    min_version: 1.0,
    max_version: 1.3,
    migration_handlers: true
  }
}
```

### Game Loop
```javascript
loop_timings: {
  base_tick: 10,          // Base tick rate (ms)
  animation_frame: 16.67,  // 60 FPS target
  event_check: 1000,      // Event system check interval
  save_check: 30000,      // Save system check interval
  ui_update: 100          // UI refresh rate
}
```

### Resource Limits
```javascript
limits: {
  MAX_STORE: 99999999999999,  // Maximum resource storage
  MAX_NUM_WORKERS: 100,       // Maximum workers per category
  MAX_GAME_TICKS: 1000000,    // Maximum game ticks before reset
  MAX_ITEMS_PER_ROW: 5,       // UI layout constraint
  MAX_LOCATIONS: 50           // Maximum discoverable locations
}
```

### Initialization Sequence
```javascript
init_sequence: {
  1: 'check_browser_compatibility',
  2: 'load_saved_state',
  3: 'initialize_audio',
  4: 'setup_event_handlers',
  5: 'initialize_ui',
  6: 'start_game_loop'
}
```

## System States

### Game States
```javascript
game_states: {
  STARTING: {
    audio: false,
    events: false,
    saving: false
  },
  RUNNING: {
    audio: true,
    events: true,
    saving: true
  },
  PAUSED: {
    audio: false,
    events: false,
    saving: true
  },
  STOPPED: {
    audio: false,
    events: false,
    saving: false
  }
}
```

### Module States
```javascript
module_states: {
  Room: {
    initial: true,
    requires: []
  },
  Outside: {
    requires: ['Room']
  },
  Path: {
    requires: ['Outside', 'stores.compass']
  },
  Ship: {
    requires: ['Path', 'features.location.spaceShip']
  }
}
```

## Event Handling

### Input Events
```javascript
input_handlers: {
  keyboard: {
    cooldown: 50,      // Input throttling (ms)
    repeat_delay: 150  // Key repeat delay (ms)
  },
  mouse: {
    click_threshold: 100,  // Double-click detection (ms)
    drag_threshold: 5      // Minimum pixels for drag
  },
  touch: {
    tap_threshold: 100,    // Double-tap detection (ms)
    swipe_threshold: 30    // Minimum pixels for swipe
  }
}
```

### Game Events
```javascript
event_priorities: {
  CRITICAL: 0,    // System-critical events
  HIGH: 1,        // Combat & survival events
  NORMAL: 2,      // Standard gameplay events
  LOW: 3,         // Ambient & flavor events
  BACKGROUND: 4   // Non-essential events
}
```

## Performance Management

### Resource Management
```javascript
resource_management: {
  gc_interval: 300000,     // Garbage collection interval (5 min)
  cache_size: 50 * 1024,   // Resource cache size (50KB)
  prefetch_distance: 2,    // Number of scenes to prefetch
  cleanup_threshold: 0.9   // Memory usage threshold for cleanup
}
```

### Performance Thresholds
```javascript
thresholds: {
  fps_min: 30,            // Minimum acceptable FPS
  fps_target: 60,         // Target FPS
  frame_budget: 16,       // Maximum ms per frame
  event_queue_max: 1000,  // Maximum queued events
  asset_timeout: 5000     // Asset load timeout (ms)
}
```

### Optimization Rules
```javascript
optimization: {
  event_batching: true,     // Batch similar events
  render_culling: true,     // Skip invisible elements
  state_debouncing: 100,    // State update debounce (ms)
  async_loading: true,      // Asynchronous resource loading
  progressive_enhancement: {
    enabled: true,
    levels: ['minimal', 'basic', 'enhanced', 'full']
  }
}
```

## Key Components

### 1. State Management
- Utilizes the `State Manager` (`$SM`) for persistent game state
- Handles save/load operations
- Manages game configuration
- Tracks player progress and achievements

### 2. Event System
- Implements a pub/sub pattern via `topics`
- Handles keyboard and touch events
- Manages game event dispatching
- Coordinates between different game modules

### 3. Perks System
The engine manages character perks that affect gameplay:
```javascript
Perks: {
  'boxer': { name: 'boxer', desc: 'punches do more damage' },
  'martial artist': { desc: 'punches do even more damage' },
  'unarmed master': { desc: 'punch twice as fast, and with more force' },
  // ... additional perks
}
```

### 4. UI Management
- Manages the main game interface
- Handles menu creation and interactions
- Controls scene transitions
- Manages notifications
- Implements light/dark mode
- Handles mobile responsiveness

### 5. Module Initialization
The engine coordinates the initialization of all game modules:
- Room system
- Events system
- Audio system
- Notifications
- Outside world
- Path system
- Fabricator
- Space ship

## Core Features

### Platform Compatibility
- Browser compatibility checking
- Mobile device detection
- Touch event support
- Audio context management

### Save System
- Local storage management
- Dropbox integration (optional)
- Import/export functionality
- State persistence

### Localization
- Multi-language support
- Dynamic language switching
- Translation management
- Right-to-left language support

### Performance
- Event debouncing
- Efficient state updates
- Optimized rendering
- Resource management

## Integration Points

The engine integrates with several core systems:

1. **State Manager** (`$SM`)
   - Persistent state storage
   - Game progress tracking
   - Configuration management

2. **Audio Engine**
   - Sound management
   - Music playback
   - Volume control

3. **Event System**
   - Game event handling
   - Scene management
   - Story progression

4. **Notification System**
   - User alerts
   - Achievement notifications
   - Status updates

## Usage Examples

### Initialization
```javascript
Engine.init({
  state: customState,  // Optional initial state
  debug: false,        // Debug mode
  log: false,         // Logging
  dropbox: false      // Dropbox integration
});
```

### Event Handling
```javascript
// Subscribe to events
$.Dispatch('stateUpdate').subscribe(Engine.handleStateUpdates);

// Trigger events
Events.startEvent('eventName');
```

### State Management
```javascript
// Check state
if($SM.get('stores.wood')) {
  Outside.init();
}

// Update state
$SM.set('stores.wood', 100);
```

## Technical Considerations

### Browser Support
- HTML5 feature detection
- WebAudio API support
- Local storage availability
- Touch event support

### Mobile Support
- Responsive design
- Touch controls
- Performance optimization
- Screen size adaptation

### Save Data
- Data structure versioning
- Migration support
- Corruption recovery
- Cross-platform compatibility

## Extending the Engine

### Adding New Features
1. Create new module
2. Register with engine
3. Implement state management
4. Add event handlers

### Module Integration
1. Initialize in `Engine.init()`
2. Register event handlers
3. Implement state management
4. Add UI components

## References

The engine implementation can be found in the following source files:

1. **Core Engine Files**
   - `script/engine.js` - Main engine implementation
     - Game loop management
     - Module initialization
     - State coordination
     - Performance optimization
   - `script/state_manager.js` - State management integration
     - Save/load mechanics
     - State validation
     - Event dispatching

2. **System Integration Files**
   - `script/events.js` - Event system integration
     - Event scheduling
     - Combat mechanics
     - Scene management
   - `script/audio.js` - Audio system integration
     - Background music
     - Sound effects
     - Event sounds
   - `script/notifications.js` - Notification system
     - UI updates
     - Event notifications
     - Achievement alerts

3. **Module Management**
   - `script/room.js` - Initial game module
     - Starting point mechanics
     - Resource management
   - `script/path.js` - World exploration
     - Location discovery
     - Travel mechanics
   - `script/space.js` - Space exploration
     - Ship mechanics
     - Space combat

4. **Performance & Optimization**
   - `script/performance.js` - Performance monitoring
     - FPS tracking
     - Resource usage
     - Memory management
   - `script/loader.js` - Resource loading
     - Asset management
     - Prefetching
     - Cache control
