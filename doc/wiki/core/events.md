# Events System

The events system is a sophisticated module that manages all random encounters, scripted events, and combat scenarios in the game. This documentation covers the technical implementation and mechanics of the event system.

## Architecture Overview

The events system consists of several key components:
- Event Pool Management
- Scene Management
- Combat System
- Event Scheduling
- State Management

### Core Constants

```javascript
_EVENT_TIME_RANGE: [3, 6]     // Random event timing (minutes)
_PANEL_FADE: 200             // UI fade duration
_FIGHT_SPEED: 100           // Combat animation speed
_EAT_COOLDOWN: 5           // Healing cooldowns
_MEDS_COOLDOWN: 7
_SHIELD_COOLDOWN: 10
STUN_DURATION: 4000        // Status effect durations
ENRAGE_DURATION: 4000
MEDITATE_DURATION: 5000
```

## Event Mechanics

### Event Timing
```javascript
timing: {
  EVENT_TIME_RANGE: [3, 6],  // Minutes between random events
  FIGHT_SPEED: 100,          // Combat animation speed (ms)
  STUN_DURATION: 4000,       // Stun effect duration (ms)
  DEATH_COOLDOWN: 120000,    // Time before respawn (ms)
  ENCOUNTER_COOLDOWN: 10000  // Minimum time between encounters
}
```

### Combat System
```javascript
combat: {
  damage_types: ['blunt', 'sharp', 'fire', 'poison'],
  status_effects: {
    stun: {duration: 4000, effect: 'skip_turn'},
    poison: {duration: 10000, damage: 1},
    burn: {duration: 5000, damage: 2}
  },
  hit_chance: {
    base: 0.8,
    modifiers: {
      'weapon.sharp': 0.1,
      'weapon.precise': 0.15,
      status_stunned: -0.5
    }
  },
  damage_calculation: {
    base_damage: 'weapon.damage',
    multipliers: {
      critical: 2,
      backstab: 1.5,
      wounded: 0.5
    }
  }
}
```

### Event Categories
```javascript
categories: {
  COMBAT: {
    weight: 0.4,
    cooldown: 5000,
    requires_weapon: true
  },
  SCAVENGE: {
    weight: 0.3,
    cooldown: 15000,
    requires_light: true
  },
  TRADE: {
    weight: 0.2,
    cooldown: 30000,
    requires_goods: true
  },
  STORY: {
    weight: 0.1,
    cooldown: 60000,
    unique: true
  }
}
```

### Event Pool Management
```javascript
pool_management: {
  max_pool_size: 100,
  min_active_events: 5,
  event_weights: {
    common: 0.6,
    uncommon: 0.3,
    rare: 0.1
  },
  scaling: {
    enabled: true,
    factors: ['game_progress', 'player_health', 'resources']
  }
}
```

## Event Types

### 1. Random Events
- Occur at random intervals within `_EVENT_TIME_RANGE`
- Pulled from the Event Pool
- Can be location-specific or global

### 2. Setpiece Events
- Scripted, non-random events
- Triggered by specific conditions or locations
- Often contain unique rewards or story elements

### 3. Combat Events
- Special events with combat mechanics
- Include enemy stats, attack patterns, and rewards
- Support various combat statuses and abilities

## Event Structure

Events are defined using a hierarchical structure:

```javascript
{
  title: "Event Title",
  scenes: {
    'start': {
      text: ["Description line 1", "Description line 2"],
      notification: "Notification text",
      buttons: {
        'action': {
          text: "Button text",
          cost: {'resource': amount},
          nextScene: 'scene_id'
        }
      },
      loot: {
        'item': {
          min: 1,
          max: 5,
          chance: 0.5
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_SOUND
}
```

## Scene Management

### Scene Types
1. **Story Scenes**
   - Text-based narrative
   - Choice-driven progression
   - Resource management

2. **Combat Scenes**
   - Enemy encounters
   - Battle mechanics
   - Loot rewards

3. **Location Scenes**
   - Area exploration
   - Resource gathering
   - Discovery events

