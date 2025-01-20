# Room Module

The Room module serves as the central hub and starting point of the game, managing basic survival mechanics, resource gathering, and early game progression. This documentation covers the module's implementation, integration points, and key mechanics.

## Module Overview

The Room module (`script/room.js`) implements:
- Fire and temperature management
- Building construction and upgrades
- Resource crafting and trading
- Event handling and progression
- Builder interactions and state management

### Core Constants
```javascript
_FIRE_COOL_DELAY: 5 * 60 * 1000    // Time before fire cools (5 minutes)
_ROOM_WARM_DELAY: 30 * 1000        // Room temperature update interval
_BUILDER_STATE_DELAY: 0.5 * 60 * 1000  // Builder state update interval
_STOKE_COOLDOWN: 10                // Fire stoking cooldown
_NEED_WOOD_DELAY: 15 * 1000       // Wood requirement timing
```

## Module Initialization

```javascript
init: function(options) {
    // Initialize room state
    if (typeof $SM.get('features.location.room') == 'undefined') {
        $SM.set('features.location.room', true);
        $SM.set('game.builder.level', -1);
    }
    
    // Set initial temperature
    $SM.set('game.temperature', 
        $SM.get('game.temperature.value') === undefined ? 
        this.TempEnum.Freezing : 
        $SM.get('game.temperature')
    );
    
    // Start builder state updates if necessary
    if ($SM.get('game.builder.level') >= 0 && $SM.get('game.builder.level') < 3) {
        Room._builderTimer = Engine.setTimeout(Room.updateBuilderState, Room._BUILDER_STATE_DELAY);
    }
}
```

## Core Systems

### 1. Builder System
```javascript
// Builder states
0: 'Approaching'   // Initial state
1: 'Collapsed'     // Enters room
2: 'Shivering'     // Warming up
3: 'Sleeping'      // Almost recovered
4: 'Helping'       // Fully recovered, enables building
```

### 2. Building Management
```javascript
build: function(buildBtn) {
    var thing = $(buildBtn).attr('buildThing');
    if ($SM.get('game.temperature.value') <= Room.TempEnum.Cold.value) {
        Notifications.notify(Room, _("builder just shivers"));
        return false;
    }
    // Check costs and build
    var cost = craftable.cost();
    // Deduct resources and add building
    $SM.add('game.buildings["' + thing + '"]', 1);
}
```

### 3. Crafting System
```javascript
Craftables: {
    'trap': {
        maximum: 10,
        cost: function() {
            var n = $SM.get('game.buildings["trap"]', true);
            return { 'wood': 10 + (n * 10) };
        }
    },
    // ... other craftables
}
```

## State Management

### Room States
```javascript
states: {
    room: {
        fire: fire_state,      // Current fire level
        temperature: temp_value, // Room temperature
        builders: builder_count // Number of builders
    },
    stores: {
        wood: amount,
        fur: amount,
        meat: amount
    }
}
```

## Event Integration

### Room Events
1. **Builder Events**
   - Initial arrival
   - Recovery stages
   - Building unlocks

2. **Resource Events**
   - Trader visits
   - Thief encounters
   - Resource discoveries

3. **Progression Events**
   - Outside world unlock
   - Workshop availability
   - Trading post establishment

## Integration Points

### 1. Engine Integration
```javascript
onArrival: function(transition_diff) {
    Room.setTitle();
    if (Room.changed) {
        Notifications.notify(Room, _("the fire is {0}", 
            Room.FireEnum.fromInt($SM.get('game.fire.value')).text));
        Room.changed = false;
    }
    Engine.moveStoresView(null, transition_diff);
    Room.setMusic();
}
```

### 2. State Manager Integration
- Resource tracking
- Building status
- Temperature management
- Builder state progression

### 3. Audio Integration
```javascript
// Building sounds
audio: {
    BUILD_TRAP: 'audio/build_trap.mp3',
    BUILD_CART: 'audio/build_cart.mp3',
    BUILD_HUT: 'audio/build_hut.mp3'
}
```

### 4. UI Integration
- Building buttons
- Resource displays
- Temperature indicators
- Builder status updates

## Music Integration

```javascript
setMusic() {
    // Music changes based on fire level
    switch ($SM.get('game.fire.value')) {
        case 0: // Dead
            AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_FIRE_DEAD);
            break;
        case 1: // Smoldering
            AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_FIRE_SMOLDERING);
            break;
        case 2: // Flickering
            AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_FIRE_FLICKERING);
            break;
        case 3: // Burning
            AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_FIRE_BURNING);
            break;
        case 4: // Roaring
            AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_FIRE_ROARING);
            break;
    }
}
```

## Builder States

