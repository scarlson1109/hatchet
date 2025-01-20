# Resource System

The resource system in A Dark Room is a sophisticated economy management system that handles gathering, production, trading, and consumption of various resources. This document details the mechanics and implementation of the resource system.

## Core Mechanics

### Resource Categories

```javascript
// Core resource types
type: 'g'     // Basic gatherable resources (wood, fur, meat, etc.)
type: 'w'     // Weapons and combat equipment
type: 'a'     // Ammunition and consumables
```

### Resource Storage
- All resources are stored in the `stores` category of the state manager
- Maximum storage limit: `MAX_STORE = 99999999999999`
- Resources cannot be negative (enforced by state manager)
- Resources are displayed in the stores panel with categories:
  - Resources (basic materials)
  - Special (rare/advanced materials)
  - Weapons (combat equipment)

## Resource Types

### Basic Resources
- **Wood**: Gathered from forest, used in building and crafting
- **Fur**: Obtained from hunting, used for clothing and trading
- **Meat**: Obtained from hunting, used for food and trading
- **Leather**: Processed from fur at the tannery
- **Iron**: Mined from iron mine, used in advanced crafting
- **Coal**: Mined from coal mine, used in steel production
- **Steel**: Produced at steelworks from iron and coal
- **Sulphur**: Mined from sulphur mine, used in ammunition

### Special Resources
- **Scales**: Obtained through trading or combat
- **Teeth**: Obtained through combat
- **Cloth**: Found or traded
- **Alien Alloy**: Advanced material for fabrication

### Consumables
- **Bait**: Crafted for traps
- **Cured Meat**: Processed at smokehouse
- **Medicine**: Found or traded
- **Bullets**: Crafted at armoury
- **Energy Cell**: Advanced power source

## Resource Generation

### Worker Production
```javascript
_INCOME: {
    'gatherer': {
        delay: 10,
        stores: { 'wood': 1 }
    },
    'hunter': {
        delay: 10,
        stores: { 'fur': 0.5, 'meat': 0.5 }
    },
    'trapper': {
        delay: 10,
        stores: { 'meat': -1, 'bait': 1 }
    },
    'tanner': {
        delay: 10,
        stores: { 'fur': -5, 'leather': 1 }
    },
    'charcutier': {
        delay: 10,
        stores: { 'meat': -5, 'wood': -5, 'cured meat': 1 }
    },
    'iron miner': {
        delay: 10,
        stores: { 'cured meat': -1, 'iron': 1 }
    },
    'coal miner': {
        delay: 10,
        stores: { 'cured meat': -1, 'coal': 1 }
    },
    'sulphur miner': {
        delay: 10,
        stores: { 'cured meat': -1, 'sulphur': 1 }
    },
    'steelworker': {
        delay: 10,
        stores: { 'iron': -1, 'coal': -1, 'steel': 1 }
    },
    'armourer': {
        delay: 10,
        stores: { 'steel': -1, 'sulphur': -1, 'bullets': 1 }
    }
}
```

### Building-Worker Relationships
```javascript
jobMap: {
    'lodge': ['hunter', 'trapper'],
    'tannery': ['tanner'],
    'smokehouse': ['charcutier'],
    'iron mine': ['iron miner'],
    'coal mine': ['coal miner'],
    'sulphur mine': ['sulphur miner'],
    'steelworks': ['steelworker'],
    'armoury': ['armourer']
}
```

### Population Effects
- Population increases affect worker availability
- Population growth rates:
  - 1 person: "a stranger arrives in the night"
  - 2-4 people: "a weathered family takes up in one of the huts"
  - 5-9 people: "a small group arrives, all dust and bones"
  - 10-29 people: "a convoy lurches in, equal parts worry and hope"
  - 30+ people: "the town's booming. word does get around"
- Population loss affects worker assignments
- Maximum population determined by housing (huts)

### Building Production
- **Trap**: Generates fur and meat periodically
- **Tannery**: Converts fur to leather
- **Smokehouse**: Converts meat to cured meat
- **Steelworks**: Produces steel from iron and coal
- **Armoury**: Crafts bullets from steel and sulphur

### Resource Collection
```javascript
// Manual gathering example
gatherWood: function() {
    var gatherAmt = $SM.get('game.buildings["cart"]', true) > 0 ? 50 : 10;
    $SM.add('stores.wood', gatherAmt);
}
```

## Trading System

### Trade Goods
```javascript
TradeGoods: {
    'scales': {
        type: 'good',
        cost: function() {
            return { fur: 150 };
        }
    }
}
```

### Trading Mechanics
- Trading post enables bartering
- Costs scale with quantity
- Some trades only available with specific buildings
- Special items have limited availability

## Resource Management

### Income System
```javascript
// Income tracking example
setIncome: function(source, options) {
    $SM.set('income["'+source+'"]', {
        delay: options.delay,
        stores: options.stores
    });
}
```
- Each source has a specific delay and store rates
- Income collected automatically
- Visual feedback through tooltips
- Automatic updates when quantities change

### Storage Management
- Resources displayed in categories (resources, special, weapons)
- Automatic updates when quantities change
- Tooltips show income sources and rates
- Visual feedback for resource changes

### Capacity System
```javascript
// Storage capacity upgrades
getCapacity: function() {
    if($SM.get('stores["cargo drone"]', true) > 0) {
        return DEFAULT_BAG_SPACE + 100;
    } else if($SM.get('stores.convoy', true) > 0) {
        return DEFAULT_BAG_SPACE + 60;
    }
    return DEFAULT_BAG_SPACE;
}
```

