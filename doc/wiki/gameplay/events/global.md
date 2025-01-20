# Global Event System

## Overview
The global event system manages the game's dynamic events, controlling timing, availability, and execution of various event types across the game world.

## Core Systems

### Event Timing
- **Constants**
  ```javascript
  Events._LEAVE_COOLDOWN = 1;    // Base cooldown between leaving locations
  Events._FIGHT_COOLDOWN = 0.5;  // Combat cooldown
  Events._EVENT_TIME_RANGE = [3, 6];  // Random event timing range (minutes)
  ```
- Events are scheduled within the time range
- Cooldowns prevent event spam
- Action timing controls pacing

### Event Pool Management
```javascript
Events.EventPool = [].concat(
    Events.Global,    // Global events
    Events.Room,      // Room-specific events
    Events.Outside,   // Outside events
    Events.Marketing  // Special events
);

// Event selection example
Events.triggerEvent = function() {
    var pool = Events.EventPool;
    var v = Math.random();
    var index = Math.floor(v * pool.length);
    if (pool[index].isAvailable()) {
        pool[index].scenes['start'].notification &&
            Notifications.notify(pool[index].scenes['start'].notification);
        Events.startEvent(pool[index]);
    }
}
```

### Event Structure
```javascript
{
    title: 'The Thief',  // Event name
    isAvailable: function() {
        // Can trigger in Room or Outside modules
        return (Engine.activeModule == Room || Engine.activeModule == Outside) && 
               $SM.get('game.thieves') == 1;
    },
    scenes: {
        'start': {
            text: [
                'the villagers haul a filthy man out of the store room.',
                'say his folk have been skimming the supplies.',
                'say he should be strung up as an example.'
            ],
            notification: 'a thief is caught',
            buttons: {
                'kill': {
                    text: 'hang him',
                    nextScene: {1: 'hang'}
                },
                'spare': {
                    text: 'spare him',
                    nextScene: {1: 'spare'}
                }
            }
        },
        'hang': {
            text: [
                'the villagers hang the thief',
                'the point is made. in the next few days, the missing supplies are returned.'
            ],
            onLoad: function() {
                $SM.set('game.thieves', 2);
                $SM.remove('income.thieves');
                World.markVisited(World.curPos[0], World.curPos[1]);
            },
            buttons: {
                'leave': {
                    text: 'leave',
                    nextScene: 'end'
                }
            }
        },
        'spare': {
            text: [
                'the man says he\'ll remember this. says he owes you.',
                'then he vanishes into the crowd.',
                'the stolen supplies are returned the next day.'
            ],
            onLoad: function() {
                $SM.set('game.thieves', 2);
                $SM.remove('income.thieves');
                $SM.addPerk('stealthy');
            },
            buttons: {
                'leave': {
                    text: 'leave',
                    nextScene: 'end'
                }
            }
        }
    }
}
```

### State Integration
```javascript
// State changes
$SM.set('game.thieves', 2);      // Set thief event completed
$SM.remove('income.thieves');     // Remove theft penalty
$SM.addPerk('stealthy');         // Add stealth perk if spared

// Resource management
$SM.add('stores.wood', -10);     // Consume resources
$SM.get('stores.fur', true) > 0; // Check resource availability

// Game progression
World.markVisited(x, y);         // Mark location as visited
Engine.enableModule(Outside);     // Unlock new module
```

### Notification System
```javascript
// Basic notification
Notifications.notify('a thief is caught');

// Delayed notification
Notifications.notify('the point is made', 'important', true);

// Combat notification
Notifications.notify('the stranger is dead', 'combat');

// Resource notification
Notifications.notify('gained 5 wood');
```

## Event Types

### Global Events
Example: The Thief
- Triggers in multiple modules
- Affects game-wide mechanics
- Has lasting consequences
- Modifies resource income

### Location Events
Example: Wandering Trader
```javascript
{
    title: 'Wandering Trader',
    isAvailable: function() {
        return Engine.activeModule == Outside && 
               $SM.get('stores.fur', true) > 0;
    },
    scenes: {
        'start': {
            text: ['a wandering trader approaches'],
            notification: 'a trader arrives',
            buttons: {
                'trade': {
                    text: 'trade',
                    cost: {'fur': 100},
                    reward: {'scales': 1}
                }
            }
        }
    }
}
```

### Time Events
Example: Night Attack
```javascript
{
    title: 'Night Attack',
    isAvailable: function() {
        return Engine.activeModule == Room && 
               World.getTime() == 'night';
    },
    scenes: {
        'start': {
            text: ['beasts attack under cover of darkness'],
            notification: 'beasts attack',
            combat: true
        }
    }
}
```

## Integration Points

### World System
```javascript
World.getDistance();     // Get distance from start
World.getTerrain();      // Get current terrain
World.markVisited(x, y); // Mark location visited
World.drawRoad();        // Update world map
```

### Combat System
```javascript
Combat.begin(scene);     // Start combat
Combat.enableButtons();  // Update UI
Combat.endCombat();     // End combat sequence
```

### Resource System
```javascript
$SM.add('stores.wood', amount);  // Add/remove resources
$SM.get('stores.fur', true);     // Check resource amount
$SM.setIncome('thieves', -5);    // Set resource income
```

## Event Creation Guidelines
1. Define event structure
2. Implement availability conditions
3. Create scene flow
4. Add state changes
5. Test all paths
6. Balance rewards

## References

### Core Implementation
- `script/events.js` - Main event system
  - Event pool management
  - Event scheduling
  - Scene management
  - Combat system

### State Management
- `script/state_manager.js` - State tracking system
  - Game state persistence
  - Resource management
  - Progress tracking
  - Save/load functionality

### Integration Files
- `script/engine.js` - Game engine integration
  - Event initialization
  - Game state management
  - Save/load operations
- `script/world.js` - World state management
  - Location tracking
  - Distance calculations
  - Terrain management
- `script/outside.js` - Outside module integration
  - Location events
  - Resource gathering
  - World updates

### Translation System
- `lang/adarkroom.pot` - Translation template
- `lang/*/strings.po` - Language-specific translations
  - Event text
  - Notifications
  - Button labels
