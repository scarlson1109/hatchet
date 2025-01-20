# Room Events

## Overview
Room events are specific encounters that occur within the player's base of operations. These events focus on resource management, trading, and base development. The room serves as the central hub for survival mechanics and early game progression.

## Core Systems

### Fire Management
```javascript
FireEnum: {
    Dead: { value: 0, text: 'dead' },
    Smoldering: { value: 1, text: 'smoldering' },
    Flickering: { value: 2, text: 'flickering' },
    Burning: { value: 3, text: 'burning' },
    Roaring: { value: 4, text: 'roaring' }
}
```
- Fire affects room temperature and visibility
- Requires wood to maintain
- Cooldown period: 5 minutes
- Stoke cooldown: 10 seconds

### Temperature System
```javascript
TempEnum: {
    Freezing: { value: 0, text: 'freezing' },
    Cold: { value: 1, text: 'cold' },
    Mild: { value: 2, text: 'mild' },
    Warm: { value: 3, text: 'warm' },
    Hot: { value: 4, text: 'hot' }
}
```
- Updates every 30 seconds
- Affected by fire level
- Influences builder and worker efficiency

### Builder System
Builder states:
1. Approaching (level 0)
2. Collapsed (level 1)
3. Shivering (level 2)
4. Sleeping (level 3)
5. Helping (level 4)

## Event Types

### 1. Trading Events
Trading events provide opportunities to exchange resources with visitors.

#### The Nomad
```javascript
{
    title: 'The Nomad',
    isAvailable: function() {
        return Engine.activeModule == Room && 
               $SM.get('stores.fur', true) > 0;
    },
    scenes: {
        'start': {
            text: ['a nomad shuffles into view'],
            notification: 'a nomad arrives, looking to trade',
            buttons: {
                'buyScales': {
                    text: 'buy scales',
                    cost: { 'fur': 100 },
                    reward: { 'scales': 1 }
                },
                'buyTeeth': {
                    text: 'buy teeth',
                    cost: { 'fur': 200 },
                    reward: { 'teeth': 1 }
                },
                'buyBait': {
                    text: 'buy bait',
                    cost: { 'fur': 5 },
                    reward: { 'bait': 1 }
                },
                'buyCompass': {
                    available: function() {
                        return $SM.get('stores.compass', true) < 1;
                    },
                    cost: { fur: 300, scales: 15, teeth: 5 },
                    reward: { 'compass': 1 }
                }
            }
        }
    }
}
```

#### The Beggar
A character who trades fur for random rewards.
- **Availability**: Requires fur
- **Options**:
  - Give 50 fur (50% scales, 30% teeth, 20% cloth)
  - Give 100 fur (50% teeth, 30% scales, 20% cloth)
  - Each successful trade yields 20 of the chosen resource

### 2. Resource Events

#### Noises Outside
```javascript
{
    title: 'Noises',
    isAvailable: function() {
        return Engine.activeModule == Room && 
               $SM.get('stores.wood');
    },
    scenes: {
        'start': {
            text: ['through the walls, shuffling noises can be heard'],
            notification: 'strange noises can be heard through the walls',
            buttons: {
                'investigate': {
                    text: 'investigate',
                    nextScene: { 0.3: 'stuff', 1: 'nothing' }
                }
            }
        },
        'stuff': {
            reward: { wood: 100, fur: 10 }
        }
    }
}
```

#### The Mysterious Wanderer
Appears in two variants offering resource gambling opportunities:

**Wood Trader**:
- **Availability**: Requires wood
- **Options**:
  - Give 100 wood (50% chance of 300 wood return)
  - Give 500 wood (30% chance of 1500 wood return)

**Fur Trader**:
- **Availability**: Requires fur
- **Options**:
  - Give 100 fur (50% chance of 300 fur return)
  - Give 500 fur (30% chance of 1500 fur return)

### 3. Builder Events

#### The Shady Builder
```javascript
{
    title: 'The Shady Builder',
    isAvailable: function() {
        return Engine.activeModule == Room && 
               $SM.get('game.buildings["hut"]', true) >= 5 && 
               $SM.get('game.buildings["hut"]', true) < 20;
    },
    scenes: {
        'start': {
            text: [
                'a shady builder passes through',
                'says he can build you a hut for less wood'
            ],
            buttons: {
                'build': {
                    text: '300 wood',
                    cost: { 'wood': 300 },
                    nextScene: {0.6: 'steal', 1: 'build'}
                }
            }
        }
    }
}
```

### 4. Gambling Events

#### The Scout
Offers mapping and scouting abilities.
- **Availability**: Requires world map unlocked
- **Options**:
  - Buy map (Cost: 200 fur, 10 scales)
  - Learn scouting (Cost: 1000 fur, 50 scales, 20 teeth)
  - Reveals portions of the world map

#### The Master
An old wanderer offering combat skills.
- **Availability**: Requires world map unlocked
- **Cost**: 100 cured meat, 100 fur, 1 torch
- **Skills Offered**:
  - Evasion: Improves dodge chance
  - Precision: Increases hit chance
  - Force: Enhances damage

## Event Mechanics

### 1. Availability Conditions
- Events check specific conditions through `isAvailable()` functions
- Conditions can include:
  - Active module check (`Engine.activeModule == Room`)
  - Resource requirements (`$SM.get('stores.wood')`)
  - Building counts (`$SM.get('game.buildings["hut"]')`)
  - Game state flags (`$SM.get('features.location.world')`)

