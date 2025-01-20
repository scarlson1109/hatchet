# UI System

The UI system provides a comprehensive framework for managing user interactions, notifications, buttons, and visual elements throughout the game. This documentation covers the technical implementation and usage of the UI components.

## Architecture Overview

The UI system consists of several key components:
- Button System
- Notification System
- Menu System
- Event Panels
- Location Sliders
- Tooltips

### Core Components

#### 1. Button System
The `Button` module provides a flexible button implementation with:
- Cooldown mechanics
- Cost tooltips
- Disabled states
- Click handlers
- Custom styling

```javascript
button_config: {
  default_width: '100px',
  event_width: '122px',
  outside_width: '115px',
  cooldown_display: true,
  tooltip_position: 'bottom right'
}
```

#### 2. Notification System
The `Notifications` module manages game messages with:
- Message queuing
- Fade effects
- Module-specific notifications
- Auto-cleanup

```javascript
notification_config: {
  fade_duration: 500,
  cleanup_interval: 'auto',
  max_messages: 'unlimited',
  gradient_effect: true
}
```

## UI Components

### 1. Button Implementation
```javascript
button: {
  properties: {
    id: 'string',
    text: 'string',
    cooldown: 'number',
    cost: {
      resource: 'amount'
    },
    width: 'string',
    click: 'function'
  },
  states: {
    enabled: 'default',
    disabled: 'no interaction',
    cooldown: 'temporary disable'
  }
}
```

### 2. Notification Display
```javascript
notification: {
  structure: {
    module: 'source module',
    text: 'message text',
    queue: 'boolean'
  },
  styling: {
    position: 'top left',
    width: '200px',
    max_height: '700px'
  }
}
```

### 3. Event Panels
```javascript
event_panel: {
  position: {
    left: '250px',
    top: '90px',
    width: '335px'
  },
  components: {
    title: 'header text',
    text: 'event description',
    buttons: 'action buttons',
    notifications: 'event messages'
  }
}
```

## UI Mechanics

### Button Management
```javascript
button_mechanics: {
  cooldown: {
    display: 'progress bar',
    persistence: 'state manager',
    double_time: 'option based'
  },
  tooltips: {
    cost: 'resource requirements',
    position: 'configurable',
    hover: 'auto display'
  },
  states: {
    disabled: {
      visual: 'grey out',
      interaction: 'blocked'
    },
    cooldown: {
      visual: 'progress bar',
      interaction: 'blocked'
    }
  }
}
```

### Notification Management
```javascript
notification_mechanics: {
  queue: {
    module_specific: true,
    order: 'first in, first out',
    persistence: false
  },
  display: {
    fade_in: true,
    gradient: 'bottom fade',
    cleanup: 'automatic'
  },
  memory: {
    cleanup_threshold: 'viewport',
    max_stored: 'dynamic'
  }
}
```

## Integration Points

### 1. State Manager
- Button states
- Cooldown tracking
- Resource validation
- UI persistence

### 2. Events System
- Event panels
- Scene transitions
- Button creation
- Notification triggers

### 3. Module Systems
- Room interface
- Outside interface
- Combat interface
- Trading interface

## Technical Features

### 1. Layout Management
- Responsive design
- Dynamic positioning
- Overflow handling
- Mobile compatibility

### 2. State Persistence
- Button cooldowns
- UI preferences
- Panel positions
- Notification states

### 3. Performance
- DOM optimization
- Event delegation
- Memory management
- Animation efficiency

## Usage Examples

### Button Creation
```javascript
new Button.Button({
  id: 'action_button',
  text: 'Perform Action',
  cooldown: 5,
  cost: { 'resource': 10 },
  click: handleClick
})
```

### Notification Display
```javascript
Notifications.notify(
  'module_name',
  'Notification message',
  false  // Don't queue
)
```

## Technical Considerations

### 1. Browser Compatibility
- CSS3 features
- Animation support
- Touch events
- Mobile browsers

### 2. Performance
- DOM updates
- Animation frames
- Event handling
- Memory usage

### 3. Accessibility
- Keyboard navigation
- Screen readers
- Color contrast
- Focus management

## Extending the System

### Custom Buttons
1. Define button properties
2. Set click handlers
3. Configure appearance
4. Add tooltips

### Custom Notifications
1. Create notification type
2. Define display rules
3. Set cleanup behavior
4. Add animations

## References

The UI system implementation can be found in the following source files:

1. **Core UI Components**
   - `script/Button.js` - Button system implementation
     - Button creation
     - State management
     - Cooldown mechanics
     - Cost tooltips
   - `script/notifications.js` - Notification system
     - Message management
     - Display controls
     - Queue handling
     - Cleanup logic

2. **UI Integration**
   - `script/events.js` - Event panel system
     - Panel creation
     - Scene management
     - Button integration
     - Notification triggers
   - `script/engine.js` - Core UI management
     - Menu system
     - Layout control
     - State coordination
     - Module integration

3. **Style Definitions**
   - `css/main.css` - Core styles
     - Component layouts
     - Visual effects
     - Responsive design
     - Animation rules
   - `css/events.css` - Event styling
     - Panel design
     - Button layouts
     - Notification positioning

4. **Module Integration**
   - `script/room.js` - Room interface
     - Building buttons
     - Resource display
     - Event integration
   - `script/outside.js` - Outside interface
     - Location controls
     - Movement buttons
     - Resource gathering
   - `script/world.js` - World interface
     - Map controls
     - Navigation buttons
     - Combat interface
