# Space Module

## Overview

The Space module manages the final phase of the game, implementing a challenging escape sequence through an asteroid field. It handles ship movement, collision detection, atmospheric transitions, and the game's ending sequence. The module represents the culmination of the player's journey, testing their ship upgrades and piloting skills.

## Core Mechanics

### Constants
```javascript
SHIP_SPEED: 3,                 // Base ship movement speed
BASE_ASTEROID_DELAY: 500,      // Base delay between asteroid spawns (ms)
BASE_ASTEROID_SPEED: 1500,     // Base asteroid movement speed (ms)
FTB_SPEED: 60000,             // Fade to black speed (ms)
STAR_WIDTH: 3000,             // Star field width (px)
STAR_HEIGHT: 3000,            // Star field height (px)
NUM_STARS: 200,               // Number of stars in background
STAR_SPEED: 60000,            // Star movement speed (ms)
FRAME_DELAY: 100              // Animation frame delay (ms)
```

### Flight Systems

#### Movement System
- WASD or Arrow key controls for 8-directional movement
- Diagonal movement normalized using vector math
- Speed calculated as `SHIP_SPEED + thrusters`
- Movement bounded by screen edges (10px to 690px)
- Delta time compensation for smooth movement
```javascript
if(dx !== 0 && dy !== 0) {
    dx = dx / Math.sqrt(2);
    dy = dy / Math.sqrt(2);
}
if(Space.lastMove != null) {
    var dt = Date.now() - Space.lastMove;
    dx *= dt / 33;
    dy *= dt / 33;
}
```

#### Collision System
- Real-time collision detection using bounding boxes
- Collision checks run on each animation frame
- Hull damage on asteroid hits with audio feedback
- Game over triggered on hull breach
- Collision data stored per asteroid:
```javascript
a.data({
    xMin: x,
    xMax: x + a.width(),
    height: a.height()
});
```

### Atmosphere System

#### Altitude Tracking
- Troposphere (0-10km): Base difficulty
- Stratosphere (10-20km): +1 asteroid
- Mesosphere (20-30km): +3 asteroids
- Thermosphere (30-45km): +5 asteroids
- Exosphere (45-60km): Maximum difficulty
- Space (60km+): Victory condition

#### Title Updates
```javascript
setTitle: function() {
    var t;
    if(Space.altitude < 10) {
        t = _("Troposphere");
    } else if(Space.altitude < 20) {
        t = _("Stratosphere");
    } else if(Space.altitude < 30) {
        t = _("Mesosphere");
    } else if(Space.altitude < 45) {
        t = _("Thermosphere");
    } else if(Space.altitude < 60){
        t = _("Exosphere");
    } else {
        t = _("Space");
    }
    document.title = t;
}
```

### Asteroid Field

#### Difficulty Scaling
```javascript
// Asteroid spawn rate increases with altitude
if(Space.altitude > 10) {
    Space.createAsteroid(true);
}
if(Space.altitude > 20) {
    Space.createAsteroid(true);
    Space.createAsteroid(true);
}
if(Space.altitude > 40) {
    Space.createAsteroid(true);
    Space.createAsteroid(true);
}

// Spawn delay decreases with altitude
Engine.setTimeout(Space.createAsteroid, 1000 - (Space.altitude * 10), true);
```

#### Asteroid Types
- '#' - Dense asteroid (20% chance)
- '$' - Metallic asteroid (20% chance)
- '%' - Ice asteroid (20% chance)
- '&' - Rocky asteroid (20% chance)
- 'H' - Hollow asteroid (20% chance)

#### Asteroid Movement
```javascript
a.animate({
    top: '740px'
}, {
    duration: Space.BASE_ASTEROID_SPEED - Math.floor(Math.random() * (Space.BASE_ASTEROID_SPEED * 0.65)),
    easing: 'linear'
});
```

## Technical Implementation

### Initialization
```javascript
init: function(options) {
    // Create the Space panel
    this.panel = $('<div>').attr('id', "spacePanel")
        .addClass('location')
        .appendTo('#outerSlider');
    
    // Create the ship
    Space.ship = $('<div>').text("@").attr('id', 'ship').appendTo(this.panel);
    
    // Create the hull display
    var h = $('<div>').attr('id', 'hullRemaining').appendTo(this.panel);
    $('<div>').addClass('row_key').text(_('hull: ')).appendTo(h);
    $('<div>').addClass('row_val').appendTo(h);
    
    // Subscribe to state updates
    $.Dispatch('stateUpdate').subscribe(Space.handleStateUpdates);
}
```

### Core Functions

