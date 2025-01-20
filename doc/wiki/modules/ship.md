# Ship Module

## Overview

The Ship module manages the starship functionality, serving as the player's means of escape from the planet. It handles ship upgrades, resource management, and the transition to space flight.

## Core Mechanics

### Constants
```javascript
LIFTOFF_COOLDOWN: 120,      // Cooldown between launch attempts (seconds)
ALLOY_PER_HULL: 1,         // Alien alloy cost per hull point
ALLOY_PER_THRUSTER: 1,     // Alien alloy cost per thruster upgrade
BASE_HULL: 0,              // Starting hull points
BASE_THRUSTERS: 1          // Starting thruster count
```

### Ship Systems

#### Hull System
- Base hull starts at 0
- Each hull point costs 1 alien alloy
- Hull integrity affects ability to launch
- Hull damage persists between attempts
- Hull points determine crash survival in space

#### Engine System
- Base thrusters start at 1
- Each thruster upgrade costs 1 alien alloy
- Thrusters affect ship speed in space (SHIP_SPEED + thrusters)
- Engine power affects maneuverability and asteroid avoidance

### Resource Management

#### Alien Alloy
- Required for all ship upgrades
- Used for both hull and engine improvements
- Cannot be recovered once used
- Found in military installations and special encounters
- Also used for fabricator blueprints

## Technical Implementation

### Initialization
```javascript
init: function(options) {
    // Create the Ship tab
    this.tab = Header.addLocation(_("An Old Starship"), "ship", Ship);
    
    // Create the Ship panel
    this.panel = $('<div>').attr('id', "shipPanel")
        .addClass('location')
        .appendTo('div#locationSlider');
        
    // Initialize ship state if not exists
    if(!$SM.get('features.location.spaceShip')) {
        $SM.set('features.location.spaceShip', true);
        $SM.setM('game.spaceShip', {
            hull: Ship.BASE_HULL,
            thrusters: Ship.BASE_THRUSTERS
        });
    }
}
```

### Core Functions

#### Hull Management
```javascript
reinforceHull: function() {
    if($SM.get('stores["alien alloy"]', true) < Ship.ALLOY_PER_HULL) {
        Notifications.notify(Ship, _("not enough alien alloy"));
        return false;
    }
    $SM.add('stores["alien alloy"]', -Ship.ALLOY_PER_HULL);
    $SM.add('game.spaceShip.hull', 1);
    AudioEngine.playSound(AudioLibrary.REINFORCE_HULL);
}
```

#### Engine Management
```javascript
upgradeEngine: function() {
    if($SM.get('stores["alien alloy"]', true) < Ship.ALLOY_PER_THRUSTER) {
        Notifications.notify(Ship, _("not enough alien alloy"));
        return false;
    }
    $SM.add('stores["alien alloy"]', -Ship.ALLOY_PER_THRUSTER);
    $SM.add('game.spaceShip.thrusters', 1);
    AudioEngine.playSound(AudioLibrary.UPGRADE_ENGINE);
}
```

### Launch System

#### Launch Checks
```javascript
checkLiftOff: function() {
    if(!$SM.get('game.spaceShip.seenWarning')) {
        Events.startEvent({
            title: _('Ready to Leave?'),
            scenes: {
                'start': {
                    text: [_("time to get out of this place. won't be coming back.")],
                    buttons: {
                        'fly': { 
                            text: _('lift off'),
                            onChoose: function() {
                                $SM.set('game.spaceShip.seenWarning', true);
                                Ship.liftOff();
                            }
                        },
                        'wait': { text: _('linger') }
                    }
                }
            }
        });
    }
}
```

#### Launch Sequence
```javascript
liftOff: function() {
    $('#outerSlider').animate({top: '700px'}, 300);
    Space.onArrival();
    Engine.activeModule = Space;
    AudioEngine.playSound(AudioLibrary.LIFT_OFF);
}
```

## Fabricator Integration

### Blueprint System
- Unlocked after discovering the ship
- Requires alien alloy for crafting
- Provides advanced equipment:
  ```javascript
  'hypo': {
      type: 'tool',
      cost: { 'alien alloy': 1 },
      quantity: 5
  },
  'plasma rifle': {
      type: 'weapon',
      cost: { 'alien alloy': 1 }
  },
  'glowstone': {
      type: 'tool',
      cost: { 'alien alloy': 1 }
  }
  ```

### Fabricator Interface
- Located in ship area
- Shows available blueprints
- Displays resource requirements
- Updates in real-time with resource changes

## UI Management

### Interface Elements
- Hull status display
- Engine status display
- Upgrade buttons with costs
- Launch button with cooldown
- Fabricator access button

### Visual Feedback
- Button states reflect resource availability
- Hull and engine displays update in real-time
- Launch button disabled if hull integrity is zero
- Audio feedback for upgrades and launch

## Integration Points

### Engine Integration
- Manages module transitions
- Handles state persistence
- Controls UI animations
- Manages active module switching

### State Manager Integration
- Tracks ship upgrades
- Manages resource consumption
- Handles game state
- Persists ship configuration

### Audio Integration
- Hull reinforcement sounds
- Engine upgrade effects
- Launch sequence audio
- Background ambience
- Fabricator sounds

## References

### Core Implementation
- `script/ship.js` - Main ship module implementation
  - Ship initialization
  - Upgrade systems
  - Launch mechanics
  - State management

### Integration Files
- `script/engine.js` - Engine integration
  - Module transitions
  - State coordination
  - UI management
- `script/space.js` - Space integration
  - Flight mechanics
  - Asteroid field
  - Combat system
- `script/fabricator.js` - Fabricator integration
  - Blueprint system
  - Advanced crafting
  - Resource management

### UI Components
- `css/ship.css` - Ship interface styling
  - Panel layout
  - Button states
  - Status displays
  - Fabricator interface

### Audio Assets
- `audio/reinforce_hull.mp3` - Hull upgrade sound
- `audio/upgrade_engine.mp3` - Engine upgrade sound
- `audio/lift_off.mp3` - Launch sequence sound
- `audio/ship_music.mp3` - Ship area background music
