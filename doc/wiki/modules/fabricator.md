# Fabricator Module

The Fabricator module in A Dark Room represents advanced crafting technology, allowing players to create high-tech items using alien alloys. This module becomes available in the late game and provides access to powerful weapons, tools, and upgrades.

## Core Mechanics

### Initialization
```javascript
// Initialize fabricator location
Fabricator.init();  // Sets up UI and state

// Check fabricator access
$SM.get('features.location.fabricator')  // Returns true if unlocked
```

### Craftable Items

#### Weapons
```javascript
// Basic weapons
'energy blade': {
    type: 'weapon',
    cost: { 'alien alloy': 1 }
}

// Advanced weapons (blueprint required)
'plasma rifle': {
    type: 'weapon',
    blueprintRequired: true,
    cost: { 'alien alloy': 1 }
}
```

#### Tools
```javascript
'hypo': {
    type: 'tool',
    blueprintRequired: true,
    quantity: 5,
    cost: { 'alien alloy': 1 }
}

'glowstone': {
    type: 'tool',
    blueprintRequired: true,
    cost: { 'alien alloy': 1 }
}
```

#### Upgrades
```javascript
'fluid recycler': {
    type: 'upgrade',
    maximum: 1,
    cost: { 'alien alloy': 2 }
}

'cargo drone': {
    type: 'upgrade',
    maximum: 1,
    cost: { 'alien alloy': 2 }
}
```

### Blueprint System
- Some items require blueprints to craft
- Blueprints are discovered through exploration
- Blueprint status persists in character state
- Visual feedback for available blueprints

## Technical Implementation

### State Management
```javascript
// Check blueprint availability
Fabricator.canFabricate(itemKey);

// Track fabricator discovery
$SM.set('game.fabricator.seen', true);

// Manage blueprints
$SM.get('character.blueprints[itemKey]');
```

### UI Components
- Fabrication button panel
- Blueprint display section
- Cost tooltips
- Build notifications
- Audio feedback

### Resource Management
- Tracks alien alloy consumption
- Validates resource availability
- Updates store quantities
- Handles maximum item limits

## Integration Points

### Engine Integration
- Location system integration
- State management hooks
- Audio system triggers
- Notification system

### Ship Module Integration
- Shares panel space with ship
- Coordinated UI updates
- State synchronization
- Resource sharing

### Audio Integration
- Craft sound effects
- Background music
- Notification sounds
- State change audio

## Technical Features

### Performance Optimization
- Efficient button updates
- Smart state tracking
- Minimal DOM operations
- Resource validation

### Error Handling
- Resource validation
- Blueprint checks
- Maximum limit enforcement
- State consistency checks

## References

### Core Implementation
- `script/fabricator.js`: Fabricator module
  - Item definitions
  - Crafting logic
  - UI management
  - State handling

### Integration Files
- `script/ship.js`: Ship integration
  - Panel management
  - State coordination
- `script/engine.js`: Game engine
  - Location system
  - State management
- `script/audio.js`: Audio system
  - Sound effects
  - Background music 