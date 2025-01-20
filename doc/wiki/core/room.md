# Room System

The Room is the central starting point and hub of the game, managing basic survival mechanics, resource gathering, and early game progression. This documentation covers the technical implementation and gameplay mechanics of the room system.

## Architecture Overview

The Room system consists of several key components:
- Fire Management
- Resource Management
- Building System
- Crafting System
- Event System
- Temperature Mechanics

### Core Constants

```javascript
_FIRE_COOL_DELAY: 5 * 60 * 1000    // Time before fire cools (5 minutes)
_ROOM_WARM_DELAY: 30 * 1000        // Room temperature update interval
_BUILDER_STATE_DELAY: 0.5 * 60 * 1000  // Builder state update interval
_STOKE_COOLDOWN: 10                // Fire stoking cooldown
_NEED_WOOD_DELAY: 15 * 1000       // Wood requirement timing
```

## Core Mechanics

### 1. Fire System
- Central survival mechanic
- Temperature management
- Light source
- Resource consumption

#### Fire States
```javascript
states: {
  dead: 'dead',         // No heat, no light
  smoldering: 'smoldering',  // Minimal heat
  burning: 'burning',    // Normal state
  roaring: 'roaring'    // Maximum heat
}
```

### 2. Building System

The room supports various buildings that unlock game features:

#### Basic Buildings
```javascript
buildings: {
  'trap': {
    maximum: 10,
    cost: { wood: 10 + (n * 10) }
  },
  'cart': {
    maximum: 1,
    cost: { wood: 30 }
  },
  'hut': {
    maximum: 20,
    cost: { wood: 100 + (n * 50) }
  }
}
```

#### Advanced Buildings
- Lodge (hunting)
- Trading Post (commerce)
- Tannery (leather production)
- Smokehouse (meat preservation)
- Workshop (advanced crafting)
- Steelworks (metal working)
- Armoury (ammunition)

### 3. Crafting System

#### Tool Categories
1. **Basic Tools**
   - Torch
   - Bone Spear
   - Waterskin

2. **Advanced Tools**
   - Rucksack
   - Wagon
   - Water Tank
   - Steel Weapons

#### Crafting Mechanics
```javascript
craft: {
  name: 'item_name',
  type: 'tool|weapon|upgrade',
  maximum: 1,  // Optional limit
  cost: {
    resource1: amount1,
    resource2: amount2
  }
}
```

## Room Events

### Event Types

1. **Trader Events**
   - The Nomad (general goods)
   - The Wanderer (special items)
   - The Beggar (resource trades)

2. **Resource Events**
   - Noises Outside (wood/fur)
   - Noises Inside (resource conversion)
   - Thieves (resource loss)

### Event Structure
```javascript
{
  title: 'Event Name',
  isAvailable: function() {
    // Availability conditions
  },
  scenes: {
    'start': {
      text: ['Event description'],
      notification: 'Event notification',
      buttons: {
        'action': {
          text: 'Button text',
          cost: { resource: amount },
          reward: { resource: amount }
        }
      }
    }
  }
}
```

## State Management

### Room States
```javascript
states: {
  room: {
    fire: fire_state,
    temperature: temp_value,
    builders: builder_count
  },
  stores: {
    wood: amount,
    fur: amount,
    meat: amount
  }
}
```

### Building States
```javascript
buildings: {
  name: {
    count: number,
    broken: boolean,
    worker: number
  }
}
```

## Integration Points

### 1. State Manager
- Resource tracking
- Building status
- Fire state
- Temperature

### 2. Events System
- Room-specific events
- Trader encounters
- Resource events

### 3. Outside World
- Resource gathering
- Worker management
- Building effects

## Technical Features

### 1. Temperature System
- Fire state affects room temperature
- Temperature affects survival
- Gradual temperature changes

### 2. Resource Management
- Resource limits
- Storage mechanics
- Resource conversion

### 3. Worker Management
- Builder assignment
- Work efficiency
- Population management

## Usage Examples

### Fire Management
```javascript
Room.stokeFire()        // Increase fire intensity
Room.coolFire()         // Natural fire cooling
Room.adjustTemp()       // Update room temperature
```

### Building Management
```javascript
Room.needsBuilder()     // Check builder requirements
Room.updateBuilderState() // Update builder status
Room.handleBuild('hut') // Construct new building
```

## Technical Considerations

### 1. Performance
- Temperature calculation optimization
- Event scheduling
- Resource limit handling

### 2. State Persistence
- Building status saving
- Resource tracking
- Fire state management

### 3. Event Balance
- Resource gain/loss balance
- Event frequency
- Trade economics

## Extending the System

### Adding New Buildings
1. Define building properties
2. Set resource costs
3. Implement effects
4. Add UI elements

