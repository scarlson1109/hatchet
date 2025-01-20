# Notification System

The Notification system in A Dark Room provides a flexible interface for displaying messages to the player, managing message queues per module, and handling visual feedback with smooth animations.

## Core Mechanics

### Initialization
```javascript
Notifications.init({
    // Optional configuration object
    // Currently supports extension for future options
});
```

### Message Display
```javascript
// Display a message for the current module
Notifications.notify(null, "Message text");

// Queue a message for another module
Notifications.notify("outside", "Message for outside module");

// Force immediate display regardless of active module
Notifications.notify("outside", "Immediate message", true);
```

### Message Queue
- Messages are queued per module
- Queued messages display when their module becomes active
- Messages can bypass the queue with the `noQueue` parameter
- Messages are automatically appended with a period if missing
- Empty or undefined messages are ignored

### Visual Feedback
- Messages fade in with a 500ms animation
- Messages stack from top to bottom
- Gradient overlay for visual polish
- Hidden messages are automatically cleaned up
- Messages maintain opacity transitions

## Technical Implementation

### Message Management
```javascript
// Print a message immediately
Notifications.printMessage("Message text");

// Print all queued messages for a module
Notifications.printQueue("moduleName");

// Clear hidden messages for memory optimization
Notifications.clearHidden();
```

### Memory Management
- Hidden messages are automatically removed
- Cleanup triggered on new message addition
- Uses position tracking for efficient cleanup
- Prevents memory leaks from large message backlogs

### DOM Structure
```html
<div id="notifications" class="notifications">
    <div id="notifyGradient"></div>
    <div class="notification">Message text</div>
    <!-- Additional messages stack here -->
</div>
```

### State Integration
- Game state is saved after each notification
- Queue state persists between game sessions
- Module-specific message queues
- Active module tracking

## Integration Points

### Engine Integration
- Checks active module state via `Engine.activeModule`
- Triggers `Engine.saveGame()` after notifications
- Integrates with module switching system

### UI Integration
- jQuery-based DOM manipulation
- CSS animations for smooth transitions
- Gradient overlay for visual polish
- Automatic message formatting
- Position-based cleanup system

### Module Integration
- Module-specific message queues
- Queue processing on module activation
- Support for immediate message display
- Module state awareness

## Technical Features

### Performance Optimization
- Efficient message cleanup
- Position-based visibility detection
- Immediate cleanup on new messages
- Memory usage optimization
- Queue-based message management

### Error Handling
- Handles undefined messages
- Validates message text
- Manages missing periods
- Handles module state changes
- Protects against null modules

## References

### Core Implementation
- `script/notifications.js`: Notification system implementation
  - Message management
  - Queue system
  - Visual feedback
  - Memory optimization
  - Module integration

### Integration Files
- `script/engine.js`: Engine integration
  - Module state tracking
  - Save system integration
  - State persistence
- `script/events.js`: Event system integration
  - Event notifications
  - Module transitions
  - Queue management 