The builder progresses through five distinct states:
```javascript
states: {
    0: 'Approaching',   // Initial state when fire is lit
    1: 'Collapsed',     // Enters room, needs wood
    2: 'Shivering',     // Warming up by fire
    3: 'Sleeping',      // Recovering
    4: 'Helping'        // Fully recovered, enables building
}
```

Each state triggers specific events and notifications:
- **Approaching**: "a ragged stranger stumbles through the door and collapses in the corner"
- **Collapsed**: Triggers wood requirement and unlocks forest
- **Shivering**: "the stranger shivers, and mumbles quietly. her words are unintelligible."
- **Sleeping**: "the stranger in the corner stops shivering. her breathing calms."
- **Helping**: "the stranger is standing by the fire. she says she can help. says she builds things."

## Compass Integration

```javascript
compassTooltip: function(direction) {
    var ttPos = $('div#resources').children().length > 10 ? 
        'top right' : 'bottom right';
    var tt = $('<div>').addClass('tooltip ' + ttPos);
    $('<div>')
        .addClass('row_key')
        .text(_('the compass points ' + direction))
        .appendTo(tt);
    tt.appendTo($('#row_compass'));
}
```

The compass provides navigation hints and unlocks new exploration opportunities.

## Localization Support

The Room module includes comprehensive localization support for all text elements:

```javascript
// Temperature states
_('freezing')
_('cold')
_('mild')
_('warm')
_('hot')

// Fire states
_('dead')
_('smoldering')
_('flickering')
_('burning')
_('roaring')

// Room title
_('A Dark Room')
_('A Firelit Room')

// Notifications
_('the room is {0}')
_('the fire is {0}')
_('the wood has run out')
_('not enough wood to get the fire going')
```

Supports multiple languages including:
- English (default)
- French (fr)
- Russian (ru)
- Chinese (zh_cn)
- Portuguese (pt_br)
- Ukrainian (uk)
- Turkish (tr)
- And more...

## Technical Implementation

### 1. Building Unlocks
```javascript
craftUnlocked: function(thing) {
    if ($SM.get('game.builder.level') < 4) return false;
    var craftable = Room.Craftables[thing];
    if (Room.needsWorkshop(craftable.type) && 
        $SM.get('game.buildings["workshop"]', true) === 0) return false;
    
    // Check resource requirements
    var cost = craftable.cost();
    if ($SM.get('stores.wood', true) < cost['wood'] * 0.5) return false;
    
    // Notify availability
    Room.buttons[thing] = true;
    Notifications.notify(Room, craftable.availableMsg);
    return true;
}
```

### 2. Trading System
```javascript
buy: function(buyBtn) {
    var thing = $(buyBtn).attr('buildThing');
    var good = Room.TradeGoods[thing];
    
    // Check maximum
    var numThings = $SM.get('stores["' + thing + '"]', true);
    if (good.maximum <= numThings) return;
    
    // Process transaction
    var cost = good.cost();
    $SM.add('stores["' + thing + '"]', 1);
    AudioEngine.playSound(AudioLibrary.BUY);
}
```

## Performance Considerations

1. **State Updates**
   - Batched updates for resource changes
   - Throttled temperature calculations
   - Efficient event scheduling

2. **UI Updates**
   - Optimized button rendering
   - Cached DOM elements
   - Throttled notification updates

## References

### Core Implementation
- `script/room.js` - Main room implementation
  - Fire mechanics and temperature system
  - Building system and crafting
  - Resource management
  - Event handling
  - Builder state progression
  - Music state management
  - Compass functionality

### Event System
- `script/events/room.js` - Room-specific events
  - Builder progression events
  - Trader encounters
  - Resource events
  - Temperature change events
  - Fire state notifications

### Audio System
- `script/audio.js` - Audio engine integration
  - Fire state music
  - Building sound effects
  - Event notifications
- `script/audioLibrary.js` - Audio asset definitions
  - Music tracks for each fire state
  - Building sound mappings
  - Event sound effects

### Localization
- `lang/` - Language files containing translations
  - Temperature states
  - Fire states
  - Builder notifications
  - Room descriptions
  - Event messages

### Integration Files
- `script/engine.js` - Game engine integration
  - Room state management
  - Event scheduling
  - Audio playback control
- `script/state_manager.js` - State management
  - Resource tracking
  - Building status
  - Temperature states
  - Builder progression
- `script/outside.js` - Outside world connection
  - Resource gathering
  - Population management
- `script/world.js` - World interaction
  - Compass navigation
  - Location discovery

### UI Components
- `css/room.css` - Room styling
  - Layout definitions
  - Animation rules
  - State indicators
  - Compass tooltip positioning
  - Builder state visualizations