### Custom Events
1. Create event definition
2. Set availability conditions
3. Define scenes and outcomes
4. Add rewards/penalties

## Resource Economics

### Building Costs & Scaling

1. **Basic Structures**
   ```javascript
   trap: {
     base_cost: { wood: 10 },
     scaling: wood: +10 per trap,
     maximum: 10
   }
   cart: {
     cost: { wood: 30 },
     maximum: 1
   }
   hut: {
     base_cost: { wood: 100 },
     scaling: wood: +50 per hut,
     maximum: 20
   }
   ```

2. **Production Buildings**
   ```javascript
   lodge: {
     cost: { wood: 200, fur: 10, meat: 5 },
     maximum: 1
   }
   trading_post: {
     cost: { wood: 400, fur: 100 },
     maximum: 1
   }
   tannery: {
     cost: { wood: 500, fur: 50 },
     maximum: 1
   }
   smokehouse: {
     cost: { wood: 600, meat: 50 },
     maximum: 1
   }
   ```

3. **Advanced Structures**
   ```javascript
   workshop: {
     cost: { wood: 800, leather: 100, scales: 10 },
     maximum: 1
   }
   steelworks: {
     cost: { wood: 1500, iron: 100, coal: 100 },
     maximum: 1
   }
   armoury: {
     cost: { wood: 3000, steel: 100, sulphur: 50 },
     maximum: 1
   }
   ```

### Trading Economics

1. **Nomad Trades**
   ```javascript
   trades: {
     scales: { cost: { fur: 100 }, reward: { scales: 1 } },
     teeth: { cost: { fur: 200 }, reward: { teeth: 1 } },
     bait: { cost: { fur: 5 }, reward: { bait: 1 } },
     compass: { 
       cost: { fur: 300, scales: 15, teeth: 5 },
       reward: { compass: 1 },
       one_time: true
     }
   }
   ```

2. **Resource Conversion Events**
   ```javascript
   wood_conversion: {
     input: wood * 0.1,  // 10% of current wood
     output_rates: {
       scales: wood / 5,
       teeth: wood / 5,
       cloth: wood / 5
     }
   }
   ```

3. **Beggar Trades**
   ```javascript
   trades: {
     small: {
       cost: { fur: 50 },
       reward: { scales: 20 | teeth: 20 | cloth: 20 }
     },
     large: {
       cost: { fur: 100 },
       reward: { scales: 20 | teeth: 20 | cloth: 20 }
     }
   }
   ```

### Equipment Costs

1. **Basic Tools**
   ```javascript
   torch: { cost: { wood: 1, cloth: 1 } }
   bone_spear: { cost: { wood: 100, teeth: 5 } }
   ```

2. **Water Containers**
   ```javascript
   waterskin: { cost: { leather: 50 }, maximum: 1 }
   cask: { cost: { leather: 100, iron: 20 }, maximum: 1 }
   water_tank: { cost: { iron: 100, steel: 50 }, maximum: 1 }
   ```

3. **Storage Equipment**
   ```javascript
   rucksack: { cost: { leather: 200 }, maximum: 1 }
   wagon: { cost: { wood: 500, iron: 100 }, maximum: 1 }
   convoy: { cost: { wood: 1000, iron: 200, steel: 100 }, maximum: 1 }
   ```

4. **Armour System**
   ```javascript
   armour: {
     'leather armour': {
       cost: { leather: 200, scales: 20 },
       maximum: 1
     },
     'iron armour': {
       cost: { leather: 200, iron: 100 },
       maximum: 1
     },
     'steel armour': {
       cost: { leather: 200, steel: 100 },
       maximum: 1
     }
   }
   ```

5. **Advanced Weapons**
   ```javascript
   weapons: {
     'iron sword': {
       cost: { wood: 200, leather: 50, iron: 20 }
     },
     'steel sword': {
       cost: { wood: 500, leather: 100, steel: 20 }
     },
     'rifle': {
       cost: { wood: 200, steel: 50, sulphur: 50 }
     }
   }
   ```

### Trade Goods System

1. **Basic Resources**
   ```javascript
   trades: {
     scales: { cost: { fur: 150 } },
     teeth: { cost: { fur: 300 } },
     iron: { cost: { fur: 150, scales: 50 } },
     coal: { cost: { fur: 200, teeth: 50 } }
   }
   ```

2. **Advanced Materials**
   ```javascript
   trades: {
     steel: { cost: { fur: 300, scales: 50, teeth: 50 } },
     medicine: { cost: { scales: 50, teeth: 30 } },
     bullets: { cost: { scales: 10 } },
     'energy cell': { cost: { scales: 10, teeth: 10 } }
   }
   ```