### Scene Types
```javascript
scene_types: {
  COMBAT: {
    buttons: ['attack', 'defend', 'run'],
    notification: true,
    music: true
  },
  STORY: {
    buttons: ['continue', 'choice1', 'choice2'],
    notification: false,
    music: true
  },
  TRADE: {
    buttons: ['buy', 'sell', 'leave'],
    notification: true,
    music: false
  },
  LOOT: {
    buttons: ['take', 'leave'],
    notification: true,
    music: false
  }
}
```

### Scene Transitions
```javascript
transitions: {
  fade_duration: 200,
  notification_delay: 500,
  button_reveal_delay: 300,
  music_fade: 2000
}
```

## Event Pool System

The Event Pool combines events from multiple sources:
- Global Events
- Room Events
- Outside Events
- Marketing Events
- Location-specific Events

### Event Selection
Events are selected based on:
1. Current location
2. Game state
3. Random chance
4. Player conditions

## Integration Points

### 1. State Manager
- Tracks event progress
- Stores event outcomes
- Manages cooldowns

### 2. Audio System
- Event-specific sounds
- Combat audio
- Ambient effects

### 3. Notification System
- Event announcements
- Combat feedback
- Reward notifications

## Event Creation

### Basic Event Template
```javascript
basic_event: {
  title: 'Event Name',
  id: 'unique_id',
  maxVisits: 1,
  scenes: {
    start: {
      text: ['Event description'],
      notification: 'Event notification',
      buttons: {
        'choice1': {
          text: 'Button text',
          nextScene: 'scene_id',
          cost: {},
          reward: {}
        }
      }
    }
  }
}
```

### Combat Event Template
```javascript
combat_event: {
  title: 'Combat Name',
  id: 'combat_id',
  scenes: {
    start: {
      combat: true,
      enemy: {
        name: 'Enemy Name',
        hp: 10,
        damage: 1,
        hit_chance: 0.8,
        loot: {}
      },
      buttons: {
        'attack': {
          text: 'Attack',
          cost: {
            'weapon': 1
          }
        },
        'run': {
          text: 'Run Away',
          nextScene: 'end'
        }
      }
    }
  }
}
```

## Technical Considerations

### 1. Performance
- Event scheduling optimization
- Combat calculation efficiency
- Scene transition management

### 2. State Management
- Event persistence
- Combat state tracking
- Progress saving

### 3. Error Handling
- Missing scene fallbacks
- Combat interruption handling
- Resource validation

## Extending the System

### Adding New Events
1. Create event definition
2. Add to appropriate event pool
3. Define scenes and outcomes
4. Implement special mechanics

### Custom Combat Mechanics
1. Define new status effects
2. Create special abilities
3. Implement combat modifiers

## References

The events system implementation can be found in the following source files:

1. **Core Event System**
   - `script/events.js` - Main events implementation
     - Event pool management
     - Combat mechanics
     - Scene transitions
     - Event scheduling
   - `script/events/setpieces.js` - Scripted events
     - Story events
     - Location discoveries
     - Special encounters

2. **Event Categories**
   - `script/events/room.js` - Room-specific events
     - Fire events
     - Builder events
     - Stranger encounters
   - `script/events/outside.js` - Outside events
     - Resource gathering
     - Combat encounters
     - Trading events
   - `script/events/path.js` - Path events
     - Location discoveries
     - Random encounters
     - Landmark events
   - `script/events/space.js` - Space events
     - Ship encounters
     - Asteroid events
     - Space combat

3. **Combat System**
   - `script/events/combat.js` - Combat mechanics
     - Attack calculations
     - Status effects
     - Damage types
     - Combat AI
   - `script/events/weapons.js` - Weapon definitions
     - Damage values
     - Special effects
     - Combat modifiers

4. **Integration Points**
   - `script/state_manager.js` - State tracking
     - Event progress
     - Combat state
     - Cooldowns
   - `script/audio.js` - Event audio
     - Combat sounds
     - Event music
     - Ambient effects
   - `script/notifications.js` - Event feedback
     - Combat messages
     - Event notifications
     - Reward displays