#### Ship Movement
```javascript
moveShip: function() {
    var x = Space.ship.css('left');
    x = parseFloat(x.substring(0, x.length - 2));
    var y = Space.ship.css('top');
    y = parseFloat(y.substring(0, y.length - 2));
    
    var dx = 0, dy = 0;
    
    if(Space.up) {
        dy -= Space.getSpeed();
    } else if(Space.down) {
        dy += Space.getSpeed();
    }
    if(Space.left) {
        dx -= Space.getSpeed();
    } else if(Space.right) {
        dx += Space.getSpeed();
    }
    
    // Normalize diagonal movement
    if(dx !== 0 && dy !== 0) {
        dx = dx / Math.sqrt(2);
        dy = dy / Math.sqrt(2);
    }
    
    // Apply delta time
    if(Space.lastMove != null) {
        var dt = Date.now() - Space.lastMove;
        dx *= dt / 33;
        dy *= dt / 33;
    }
    
    // Bound movement
    x = Math.max(10, Math.min(690, x + dx));
    y = Math.max(10, Math.min(690, y + dy));
    
    Space.shipX = x;
    Space.shipY = y;
    
    Space.ship.css({
        left: x + 'px',
        top: y + 'px'
    });
    
    Space.lastMove = Date.now();
}
```

#### Crash Handling
```javascript
crash: function() {
    if(Space.done) return;
    Engine.keyLock = true;
    Space.done = true;
    
    // Clear all intervals
    clearInterval(Space._timer);
    clearInterval(Space._shipTimer);
    clearInterval(Space._volumeTimer);
    
    // Animate crash
    $('body').removeClass('noMask').stop().animate({
        backgroundColor: Engine.isLightsOff() ? '#272823' : '#FFFFFF'
    }, {
        duration: 300,
        complete: function() {
            Space.stars.remove();
            Space.starsBack.remove();
            Space.stars = Space.starsBack = null;
            $('#starsContainer').remove();
        }
    });
    
    Engine.activeModule = Ship;
    Ship.onArrival();
    AudioEngine.playSound(AudioLibrary.CRASH);
}
```

### Audio System

#### Sound Effects
- Asteroid hits with altitude-based frequencies:
  ```javascript
  var r = Math.floor(Math.random() * 2);
  if(Space.altitude > 40) {
      r += 6;
      AudioEngine.playSound(AudioLibrary['ASTEROID_HIT_' + r]);
  } else if(Space.altitude > 20) {
      r += 4;
      AudioEngine.playSound(AudioLibrary['ASTEROID_HIT_' + r]);
  } else {
      r += 1;
      AudioEngine.playSound(AudioLibrary['ASTEROID_HIT_' + r]);
  }
  ```
- Engine sounds during movement
- Background music with dynamic volume
- Crash and victory sound effects

#### Volume Management
```javascript
lowerVolume: function() {
    if (Space.done) return;
    
    // Lower audio as ship gets further into space
    var progress = Space.altitude / 60;
    var newVolume = 1.0 - progress;
    AudioEngine.setBackgroundMusicVolume(newVolume, 0.3);
}
```

## Game States

### Victory Conditions
- Reach 60km altitude
- Survive the asteroid field
- Maintain hull integrity
- Complete transition to space

### Failure Conditions
- Hull breach (0 hull points)
- Collision with large asteroid
- System failure during ascent
- Crash sequence triggered

### State Management
- Tracks hull integrity
- Monitors altitude progress
- Manages game completion
- Handles crash recovery

## Integration Points

### Ship Integration
- Receives hull and thruster data
- Manages ship state and controls
- Handles damage and repairs
- Tracks upgrade effects

### Engine Integration
- Manages game state transitions
- Controls UI animations
- Handles victory/failure states
- Manages key bindings

### Audio Integration
- Dynamic background music
- Altitude-based sound effects
- Volume management system
- Event-specific audio

## References

### Core Implementation
- `script/space.js` - Main space module implementation
  - Flight mechanics and physics
  - Asteroid system and spawning
  - Collision detection system
  - Victory/failure state handling
  - Audio management
  - Performance optimization

### Integration Files
- `script/ship.js` - Ship integration
  - Hull management system
  - Thruster control interface
  - Ship state persistence
  - Damage calculation
- `script/engine.js` - Engine integration
  - Game state management
  - Scene transitions
  - Event handling system
  - Key binding management

### UI Components
- `css/space.css` - Space interface styling
  - Ship and asteroid appearance
  - Background star effects
  - HUD element positioning
  - Animation definitions
  - Responsive layout

### Audio Assets
- `audio/asteroid_hit_*.mp3` - Asteroid collision sounds
- `audio/engine_*.mp3` - Ship movement sounds
- `audio/crash.mp3` - Ship crash sound
- `audio/victory.mp3` - Escape success sound
- `audio/space_music.mp3` - Background music
