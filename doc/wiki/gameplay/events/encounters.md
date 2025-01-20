# Encounters

## Overview
Encounters are dynamic events that occur during exploration, primarily focusing on combat and interaction scenarios. The system manages enemy encounters, combat mechanics, and rewards based on the player's progress and location.

## Core Mechanics

### Combat Timing
```javascript
_FIGHT_SPEED: 100,           // Combat animation speed
_EAT_COOLDOWN: 5,           // Healing cooldowns
_MEDS_COOLDOWN: 7,
_SHIELD_COOLDOWN: 10,
STUN_DURATION: 4000,        // Status effect durations
ENERGISE_MULTIPLIER: 4,
EXPLOSION_DURATION: 3000,
ENRAGE_DURATION: 4000
```

### Combat States
- **Normal**: Basic combat state
- **Stunned**: Cannot act for duration
- **Energised**: Increased damage
- **Shielded**: Reduced damage taken
- **Enraged**: Increased attack frequency
- **Meditation**: Stores and reflects damage
- **Boosted**: Temporary damage increase

## Combat System

### Damage Types
```javascript
damage_types: {
    blunt: {
        stun_chance: 0.5,
        damage_multiplier: 1.0
    },
    sharp: {
        bleed_chance: 0.3,
        damage_multiplier: 1.2
    },
    fire: {
        burn_chance: 0.4,
        damage_multiplier: 1.5
    }
}
```

### Hit Chance Modifiers
```javascript
hit_chance: {
    base: 0.8,               // Base accuracy
    modifiers: {
        'weapon.sharp': 0.1,  // Sharp weapons bonus
        'weapon.precise': 0.15, // Precise weapons bonus
        status_stunned: -0.5   // Stunned penalty
    }
}
```

### Damage Calculation
```javascript
damage_calculation: {
    base_damage: 'weapon.damage',
    multipliers: {
        critical: 2,
        backstab: 1.5,
        wounded: 0.5
    }
}
```

### Combat Constants
```javascript
// Core timing constants
_FIGHT_SPEED: 100,        // Base tick rate in ms
_EAT_COOLDOWN: 5,         // Cooldown for eating meat
_MEDS_COOLDOWN: 7,        // Cooldown for using medicine
_HYPO_COOLDOWN: 7,        // Cooldown for using hypo
_SHIELD_COOLDOWN: 10,     // Cooldown for shield
_STIM_COOLDOWN: 10,       // Cooldown for stim boost

// Status effect durations (ms)
STUN_DURATION: 4000,      // Stun effect length
ENERGISE_MULTIPLIER: 4,   // Energy boost multiplier
EXPLOSION_DURATION: 3000, // Explosion effect
ENRAGE_DURATION: 4000,    // Enrage duration
MEDITATE_DURATION: 5000,  // Meditation length
BOOST_DURATION: 3000,     // Damage boost duration
BOOST_DAMAGE: 10,         // Extra damage from boost
DOT_TICK: 1000           // Damage over time interval
```

### Status Effects
```javascript
status_effects: {
    stun: {
        duration: 4000,
        effect: 'skip_turn'
    },
    poison: {
        duration: 10000,
        damage: 1,
        tick: 1000
    },
    burn: {
        duration: 5000,
        damage: 2,
        tick: 1000
    },
    shield: {
        effect: 'blocks_one_hit'
    },
    energised: {
        effect: 'multiplies_damage',
        multiplier: 4
    },
    meditation: {
        duration: 5000,
        effect: 'stores_damage'
    },
    boost: {
        duration: 3000,
        effect: 'adds_damage',
        bonus: 10
    }
}
```

### Combat Actions
1. **Basic Actions**:
   - Attack: Deal weapon damage
   - Defend: Reduce incoming damage
   - Use Item: Consume resources
   - Flee: Attempt escape

2. **Special Actions**:
   - Stun Attack: Chance to skip enemy turn
   - Power Attack: Higher damage, longer cooldown
   - Quick Attack: Lower damage, shorter cooldown

## Encounter Types

### Tier-Based System
Encounters are divided into three tiers based on distance from the starting point:

1. **Tier 1 (Distance 0-10)**
```javascript
{
    title: _('A Snarling Beast'),
    isAvailable: function() {
        return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FOREST;
    },
    scenes: {
        'start': {
            combat: true,
            enemy: 'snarling beast',
            chara: 'R',
            damage: 1,
            hit: 0.8,
            attackDelay: 1,
            health: 5,
            loot: {
                'fur': {
                    min: 1,
                    max: 3,
                    chance: 1
                },
                'meat': {
                    min: 1,
                    max: 3,
                    chance: 1
                }
            },
            notification: _('a snarling beast leaps out of the underbrush')
        }
    }
}
```