### 2. Scene Management
- Events use a scene-based system with:
  - Text descriptions (`text: []`)
  - Notifications (`notification: ''`)
  - Button choices (`buttons: {}`)
  - Scene transitions (`nextScene: {}`)
  - Probability-based outcomes (`{0.3: 'scene1', 1: 'scene2'}`)

### 3. Resource Management
- Trading costs and rewards
- Resource checks before event availability
- Dynamic resource calculations
- Delayed resource rewards

### 4. State Integration
```javascript
onLoad: function() {
    $SM.set('game.thieves', 2);
    $SM.remove('income.thieves');
    $SM.addPerk('stealthy');
}
```

### 5. Audio Integration
```javascript
audio: {
    EVENT_NOMAD: 'audio/event_nomad.mp3',
    EVENT_NOISES_OUTSIDE: 'audio/event_noises_outside.mp3',
    EVENT_SHADY_BUILDER: 'audio/event_shady_builder.mp3'
}
```

## Core Room Mechanics

### 1. Fire System
```javascript
// Core timing constants
_FIRE_COOL_DELAY: 5 * 60 * 1000    // 5 minutes
_STOKE_COOLDOWN: 10                // 10 seconds
_ROOM_WARM_DELAY: 30 * 1000        // 30 seconds
```

#### Fire States and Effects
```javascript
FireEnum: {
    Dead: { 
        value: 0, 
        text: 'dead',
        temp_effect: -20,
        wood_use: 0
    },
    Smoldering: { 
        value: 1, 
        text: 'smoldering',
        temp_effect: -10,
        wood_use: 1
    },
    Flickering: { 
        value: 2, 
        text: 'flickering',
        temp_effect: 0,
        wood_use: 2
    },
    Burning: { 
        value: 3, 
        text: 'burning',
        temp_effect: 10,
        wood_use: 3
    },
    Roaring: { 
        value: 4, 
        text: 'roaring',
        temp_effect: 20,
        wood_use: 4
    }
}
```

### 2. Builder Progression
```javascript
/*
 * Builder states:
 * 0 - Approaching: Initial state when fire is lit
 * 1 - Collapsed: Enters room, triggers wood requirement
 * 2 - Shivering: Warming up by fire
 * 3 - Sleeping: Almost recovered
 * 4 - Helping: Fully recovered, enables building
 */
```

#### State Transitions
- **Approaching → Collapsed**: 
  - Trigger: "a ragged stranger stumbles through the door and collapses in the corner"
  - Effect: Unlocks forest after 15 seconds if no wood

- **Collapsed → Shivering**:
  - Trigger: Room temperature reaches "Warm"
  - Notification: "the stranger shivers, and mumbles quietly. her words are unintelligible."

- **Shivering → Sleeping**:
  - Trigger: Room stays warm
  - Notification: "the stranger in the corner stops shivering. her breathing calms."

- **Sleeping → Helping**:
  - Trigger: Room maintains warmth
  - Effect: Enables building system
  - Notification: "the stranger is standing by the fire. she says she can help. says she builds things."

### 3. Building System

#### Basic Buildings
```javascript
Craftables: {
    'trap': {
        maximum: 10,
        cost: function() {
            var n = $SM.get('game.buildings["trap"]', true);
            return { 'wood': 10 + (n * 10) };
        }
    },
    'cart': {
        maximum: 1,
        cost: function() {
            return { 'wood': 30 };
        }
    },
    'hut': {
        maximum: 20,
        cost: function() {
            var n = $SM.get('game.buildings["hut"]', true);
            return { 'wood': 100 + (n * 50) };
        }
    }
}
```

#### Building Effects
- **Trap**: Generates fur and meat every 90 seconds
  - Base output: 1-3 fur, 1-3 meat
  - Bait effect: +50% success rate

- **Cart**: Increases wood gathering capacity by 50%

- **Hut**: Houses workers and increases population
  - Each hut adds 1 worker capacity
  - Workers contribute to resource gathering

### 4. Temperature System
```javascript
TempEnum: {
    Freezing: { value: 0, text: 'freezing', effect: 'health damage' },
    Cold: { value: 1, text: 'cold', effect: 'reduced efficiency' },
    Mild: { value: 2, text: 'mild', effect: 'normal' },
    Warm: { value: 3, text: 'warm', effect: 'normal' },
    Hot: { value: 4, text: 'hot', effect: 'increased efficiency' }
}
```

#### Temperature Mechanics
- Updates every 30 seconds
- Influenced by fire level
- Affects builder progression
- Impacts worker efficiency
- Temperature changes are gradual
- Fire must be maintained to keep room warm

### 5. Resource Generation

#### Passive Income
```javascript
income: {
    trap: {
        delay: 90,
        stores: {
            'fur': {
                min: 1,
                max: 3
            },
            'meat': {
                min: 1,
                max: 3
            }
        }
    },
    builder: {
        delay: 10,
        stores: {
            'wood': 2
        }
    }
}
```

## References

### Core Implementation
- `script/events/room.js` - Room event definitions
  - Trading events
  - Resource events
  - Builder events
  - Gambling events

### Event System
- `script/events.js` - Core event system
  - Event timing
  - Event pool management
  - Scene transitions
  - State management

### State Management
- `script/state_manager.js` - Game state tracking
  - Resource tracking
  - Building status
  - Event history
  - Progress flags

### Audio System
- `script/audio.js` - Sound effects and music
  - Event sounds
  - Ambient effects
  - UI feedback

### Translation System
- `lang/adarkroom.pot` - Translation template
- `lang/*/strings.po` - Language-specific translations
  - Event text
  - Button labels
  - Notifications