### Weight System
```javascript
// Resource weights affect carrying capacity
Weight: {
    'bone spear': 2,
    'iron sword': 3,
    'steel sword': 5,
    'rifle': 5,
    'bullets': 0.1,
    'energy cell': 0.2,
    'bolas': 0.5
}
```
- Each resource has a specific weight
- Default weight is 1 for unlisted items
- Affects inventory space in exploration
- Capacity can be increased with upgrades (cargo drone: +100, convoy: +60)

### Resource Loss
- **Thieves**:
  - Can steal resources periodically
  - Default: -10 wood, -5 fur, -5 meat every 10 ticks
  - Only steals what's available
- **Death/Combat**: Resources can be lost in failed encounters
- **Events**: Some events can result in resource loss
- **Crafting**: Failed crafting attempts consume resources

### Prestige System
```javascript
// Resource scaling in prestige system
randGen: function(storeType) {
    case 'g':  // Basic resources (wood, fur, etc.)
        amount = Math.floor(Math.random() * 10);
    case 'w':  // Weapons
        amount = Math.floor(Math.floor(Math.random() * 10) / 2);
    case 'a':  // Ammunition
        amount = Math.ceil(Math.random() * 10 * Math.ceil(Math.random() * 10));
}
```
- Resources carry over between games
- Different scaling for different resource types
- Affects resource availability in new games
- Stored in 'previous.stores' state

## Resource Discovery

### Landmarks
```javascript
// Example landmark resource drops
'battlefield': {
    loot: {
        'rifle': { min: 1, max: 3, chance: 0.5 },
        'bullets': { min: 5, max: 20, chance: 0.8 },
        'laser rifle': { min: 1, max: 3, chance: 0.3 },
        'energy cell': { min: 5, max: 10, chance: 0.5 },
        'alien alloy': { min: 1, max: 1, chance: 0.3 }
    }
}
```

- **Cities**: Contain various resources and special items
- **Battlefield**: Military equipment and advanced technology
- **Borehole**: Rare alien alloy deposits
- **Abandoned Houses**: Basic supplies and occasional medicine
- **Destroyed Villages**: Previous game resources (prestige mechanic)

### Resource Chance
- Each resource has specific drop parameters:
  - `min`: Minimum quantity
  - `max`: Maximum quantity
  - `chance`: Probability (0.0 to 1.0)
- Special resources (alien alloy, energy cells) have lower chances
- Basic resources (cloth, leather) have higher chances
- Combat encounters often provide additional resources

## Technical Implementation

### State Management
- Resources stored in `stores` category
- Income tracking in `income` category
- Automatic collection system for worker production
- Event system for resource updates

### Event Integration
```javascript
// Resource collection events
collectIncome: function() {
    for(var source in $SM.get('income')) {
        var income = $SM.get('income["'+source+'"]');
        if(income.timeLeft <= 0) {
            $SM.addM('stores', income.stores);
            income.timeLeft = income.delay;
        }
    }
}
```

### UI Updates
- Automatic store view updates
- Income tooltips for resources
- Notifications for resource events
- Audio feedback for gathering/crafting

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

### Trap System
```javascript
TrapDrops: [
    { rollUnder: 0.5, name: 'fur', message: 'scraps of fur' },
    { rollUnder: 0.75, name: 'meat', message: 'bits of meat' },
    { rollUnder: 0.85, name: 'scales', message: 'strange scales' },
    { rollUnder: 0.93, name: 'teeth', message: 'scattered teeth' },
    { rollUnder: 0.995, name: 'cloth', message: 'tattered cloth' },
    { rollUnder: 1.0, name: 'charm', message: 'a crudely made charm' }
]
```
- Trap checking cooldown: 90 seconds (`_TRAPS_DELAY: 90`)
- Requires bait to function
- Each trap can hold one bait
- Traps without bait are displayed separately from baited traps

### Income Calculation
```javascript
updateVillageIncome: function() {
    for(var worker in Outside._INCOME) {
        var income = Outside._INCOME[worker];
        var num = worker == 'gatherer' ? Outside.getNumGatherers() : $SM.get('game.workers["'+worker+'"]');
        if(typeof num == 'number') {
            var stores = {};
            if(num < 0) num = 0;
            for(var store in income.stores) {
                stores[store] = income.stores[store] * num;
            }
            $SM.setIncome(worker, {
                delay: income.delay,
                stores: stores
            });
        }
    }
}
```

### Resource Updates
```javascript
collectIncome: function() {
    for(var source in $SM.get('income')) {
        var income = $SM.get('income["'+source+'"]');
        if(income.timeLeft <= 0) {
            $SM.addM('stores', income.stores);
            income.timeLeft = income.delay;
        }
    }
}
```

## References

### Core Implementation
- `script/state_manager.js`: Core resource storage and validation
  - State categories and validation
  - Maximum storage limits
  - Resource updates and events

### Resource Systems
- `script/room.js`: Basic resource management
  - Building costs and production
  - Trade goods definitions
  - Resource UI management

### Production Systems
- `script/outside.js`: Resource generation
  - Worker production rates
  - Gathering mechanics
  - Income calculation

### Advanced Systems
- `script/path.js`: Resource transportation
  - Capacity management
  - Weight system
  - Resource collection

### Trading Systems
- `script/events/room.js`: Trading mechanics
  - Trade good definitions
  - Cost calculations
  - Availability rules