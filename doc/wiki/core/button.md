# Button System

The Button system in A Dark Room provides a flexible and reusable interface for creating interactive buttons with cooldown mechanics, tooltips, and state management.

## Core Mechanics

### Button Creation
```javascript
Button.Button({
    id: 'uniqueId',           // Optional: Auto-generated if not provided as "BTN_[guid]"
    text: 'Button Text',      // Optional: Defaults to "button" if not provided
    cooldown: 5,             // Optional: Cooldown duration in seconds
    click: function() {},    // Optional: Defaults to logging click to Engine
    cost: {                  // Optional: Resource costs
        'wood': 1,
        'fur': 2
    },
    ttPos: 'bottom right',   // Optional: Defaults to "bottom right"
    width: '100px',          // Optional: Custom width
    boosted: () => false     // Optional: Function to check if cooldown should be halved
})
```

### Cooldown System
- Buttons can have cooldown periods after activation
- Cooldowns are saved to game state for persistence (controlled by `Button.saveCooldown`)
- Visual feedback shows remaining cooldown time with animated progress bar
- Cooldowns can be boosted (halved) based on game conditions
- Supports both manual and state-based cooldown initialization
- Updates every 500ms for performance optimization

### State Management
- Button states (enabled/disabled) are managed independently
- Cooldown states are saved in the format: `cooldown.buttonId`
- Supports interval-based countdown updates (0.5 second intervals)
- Handles state cleanup on cooldown completion
- Persists cooldown progress between game sessions

### Tooltip System
- Resource costs can be displayed in tooltips
- Configurable tooltip positioning (defaults to "bottom right")
- Automatic tooltip generation based on cost object
- Supports translation of resource names using localization system

## Technical Implementation

### Cooldown Management
```javascript
// Start a cooldown
Button.cooldown(buttonElement, option);  // option can be 'state' or a number

// Clear a cooldown
Button.clearCooldown(buttonElement, cooldownEnded);

// Check if button is disabled
Button.isDisabled(buttonElement);

// Set button disabled state
Button.setDisabled(buttonElement, disabled);

// Global cooldown save toggle
Button.saveCooldown = true;  // Can be set to false to disable cooldown persistence
```

### State Integration
- Cooldown states are saved using State Manager
- Supports double-time game option for accelerated cooldowns
- Handles state cleanup on cooldown completion
- Persists cooldown state between game sessions
- Uses efficient 500ms update intervals for state tracking

### Visual Feedback
- Animated cooldown bar shows remaining time
  - Uses percentage-based width animation
  - Linear animation timing
  - Smooth animation cancellation on clear
- Disabled state styling during cooldown
- Resource cost tooltips with translations
- Customizable button width and text

### Error Handling
- Validates cooldown values as numbers
- Provides default click handler that logs to Engine
- Gracefully handles missing or invalid options
- Prevents click handling when disabled
- Safely manages interval cleanup

## Integration Points

### Engine Integration
- Uses Engine.getGuid() for unique button IDs
- Supports Engine.options.doubleTime for cooldown scaling
- Integrates with Engine.setInterval for countdown updates
- Uses Engine.log for default click handling

### State Manager Integration
- Saves cooldown state using $SM.set()
- Retrieves cooldown state using $SM.get()
- Removes cooldown state using $SM.remove()
- Supports efficient state updates with minimal writes

### UI Integration
- jQuery-based DOM manipulation
- CSS classes for visual states (`button`, `disabled`)
- Tooltip positioning system
- Event handling for click interactions
- Data attributes for state tracking:
  - `data-handler`: Click handler function
  - `data-remaining`: Cooldown time remaining
  - `data-cooldown`: Total cooldown duration
  - `data-boosted`: Boost state function
  - `data-onCooldown`: Current cooldown state

## References

### Core Implementation
- `script/Button.js`: Button system implementation
  - Button creation and management
  - Cooldown system
  - State persistence
  - Visual feedback
  - Performance optimization

### Integration Files
- `script/engine.js`: Engine integration
  - GUID generation
  - Interval management
  - Double-time handling
  - Logging system
- `script/state_manager.js`: State management
  - Cooldown state persistence
  - State updates and cleanup
  - Efficient state tracking
- `script/localization.js`: Translation support
  - Resource name translations
  - Tooltip text localization 