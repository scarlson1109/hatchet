# Outside Module

## Overview
The Outside module is a core gameplay system that manages resource gathering, worker allocation, village development, and exploration mechanics. It serves as the primary interface for players to interact with the world beyond their initial room, enabling resource collection, worker management, and village expansion.

## Core Mechanics

### Time Constants
```javascript
_GATHER_DELAY: 60,     // Delay between wood gathering (seconds)
_TRAPS_DELAY: 90,      // Delay between checking traps (seconds)
_POP_DELAY: [0.5, 3],  // Population growth delay range (minutes)
_HUT_ROOM: 4           // Number of villagers per hut
```

### Worker System
#### Worker Types and Production
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

#### Building-Worker Relationships
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

### Population Management
- Population growth occurs automatically based on available housing
- Growth messages vary based on group size:
  ```javascript
  1 person: "a stranger arrives in the night"
  2-4 people: "a weathered family takes up in one of the huts"
  5-9 people: "a small group arrives, all dust and bones"
  10-29 people: "a convoy lurches in, equal parts worry and hope"
  30+ people: "the town's booming. word does get around"
  ```
- Maximum population determined by number of huts (4 people per hut)
- Population can be reduced through events or combat
- Growth interval: Random between 0.5 and 3 minutes (`_POP_DELAY: [0.5, 3]`)
- Growth amount: Random between 50-100% of available space

### Resource Generation
#### Manual Gathering
- Wood gathering available from start
- Base gathering amount: 10 wood
- With cart upgrade: 50 wood per gather
- Gathering cooldown: 60 seconds (`_GATHER_DELAY: 60`)

#### Trap System
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

### State Management
- Tracks buildings, population, and worker assignments
- Manages resource income from workers
- Handles population growth and housing limits
- Updates UI elements based on state changes

## Technical Implementation

### Initialization
```javascript
init: function(options) {
    // Create the outside tab
    this.tab = Header.addLocation("A Silent Forest", "outside", Outside);
    
    // Create the Outside panel
    this.panel = $('<div>').attr('id', "outsidePanel")
        .addClass('location')
        .appendTo('div#locationSlider');
    
    // Subscribe to state updates
    $.Dispatch('stateUpdate').subscribe(Outside.handleStateUpdates);
    
    // Initialize state if needed
    if(typeof $SM.get('features.location.outside') == 'undefined') {
        $SM.set('features.location.outside', true);
        if(!$SM.get('game.buildings')) $SM.set('game.buildings', {});
        if(!$SM.get('game.population')) $SM.set('game.population', 0);
        if(!$SM.get('game.workers')) $SM.set('game.workers', {});
    }
}
```

### Village Management

#### Population Growth
- Growth occurs automatically when housing is available
- Growth interval: Random between 0.5 and 3 minutes (`_POP_DELAY: [0.5, 3]`)
- Growth amount: Random between 50-100% of available space
- Maximum population = Number of huts × 4 villagers per hut (`_HUT_ROOM: 4`)

#### Population Messages
```javascript
1 person: "a stranger arrives in the night"
2-4 people: "a weathered family takes up in one of the huts"
5-9 people: "a small group arrives, all dust and bones"
10-29 people: "a convoy lurches in, equal parts worry and hope"
30+ people: "the town's booming. word does get around"
```

### Resource Collection

#### Manual Gathering
- Base wood gathering: 10 wood
- With cart upgrade: 50 wood per gather
- Gathering cooldown: 60 seconds (`_GATHER_DELAY: 60`)

#### Trap System
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

### Worker Management
```javascript
increaseWorker: function(btn) {
    var worker = $(this).closest('.workerRow').attr('key');
    if(Outside.getNumGatherers() > 0) {
        var increaseAmt = Math.min(Outside.getNumGatherers(), btn.data);
        $SM.add('game.workers["'+worker+'"]', increaseAmt);
    }
}

decreaseWorker: function(btn) {
    var worker = $(this).closest('.workerRow').attr('key');
    if($SM.get('game.workers["'+worker+'"]') > 0) {
        var decreaseAmt = Math.min($SM.get('game.workers["'+worker+'"]') || 0, btn.data);
        $SM.add('game.workers["'+worker+'"]', decreaseAmt * -1);
    }
}
```

### Income System
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

### State Management

#### Core States
- `game.population`: Total village population
- `game.buildings`: Building counts
- `game.workers`: Worker assignments
- `income`: Resource production rates and timers

#### State Updates
```javascript
handleStateUpdates: function(e){
    if(e.category == 'stores'){
        Outside.updateVillage();
    } else if(e.stateName.indexOf('game.workers') === 0 || e.stateName.indexOf('game.population') === 0){
        Outside.updateVillage();
        Outside.updateWorkersView();
        Outside.updateVillageIncome();
    }
}
```

#### UI Updates
- Village panel shows current population and building counts
- Worker panel displays current assignments and production rates
- Tooltips show resource generation/consumption for each worker
- Building counts update automatically with state changes
- Worker assignments can be adjusted in increments of 1 or 10

## Integration Points

### Engine Integration
- Initialized after Room module when wood is available
- Subscribes to state updates for coordinated changes
- Manages UI updates through the slider system

### State Manager Integration
- Stores persistent data about buildings and population
- Tracks worker assignments and resource generation
- Manages income calculations and resource updates

### Audio Integration
- Plays sounds for gathering wood
- Handles trap checking sound effects
- Provides audio feedback for events

### Event System
- Handles random events like trap destruction
- Manages worker assignment changes
- Processes resource gathering results
- Triggers notifications for important changes

## References

### Core Implementation
- `script/outside.js` - Main outside module implementation
  - Worker management system (`_INCOME`, `jobMap`)
  - Population mechanics (`_POP_DELAY`, `_HUT_ROOM`)
  - Resource gathering (`_GATHER_DELAY`, `_TRAPS_DELAY`)
  - Trap system (`TrapDrops`)
  - Village management (`updateVillage`, `updateVillageIncome`)
  - Worker UI (`makeWorkerRow`, `updateWorkersView`)
  - State handling (`handleStateUpdates`)

### Events System
- `script/events/outside.js` - Outside-specific events
  - Random encounters
  - Trap events
  - Resource discovery
  - Population events
  - Combat encounters

### Integration Files
- `script/engine.js` - Engine integration
  - Module initialization
  - State coordination
  - UI management
  - Event scheduling
- `script/state_manager.js` - State management
  - Resource tracking
  - Worker assignments
  - Building counts
  - Income collection
  - Population tracking
- `script/world.js` - World integration
  - Location definitions
  - Resource availability
  - Landmark placement
  - Map generation

### UI Components
- `css/outside.css` - Outside interface styling
  - Village panel layout (`div#village`)
  - Worker UI components (`div#workers`, `.workerRow`)
  - Resource indicators (`.storeRow`)
  - Population display (`div#population`)
  - Tooltips (`.tooltip`)
  - Button states (`.disabled`)