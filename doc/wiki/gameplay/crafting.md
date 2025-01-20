# Crafting System

The crafting system in A Dark Room is a complex resource management system that handles the creation of buildings, tools, weapons, and upgrades. This document details the mechanics and implementation of the crafting system.

## Core Mechanics

### Item Categories
```javascript
// Core item types
type: 'building'    // Permanent structures that enable new mechanics
type: 'tool'        // Consumable items for exploration and survival
type: 'weapon'      // Combat equipment
type: 'upgrade'     // Permanent improvements to capabilities
type: 'good'        // Trade goods and resources
```

### Crafting Sources
The game features three distinct crafting systems:

1. **Room Crafting**: Basic survival tools and buildings
2. **Workshop Crafting**: Advanced equipment and weapons
3. **Fabricator**: High-tech alien technology

## Building System

### Building Mechanics
- Buildings are permanent structures with maximum limits
- Costs scale with quantity for some buildings
- Requires builder presence and minimum temperature
- Unlocks based on story progression and resource availability

### Building Types
```javascript
// Example building definition
'workshop': {
    name: _('workshop'),
    maximum: 1,
    type: 'building',
    cost: function() {
        return {
            'wood': 800,
            'leather': 100,
            'scales': 10
        };
    }
}
```

## Equipment Crafting

### Equipment Categories

#### Tools
- Consumable items for exploration and survival
- No maximum limit (unless specified)
- Fixed resource costs

```javascript
// Example tool definition
'torch': {
    type: 'tool',
    cost: function() {
        return {
            'wood': 1,
            'cloth': 1
        };
    }
}
```

#### Weapons
- Combat equipment with varying damage values
- Requires workshop for advanced weapons
- Permanent until replaced

```javascript
// Example weapon definition
'iron sword': {
    type: 'weapon',
    cost: function() {
        return {
            'wood': 200,
            'leather': 50,
            'iron': 20
        };
    }
}
```

#### Upgrades
- Permanent improvements to capabilities
- Maximum of 1 per type
- Often requires specific buildings

```javascript
// Example upgrade definition
'waterskin': {
    type: 'upgrade',
    maximum: 1,
    cost: function() {
        return {
            'leather': 50
        };
    }
}
```

## Resource Management

### Cost Calculation
- Dynamic cost calculation based on quantity
- Resource requirements increase with progression
- Some costs scale with existing quantities

```javascript
// Example scaling cost
cost: function() {
    var n = $SM.get('game.buildings["trap"]', true);
    return {
        'wood': 10 + (n * 10)
    };
}
```

### Resource Types
1. **Basic Resources**
   - wood, fur, meat
   - Gathered from expeditions
   - Used in basic crafting

2. **Processed Resources**
   - leather, iron, steel
   - Requires specific buildings
   - Used in advanced crafting

3. **Special Resources**
   - scales, teeth, alien alloy
   - Obtained through combat or trade
   - Used in high-tier crafting

## Crafting Mechanics

### Unlocking Criteria
```javascript
craftUnlocked: function(thing) {
    // Requires builder level 4
    if ($SM.get('game.builder.level') < 4) return false;
    
    // Workshop requirement
    if (needsWorkshop(craftable.type) && 
        $SM.get('game.buildings["workshop"]', true) === 0) 
        return false;
    
    // Resource visibility requirement
    if ($SM.get('stores.wood', true) < cost['wood'] * 0.5) 
        return false;
}
```

### Crafting Process
1. Resource validation
2. Cost deduction
3. Item creation
4. Audio feedback
5. UI update

```javascript
build: function(buildBtn) {
    // Temperature check
    if ($SM.get('game.temperature.value') <= Room.TempEnum.Cold.value) {
        return false;
    }
    
    // Cost validation and deduction
    var cost = craftable.cost();
    for (var k in cost) {
        var have = $SM.get('stores["' + k + '"]', true);
        if (have < cost[k]) {
            return false;
        }
    }
    
    // Item creation
    $SM.add('stores["' + thing + '"]', 1);
    
    // Audio feedback
    AudioEngine.playSound(AudioLibrary.CRAFT);
}
```

## Advanced Crafting

### Fabricator System
- Requires alien alloy
- Blueprint-based crafting
- High-tech equipment and tools

```javascript
// Example fabricator item
'energy blade': {
    type: 'weapon',
    blueprintRequired: true,
    cost: () => ({
        'alien alloy': 1
    })
}
```

### Blueprint System
- Unlocks advanced fabricator recipes
- Found during exploration
- Permanent unlocks

## Technical Implementation

### State Management
- Tracks crafted items in stores
- Manages building counts
- Handles resource quantities

### Event Integration
- Crafting triggers state updates
- Updates UI elements
- Manages audio feedback

### Performance Considerations
- Dynamic button creation
- Tooltip updates
- Cost calculation caching

## References

### Core Implementation
- `script/room.js`: Core crafting implementation including:
  - Building system
  - Basic crafting mechanics
  - Resource management
  - Crafting validation

### Crafting Systems
- `script/fabricator.js`: Advanced crafting system including:
  - Blueprint mechanics
  - High-tech item crafting
  - Alien technology

### Resource Management
- `script/path.js`: Equipment and inventory management
- `script/world.js`: Resource gathering and trading
- `script/prestige.js`: Resource categorization and persistence

### UI Integration
- `script/button.js`: Crafting button implementation
- `script/notifications.js`: Crafting feedback system