2. **Tier 2 (Distance 11-20)**
```javascript
{
    title: _('A Man-Eater'),
    isAvailable: function() {
        return World.getDistance() > 10 && World.getDistance() <= 20 && World.getTerrain() == World.TILE.FOREST;
    },
    scenes: {
        'start': {
            combat: true,
            enemy: 'man-eater',
            chara: 'T',
            damage: 3,
            hit: 0.8,
            attackDelay: 1,
            health: 25,
            loot: {
                'fur': {
                    min: 5,
                    max: 10,
                    chance: 1
                },
                'meat': {
                    min: 5,
                    max: 10,
                    chance: 1
                }
            }
        }
    }
}
```

3. **Tier 3 (Distance 21+)**
```javascript
{
    title: _('A Soldier'),
    isAvailable: function() {
        return World.getDistance() > 20 && World.getTerrain() == World.TILE.BARRENS;
    },
    scenes: {
        'start': {
            combat: true,
            enemy: 'soldier',
            chara: 'D',
            damage: 8,
            hit: 0.8,
            attackDelay: 2,
            health: 50,
            ranged: true,
            loot: {
                'rifle': {
                    min: 1,
                    max: 1,
                    chance: 0.2
                },
                'bullets': {
                    min: 1,
                    max: 5,
                    chance: 0.5
                }
            }
        }
    }
}
```

### Enemy Types
Character representations in encounters:
- **Single Character Types**:
  - `R`: Beasts/Animals (e.g., Snarling Beast)
  - `E`: Human enemies (e.g., Gaunt Man, Scavenger)
  - `D`: Elite/Ranged enemies (e.g., Soldier, Sniper)
  - `T`: Special/Mutant enemies (e.g., Man-Eater)
  - `H`: Horror enemies (e.g., Chitinous Horror)
  - `Q`: Boss enemies (e.g., Chitinous Queen)
  - `@`: Unique enemies (e.g., Immortal Wanderer)

- **Multi-Character Types** (for group encounters):
  - `RRR`: Pack animals (e.g., Rat Pack)
  - `EEE`: Human groups (e.g., Squatters)
  - `TTT`: Special groups (e.g., Tentacles)

### Combat Properties
Common properties for all encounters:
```javascript
{
    combat: true,              // Indicates a combat encounter
    enemy: 'enemy_type',       // Internal enemy identifier
    enemyName: _('name'),      // Displayed enemy name
    chara: 'X',                // Character representation (single or multiple)
    damage: number,            // Base damage per attack
    hit: 0.8,                  // Base hit chance (typically 80%)
    attackDelay: number,       // Seconds between attacks
    health: number,            // Enemy health points
    ranged: boolean,           // Optional, for ranged enemies
    plural: boolean,           // Optional, for group enemies
    notification: string,      // Encounter start message
    deathMessage: string,      // Message shown on enemy defeat
    cooldown: Events._LEAVE_COOLDOWN  // Standard cooldown between encounters
}
```

### Special Abilities
Some enemies have special abilities:
```javascript
specials: [{
    delay: 7,                  // Seconds between special attacks
    action: (fighter) => {
        Events.setStatus(fighter, 'enraged');
        return 'enraged';
    }
}]
```

### Loot System
Loot tables define possible drops with standardized properties:
```javascript
loot: {
    'item_name': {
        min: number,           // Minimum quantity (1+)
        max: number,           // Maximum quantity (>= min)
        chance: 0.0-1.0       // Drop probability (0.0-1.0)
    }
}
```

Common loot categories:
1. **Basic Resources**
   ```javascript
   loot: {
       'fur': {
           min: 1,
           max: 3,
           chance: 1.0        // Always drops
       },
       'meat': {
           min: 1,
           max: 3,
           chance: 0.8        // 80% chance
       }
   }
   ```

2. **Military Equipment**
   ```javascript
   loot: {
       'rifle': {
           min: 1,
           max: 1,
           chance: 0.2        // Rare drop
       },
       'bullets': {
           min: 1,
           max: 5,
           chance: 0.5        // Common drop
       }
   }
   ```

3. **Special Items**
   ```javascript
   loot: {
       'alien alloy': {
           min: 1,
           max: 1,
           chance: 0.01       // Very rare
       },
       'energy cell': {
           min: 1,
           max: 2,
           chance: 0.1        // Uncommon
       }
   }
   ```

## Technical Implementation