3. **Special Items**
   ```javascript
   trades: {
     'alien alloy': { cost: { fur: 1500, scales: 750, teeth: 300 } },
     'compass': { 
       cost: { fur: 400, scales: 20, teeth: 10 },
       maximum: 1
     }
   }
   ```

4. **Weapons**
   ```javascript
   trades: {
     'bolas': { cost: { teeth: 10 } },
     'grenade': { cost: { scales: 100, teeth: 50 } },
     'bayonet': { cost: { scales: 500, teeth: 250 } }
   }
   ```

### Gambling Events

1. **Wood Gambling**
   ```javascript
   mysterious_wanderer: {
     wood: {
       small_bet: {
         cost: 100,
         potential_reward: 300,
         success_rate: 0.5,
         delay: 60 seconds
       },
       large_bet: {
         cost: 500,
         potential_reward: 1500,
         success_rate: 0.3,
         delay: 60 seconds
       }
     }
   }
   ```

2. **Fur Gambling**
   ```javascript
   mysterious_wanderer: {
     fur: {
       small_bet: {
         cost: 100,
         potential_reward: 300,
         success_rate: 0.5,
         delay: 60 seconds
       },
       large_bet: {
         cost: 500,
         potential_reward: 1500,
         success_rate: 0.3,
         delay: 60 seconds
       }
     }
   }
   ```

### Special Events

1. **Shady Builder**
   ```javascript
   shady_builder: {
     requirement: 'huts >= 5 && huts < 20',
     offer: {
       cost: { wood: 300 },
       success_rate: 0.4,
       outcome: {
         success: 'new hut',
         failure: 'lose wood'
       }
     }
   }
   ```

2. **Scout**
   ```javascript
   scout: {
     requirement: 'world map unlocked',
     trades: {
       map: {
         cost: { fur: 200, scales: 10 },
         effect: 'reveals new locations'
       }
     }
   }
   ```

## Temperature Mechanics

### Fire States & Effects
```javascript
states: {
  dead: {
    temp_effect: -20,
    light: 0,
    wood_use: 0
  },
  smoldering: {
    temp_effect: -10,
    light: 1,
    wood_use: 1 per minute
  },
  burning: {
    temp_effect: 0,
    light: 2,
    wood_use: 2 per minute
  },
  roaring: {
    temp_effect: +10,
    light: 3,
    wood_use: 4 per minute
  }
}
```

### Temperature System
- Base room temperature: 10°C
- Temperature update interval: 30 seconds
- Fire cool-down time: 5 minutes
- Stoke cooldown: 10 seconds
- Temperature effects on gameplay:
  - Below 0°C: Health damage
  - 0-10°C: Reduced worker efficiency
  - 10-20°C: Normal operation
  - Above 20°C: Increased worker efficiency

## Resource Generation

### Passive Income
```javascript
income: {
  trap: {
    delay: 90 seconds,
    output: {
      fur: { min: 1, max: 3 },
      meat: { min: 1, max: 3 }
    },
    bait_effect: +50% success rate
  },
  cart: {
    wood_capacity: +50%
  },
  hut: {
    worker_capacity: +1 per hut
  }
}
```

### Building Production
```javascript
production: {
  lodge: {
    fur_bonus: +20%,
    meat_bonus: +20%
  },
  smokehouse: {
    meat_preservation: 50%
  },
  tannery: {
    leather_production: 1 per 5 fur
  },
  steelworks: {
    steel_production: 1 per (1 iron + 1 coal)
  }
} 

## References

The room system implementation can be found in the following source files:

1. **Core Room System**
   - `script/room.js` - Main room implementation
     - Fire mechanics
     - Temperature system
     - Building management
     - Resource tracking
   - `script/room/builder.js` - Builder system
     - Worker management
     - Construction mechanics
     - Work efficiency
     - Population control

2. **Room Features**
   - `script/room/buildings.js` - Building definitions
     - Structure types
     - Building costs
     - Upgrade paths
     - Worker requirements
   - `script/room/crafting.js` - Crafting system
     - Tool creation
     - Resource conversion
     - Equipment crafting
     - Upgrade mechanics

3. **Event Integration**
   - `script/events/room.js` - Room-specific events
     - Trader encounters
     - Resource events
     - Building events
     - Fire events
   - `script/events/encounters.js` - Room encounters
     - Stranger events
     - Builder events
     - Thief encounters
     - Special visitors

4. **System Integration**
   - `script/state_manager.js` - State tracking
     - Resource management
     - Building states
     - Temperature tracking
     - Population counts
   - `script/outside.js` - Outside world integration
     - Resource gathering
     - Worker allocation
     - Location effects
   - `script/world.js` - World integration
     - Global effects
     - Weather impacts
     - Time progression