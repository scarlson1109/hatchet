# Path Module

## Overview

The Path module manages exploration mechanics, inventory management, and equipment loadout for ventures outside the village. It serves as the preparation interface before embarking on expeditions into the world, handling resource management, equipment selection, and capacity calculations.

## Core Mechanics

### Inventory System

#### Base Configuration
```javascript
DEFAULT_BAG_SPACE: 10,  // Base inventory capacity
Weight: {
    'bone spear': 2,
    'iron sword': 3,
    'steel sword': 5,
    'rifle': 5,
    'bullets': 0.1,
    'energy cell': 0.2,
    'laser rifle': 5,
    'plasma rifle': 5,
    'bolas': 0.5
}
```

#### Capacity Upgrades
- Base capacity: 10 units
- Rucksack: +10 capacity (Cost: 200 leather)
- Wagon: +30 capacity (Cost: 500 wood, 100 iron)
- Convoy: +60 capacity (Cost: 1000 wood, 200 iron, 100 steel)
- Cargo Drone: +100 capacity

### Equipment System

#### Armor Types
- None (default)
- Leather Armor (Cost: 200 leather, 20 scales)
- Iron Armor (Cost: 200 leather, 100 iron)
- Steel Armor
- Kinetic Armor

#### Weapons
```javascript
// Example weapon definition
{
    verb: 'punch',     // Attack description
    type: 'unarmed',   // Weapon category
    damage: 1,         // Base damage
    cooldown: 2        // Attack delay
}
```

### Resource Management

#### Water System
- Base water capacity: 10 units
- Water consumption during travel (1 per MOVES_PER_WATER moves)
- Upgrades:
  - Waterskin: +10 capacity
  - Cask: +20 capacity
  - Water Tank: +50 capacity
  - Fluid Recycler: +100 capacity

#### Supply Management
- Weight-based inventory system (default weight: 1 for unlisted items)
- Resource allocation before departure
- Essential supplies:
  - Cured meat (required for embark)
  - Water (consumed during travel)
  - Ammunition (bullets, energy cells)
  - Medicine and healing items
- Equipment loadout selection

### Perk System
```javascript
// Perks affecting path mechanics
'slow metabolism': {
    name: 'slow metabolism',
    desc: 'go twice as far without eating'
},
'desert rat': {
    name: 'desert rat',
    desc: 'go twice as far without drinking'
},
'stealthy': {
    name: 'stealthy',
    desc: 'better chance to avoid fights'
}
```

## Technical Implementation

### Initialization
```javascript
init: function(options) {
    // Create the path tab
    this.tab = Header.addLocation("A Dusty Path", "path", Path);
    
    // Create the Path panel
    this.panel = $('<div>').attr('id', "pathPanel")
        .addClass('location')
        .appendTo('div#locationSlider');
    
    // Add the outfitting area
    var outfitting = $('<div>').attr({
        'id': 'outfitting', 
        'data-legend': 'supplies:'
    }).appendTo(this.scroller);
    
    // Subscribe to state updates
    $.Dispatch('stateUpdate').subscribe(Path.handleStateUpdates);
}
```

### Core Functions

#### Weight Calculation
```javascript
getWeight: function(thing) {
    var w = Path.Weight[thing];
    if(typeof w != 'number') w = 1;
    return w;
}
```

#### Capacity Management
```javascript
getCapacity: function() {
    if($SM.get('stores["cargo drone"]', true) > 0) {
        return Path.DEFAULT_BAG_SPACE + 100;
    } else if($SM.get('stores.convoy', true) > 0) {
        return Path.DEFAULT_BAG_SPACE + 60;
    } else if($SM.get('stores.wagon', true) > 0) {
        return Path.DEFAULT_BAG_SPACE + 30;
    } else if($SM.get('stores.rucksack', true) > 0) {
        return Path.DEFAULT_BAG_SPACE + 10;
    }
    return Path.DEFAULT_BAG_SPACE;
}
```

### UI Management

#### Outfitting Interface
- Equipment selection panel
- Weight and capacity display
- Supply allocation controls with increment/decrement buttons
- Embark button with cooldown (World.DEATH_COOLDOWN)
- Dynamic updates based on available space

#### Perks Display
- Shows acquired character perks
- Provides tooltips with perk effects
- Updates dynamically with state changes
- Affects UI positioning of stores container

### Blueprint System
```javascript
// Blueprint redemption
redeemBlueprints: () => {
    let redeemed = false;
    const redeem = (blueprint, item) => {
        if (Path.outfit[blueprint]) {
            $SM.set(`character.blueprints['${item}']`, true);
            delete Path.outfit[blueprint];
            redeemed = true;
        }
    };
}
```

## Integration Points

### Engine Integration
- Initialized when compass is acquired
- Manages UI transitions and updates
- Handles state persistence
- Controls audio feedback for actions

### State Manager Integration
- Tracks equipment loadout
- Manages inventory state
- Handles perk system
- Processes income updates

### World Integration
- Provides interface for world exploration
- Manages resource consumption
- Handles combat preparation
- Processes movement costs

## References

### Core Implementation
- `script/path.js` - Main path module implementation
  - Inventory management
  - Equipment system
  - Weight calculations
  - Capacity management
  - Blueprint system

### Integration Files
- `script/engine.js` - Engine integration
  - Module initialization
  - UI transitions
  - State coordination
  - Perk definitions
- `script/world.js` - World integration
  - Combat system
  - Resource consumption
  - Movement mechanics
  - Water management
- `script/state_manager.js` - State management
  - Resource tracking
  - Worker assignments
  - Income collection
  - Perk management

### UI Components
- `css/path.css` - Path interface styling
  - Outfitting panel layout
  - Equipment selection
  - Resource indicators
  - Perk display