### Combat Flow
```javascript
startCombat: function(scene) {
    Events.fought = false;
    Events.won = false;
    
    // Create fighter divs
    Events.createFighterDiv('@', World.health, World.getMaxHealth())
        .attr('id', 'wanderer')
        .appendTo(fightBox);
    Events.createFighterDiv(scene.chara, scene.health, scene.health)
        .attr('id', 'enemy')
        .appendTo(fightBox);
        
    // Start enemy AI
    Events.startEnemyAttacks();
}
```

### Enemy Behavior
```javascript
startEnemyAttacks: (delay) => {
    clearInterval(Events._enemyAttackTimer);
    const scene = Events.activeEvent().scenes[Events.activeScene];
    Events._enemyAttackTimer = Engine.setInterval(
        Events.enemyAttack, 
        (delay ?? scene.attackDelay) * 1000
    );
}
```

### Integration Points

#### World System
- **Location Management**
  ```javascript
  World.getDistance()     // Distance from starting point
  World.getTerrain()      // Current terrain type
  World.setHp()          // Health management
  World.drawRoad()       // Update world map
  World.markVisited()    // Track visited locations
  ```

#### Event System
- **Scene Management**
  ```javascript
  Events.startCombat()   // Initialize combat
  Events.setStatus()     // Apply status effects
  Events.clearStatus()   // Remove status effects
  Events.startEvent()    // Begin encounter
  Events.endEvent()      // Complete encounter
  ```

#### State Machine
- **Game State**
  ```javascript
  $SM.get('game.health')      // Get current health
  $SM.set('game.killed', n)   // Track kills
  $SM.add('stores.fur', n)    // Add resources
  ```

#### Audio System
- **Sound Effects**
  ```javascript
  AudioEngine.playSound('hit')     // Combat sounds
  AudioEngine.playSound('death')   // Death effects
  AudioEngine.playSound('unlock')  // Special events
  ```

#### Translation System
- **Localization**
  ```javascript
  _(message)             // Translate text
  getTranslation(key)    // Get specific translation
  ```

## Event Creation Guidelines
1. **Balance Considerations**
   - Scale difficulty with distance
   - Match enemy type to terrain
   - Balance loot tables with risk

2. **Required Properties**
   - Unique title and enemy name
   - Appropriate character representation
   - Balanced combat stats
   - Descriptive notifications
   - Relevant loot table

3. **Testing Checklist**
   - Verify availability conditions
   - Test combat balance
   - Check loot distribution
   - Validate translations

## Scene Structure

### Basic Scene
```javascript
{
    title: _('Event Title'),
    isAvailable: function() {
        return World.getDistance() <= 10 && World.getTerrain() == World.TILE.FOREST;
    },
    scenes: {
        'start': {
            combat: true,              // Combat encounter flag
            enemy: 'enemy_type',       // Enemy identifier
            chara: 'X',               // Character representation
            notification: _('message'), // Encounter message
            buttons: {
                'continue': {
                    text: _('continue'),
                    cooldown: Events._LEAVE_COOLDOWN,
                    nextScene: 'end'
                },
                'flee': {
                    text: _('flee'),
                    cooldown: Events._LEAVE_COOLDOWN,
                    nextScene: {
                        0.5: 'escaped',
                        1.0: 'failed'
                    }
                }
            }
        },
        'escaped': {
            text: [
                _('escaped the encounter')
            ],
            buttons: {
                'continue': {
                    text: _('continue'),
                    nextScene: 'end'
                }
            }
        }
    }
}
```

### Scene Properties
- **Availability**: Controlled by `isAvailable()` function
- **Combat Flag**: Determines if scene involves combat
- **Notifications**: Messages displayed during scene
- **Buttons**: Available actions and their outcomes
- **Scene Transitions**: Can be fixed or probability-based

### Scene Types
1. **Combat Scenes**
   - Enemy properties required
   - Combat UI elements shown
   - Loot tables for rewards

2. **Choice Scenes**
   - Multiple buttons/paths
   - Resource requirements
   - Probability-based outcomes

3. **Reward Scenes**
   - Loot distribution
   - State updates
   - End scene transitions

## References

### Core Implementation
- `script/events/encounters.js` - Main encounters definitions
  - Enemy types and properties
  - Combat encounters
  - Loot tables
  - Availability conditions

### Combat System
- `script/events.js` - Combat system implementation
  - Combat mechanics
  - Turn management
  - Damage calculation
  - Status effects

### Integration Files
- `script/world.js` - World state management
  - Distance tracking
  - Terrain system
  - Location markers
- `script/engine.js` - Engine integration
  - Combat initialization
  - State management
- `script/state_manager.js` - State tracking
  - Combat progress
  - Resource management