# Dropbox Integration

The Dropbox integration in A Dark Room provides cloud save functionality using the Dropbox Datastore API, allowing players to save and load their game state across devices.

## Core Mechanics

### Initialization
```javascript
DropboxConnector.init({
    key: 'app_key',        // Dropbox API key
    table: 'adarkroom',    // Datastore table name
    log: false            // Enable/disable logging
});
```

### Save System
- Multiple save slots (0-4)
- Timestamp tracking for each save
- Base64 encoded game state
- Automatic authentication
- Interactive connection flow

### Save Operations
```javascript
// Save game to slot
DropboxConnector.saveGameToDropbox(slotNumber, callback);

// Load game from slot
DropboxConnector.loadGameFromDropbox(slotNumber);

// Connect to Dropbox
DropboxConnector.connectToDropbox(interactive, callback);
```

### User Interface
- Connect/disconnect options
- Save slot selection
- Load slot selection
- Account information display
- Success/error notifications

## Technical Implementation

### Authentication Flow
```javascript
// Initialize connection
client.authenticate({interactive: true}, function(error) {
    if (error) {
        // Handle authentication error
    }
});

// Check authentication status
if (client.isAuthenticated()) {
    // Open datastore and prepare tables
}
```

### Data Management
- Datastore initialization
- Table management
- Save slot tracking
- State serialization
- Timestamp handling

### Error Handling
- Authentication failures
- Connection issues
- Save/load failures
- Invalid game states
- Version conflicts

## Integration Points

### Engine Integration
- Game state export
- State import handling
- Save timing
- Version compatibility
- State validation

### Event System Integration
- Connection events
- Save/load events
- Error events
- Success notifications
- Account events

### UI Integration
- Modal dialogs
- Progress indicators
- Error messages
- Account display
- Slot selection interface

## Technical Features

### Performance Optimization
- Efficient state serialization
- Minimal network requests
- Cached authentication
- Optimized save format
- Memory management

### Security Features
- Secure authentication
- Data encryption
- Session management
- Token handling
- Error recovery

## References

### Core Implementation
- `script/dropbox.js`: Dropbox integration
  - Authentication system
  - Save management
  - State handling
  - Error recovery
  - UI integration

### Integration Files
- `script/engine.js`: Engine integration
  - State serialization
  - Save system hooks
  - Version management
- `script/events.js`: Event system
  - UI events
  - Notifications
  - Error handling

### External Dependencies
- Dropbox Datastore API
  - Authentication
  - Data storage
  - Synchronization
  - Version control
- jQuery
  - DOM manipulation
  - Event handling
  - AJAX operations 