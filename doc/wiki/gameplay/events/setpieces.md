# Setpiece Events

## Overview
Setpiece events are complex, multi-stage encounters that tell a story through branching paths and varied outcomes. These events represent significant locations or moments in the game, such as abandoned buildings, military outposts, caves, and destroyed settlements.

## Core Mechanics

### Scene Branching
- **Probability-Based Transitions**
  ```javascript
  nextScene: {
      0.3: 'scene1',  // 30% chance
      0.6: 'scene2',  // 30% chance
      1.0: 'scene3'   // 40% chance
  }
  ```
- Scene outcomes influenced by:
  - Previous choices
  - Resource availability
  - Combat results
  - Random chance

### Resource Management
- **Action Costs**
  ```javascript
  cost: {
      torch: 1,      // Required for cave exploration
      bullets: 5,    // Required for combat
      charm: 1       // Required for special interactions
  }
  ```
- Resources required for:
  - Scene exploration
  - Special actions
  - Combat encounters

### Combat System
- **Combat Properties**
  ```javascript
  combat: {
      timing: {
          _FIGHT_SPEED: 100,     // Base tick rate in ms
          _SHIELD_COOLDOWN: 10,  // Shield ability cooldown
          _STIM_COOLDOWN: 10,    // Stim boost cooldown
          attackDelay: 1         // Seconds between attacks
      },
      hit_chance: {
          base: 0.8,             // Base accuracy
          modifiers: {
              'weapon.sharp': 0.1,  // Sharp weapons bonus
              'weapon.precise': 0.15 // Precise weapons bonus
          }
      },
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
  }
  ```

- **Status Effects**
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

### Loot System
- **Loot Tables**
  ```javascript
  loot: {
      'item_name': {
          min: number,      // Minimum quantity (1+)
          max: number,      // Maximum quantity (>= min)
          chance: 0.0-1.0  // Drop probability (0.0-1.0)
      }
  }
  ```

- **Common Categories**:
  1. **Military Equipment**
     ```javascript
     loot: {
         'rifle': {
             min: 1,
             max: 1,
             chance: 0.2    // Rare drop
         },
         'bullets': {
             min: 1,
             max: 5,
             chance: 0.5    // Common drop
         },
         'grenade': {
             min: 1,
             max: 2,
             chance: 0.1    // Uncommon
         }
     }
     ```
  
  2. **Survival Supplies**
     ```javascript
     loot: {
         'cured meat': {
             min: 1,
             max: 5,
             chance: 0.8    // Common drop
         },
         'medicine': {
             min: 1,
             max: 2,
             chance: 0.5    // Uncommon
         }
     }
     ```
  
  3. **Rare Resources**
     ```javascript
     loot: {
         'alien alloy': {
             min: 1,
             max: 1,
             chance: 0.01   // Very rare
         },
         'energy cell': {
             min: 1,
             max: 5,
             chance: 0.5    // Location specific
         }
     }
     ```

### State Management
- **Scene Clearing**
  ```javascript
  onLoad: function() {
      World.clearDungeon();
      $SM.set('game.cityCleared', true);
  }
  ```
- Location state tracking
- Quest progression flags
- World state updates

## Event Types

### Location-Based Events
1. **Friendly Outpost**
   - Safe trading location
   - Guaranteed supplies
   - No combat encounters

2. **Cave System**
   - Resource requirements (torch)
   - Multiple branching paths
   - Combat encounters with beasts
   - Valuable loot opportunities

3. **Abandoned City**
   - Complex multi-stage exploration
   - Various enemy types
   - Military supplies
   - Hidden caches

4. **Destroyed Village**
   - Story-driven encounters
   - Previous game integration
   - Special rewards

## Integration Points

### World System
- Location tracking via `World.curPos`
- Map updates with `World.drawRoad()`
- State persistence using `World.markVisited()`

### Event System
- Scene management
- Combat initiation
- Loot distribution
- Cooldown management (`Events._LEAVE_COOLDOWN`)

### State Machine
- Game progression tracking
- Achievement unlocks
- Location status management
- Resource state updates

## Event Creation Guidelines
1. Plan the narrative structure
   - Multiple paths and outcomes
   - Meaningful choices
   - Resource management decisions

2. Balance encounters
   - Enemy difficulty progression
   - Resource costs and rewards
   - Risk vs reward

3. Implement state tracking
   - Clear victory conditions
   - Persistent world changes
   - Quest progression

4. Design loot tables
   - Tier-appropriate rewards
   - Balanced probabilities
   - Special items for unique encounters

### Scene Structure
- **Scene Definition**
  ```javascript
  'b2': {
      combat: true,
      notification: _('a huge lizard scrambles up out of the darkness of an old metro station.'),
      enemy: 'lizard',
      chara: 'R',
      damage: 5,
      hit: 0.8,
      attackDelay: 2,
      health: 20,
      loot: {
          'scales': {
              min: 5,
              max: 10,
              chance: 0.8
          },
          'teeth': {
              min: 5,
              max: 10,
              chance: 0.5
          }
      },
      buttons: {
          'descend': {
              text: _('descend'),
              cooldown: Events._LEAVE_COOLDOWN,
              nextScene: {0.5: 'c2', 1: 'c3'}
          },
          'leave': {
              text: _('leave city'),
              cooldown: Events._LEAVE_COOLDOWN,
              nextScene: 'end'
          }
      }
  }
  ```

### Enemy Variety
1. **Single Character Enemies**
   - Thugs (E, damage: 4, health: 30)
   - Beasts (R, damage: 3, health: 25)
   - Scavengers (E, damage: 4, health: 30)
   - Soldiers (D, damage: 8, health: 50, ranged: true)
   - Veterans (D, damage: 6, health: 45)
   - Snipers (D, damage: 15, health: 30, ranged: true)

2. **Multi-Character Enemies**
   - Tentacles (TTT, damage: 2, health: 60, plural: true)
   - Rat Packs (RRR, damage: 1, health: 60, plural: true)
   - Squatters (EEE, damage: 2, health: 40, plural: true)

### Location Types
1. **Military Installations**
   ```javascript
   'end3': {
       text: [
           _("beneath the wanderer's rags, clutched in one of its many hands, a glint of steel."),
           _("worth killing for, it seems.")
       ],
       onLoad: function() {
           World.clearDungeon();
       },
       loot: {
           'rifle': {
               min: 1,
               max: 1,
               chance: 1
           },
           'bullets': {
               min: 1,
               max: 5,
               chance: 1
           }
       }
   }
   ```

2. **Abandoned Cities**
   ```javascript
   'b1': {
       text: [
           _('the old tower seems mostly intact.'),
           _('the shell of a burned out car blocks the entrance.'),
           _('most of the windows at ground level are busted anyway.')
       ],
       buttons: {
           'enter': {
               text: _('enter'),
               nextScene: {0.5: 'c1', 1: 'c2'}
           }
       }
   }
   ```

3. **Underground Complexes**
   ```javascript
   'd3': {
       notification: _('a swarm of rats rushes up the tunnel.'),
       combat: true,
       enemy: 'rats',
       plural: true,
       chara: 'RRR',
       damage: 1,
       hit: 0.8,
       attackDelay: 0.25,
       health: 60
   }
   ```

### Special Mechanics
1. **Ranged Combat**
   ```javascript
   {
       enemy: 'sniper',
       chara: 'D',
       damage: 15,
       hit: 0.8,
       attackDelay: 4,
       health: 30,
       ranged: true
   }
   ```

2. **Multi-Stage Encounters**
   ```javascript
   'cleared': {
       text: [
           _('the camp is still, save for the crackling of the fires.'),
           _('the mine is now safe for workers.')
       ],
       notification: _('the coal mine is clear of dangers'),
       onLoad: function() {
           World.drawRoad();
           World.state.coalmine = true;
           World.markVisited(World.curPos[0], World.curPos[1]);
       }
   }
   ```

3. **Rare Loot Tables**
   ```javascript
   loot: {
       'alien alloy': {
           min: 1,
           max: 1,
           chance: 0.01
       },
       'energy cell': {
           min: 1,
           max: 5,
           chance: 0.5
       }
   }
   ```
   
## References
### Core Implementation
- `script/events/setpieces.js` - Main setpiece event definitions
- `script/events.js` - Core event system and combat mechanics
- `script/world.js` - World state and location management

### Integration Files
- `script/state_manager.js` - Game state tracking
- `script/engine.js` - Game engine integration
- `script/audio.js` - Sound effect management

### Constants
- `Events._LEAVE_COOLDOWN` - Standard cooldown duration
- `World.RADIUS` - World map size
- `World.TILE_WIDTH` - Map tile dimensions