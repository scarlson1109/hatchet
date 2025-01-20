# Audio System

The audio system in the game is built on the Web Audio API and provides a robust foundation for managing background music, event-specific audio, and sound effects. This documentation covers the technical implementation and usage of the audio subsystem.

## Architecture Overview

The audio system consists of two main components:
- `AudioEngine`: The core audio playback and management system
- `AudioLibrary`: A comprehensive catalog of all audio assets used in the game

### AudioEngine

The `AudioEngine` is implemented as a singleton object that manages all audio playback through the Web Audio API. It provides:

- Audio context management
- Sound buffering and caching
- Volume control
- Cross-fading between tracks
- Separate channels for:
  - Background music
  - Event-specific audio
  - Sound effects

### Key Components

#### Audio Context
- Uses the Web Audio API's `AudioContext` or `webkitAudioContext`
- Manages a master gain node for global volume control
- Handles audio buffer management and playback scheduling

#### Buffer Management
- Implements an audio buffer cache (`AUDIO_BUFFER_CACHE`)
- Lazy loading of audio files to optimize memory usage
- Automatic handling of missing audio files with fallback beeping sound

#### Playback Channels
1. **Background Music**
   - Supports looping playback
   - Implements smooth cross-fading (1-second fade time)
   - Allows volume adjustment during event audio

2. **Event Audio**
   - Dedicated channel for event-specific sounds
   - Automatically reduces background music volume
   - Supports smooth transitions

3. **Sound Effects**
   - Single-shot playback
   - No looping
   - Prevents duplicate simultaneous playback of the same sound

## Audio Categories

The `AudioLibrary` defines several categories of audio assets:

1. **Background Music** (`MUSIC_*`)
   - Environment-specific themes (e.g., `DUSTY_PATH`, `SILENT_FOREST`)
   - Location-based music (e.g., `LONELY_HUT`, `TINY_VILLAGE`)
   - Fire state themes (e.g., `FIRE_DEAD`, `FIRE_ROARING`)
   - Special areas (`WORLD`, `SPACE`, `SHIP`, `ENDING`)

2. **Event Music** (`EVENT_*`)
   - Character encounters (e.g., `NOMAD`, `BEGGAR`, `SCOUT`)
   - Dramatic events (e.g., `HUT_FIRE`, `PLAGUE`, `BEAST_ATTACK`)
   - Environmental events (e.g., `NOISES_OUTSIDE`, `NOISES_INSIDE`)

3. **Landmark Sounds** (`LANDMARK_*`)
   - Location discoveries (e.g., `FRIENDLY_OUTPOST`, `CAVE`, `TOWN`)
   - Resource locations (e.g., `SULPHUR_MINE`, `COAL_MINE`)
   - Special locations (e.g., `CRASHED_SHIP`, `BATTLEFIELD`)

4. **Action Sounds**
   - Resource gathering (e.g., `GATHER_WOOD`, `CHECK_TRAPS`)
   - Construction (`BUILD`, `CRAFT`)
   - Commerce (`BUY`)
   - Movement (`FOOTSTEPS_1` through `FOOTSTEPS_6`)
   - Combat (`WEAPON_UNARMED_1`, `WEAPON_MELEE_1`, etc.)

5. **Space Sequence** 
   - Ship sounds (`REINFORCE_HULL`, `UPGRADE_ENGINE`, `LIFT_OFF`)
   - Collision effects (`ASTEROID_HIT_1` through `ASTEROID_HIT_8`, `CRASH`)

## Audio Mechanics

### Volume Management
```javascript
volume_levels: {
  master: {
    default: 1.0,
    range: [0.0, 1.0]
  },
  background_music: {
    default: 1.0,
    event_dimming: 0.2,  // Reduced to 20% during events
    range: [0.0, 1.0]
  },
  effects: {
    default: 1.0,
    range: [0.0, 1.0]
  }
}
```

### Transition Timings
```javascript
timing: {
  FADE_TIME: 1000,           // 1 second fade transitions
  STUN_DURATION: 4000,       // 4 second stun effect
  ENERGISE_MULTIPLIER: 4,    // Energy effect duration multiplier
  EXPLOSION_DURATION: 3000,  // 3 second explosion effect
  ENRAGE_DURATION: 4000,    // 4 second enrage effect
  MEDITATE_DURATION: 5000,  // 5 second meditation effect
  BOOST_DURATION: 3000      // 3 second boost effect
}
```

### Audio Buffer Management
```javascript
buffer_settings: {
  sample_rate: 44100,
  channels: 2,
  missing_audio_frequency: 0.05,  // Beep frequency for missing audio
  missing_audio_duration: 0.25    // Duration of missing audio beep
}
```

### Playback Rules
```javascript
playback: {
  background_music: {
    loop: true,
    fade_in: true,
    fade_out: true,
    concurrent: false      // Only one track at a time
  },
  event_audio: {
    loop: true,
    fade_in: true,
    fade_out: true,
    concurrent: false,
    dims_background: true  // Reduces background volume
  },
  sound_effects: {
    loop: false,
    fade_in: false,
    fade_out: false,
    concurrent: true,      // Multiple effects can play
    duplicate_prevention: true  // Prevents same sound overlapping
  }
}
```

### Audio Loading Strategy
```javascript
loading: {
  preload: [
    'MUSIC_*',      // All background music
    'EVENT_*'       // All event sounds
  ],
  lazy_load: [
    'WEAPON_*',     // Combat sounds
    'FOOTSTEPS_*',  // Movement sounds
    'BUILD_*'       // Construction sounds
  ],
  cache_enabled: true,
  cache_size: 'unlimited'
}
```

## Audio Events

### Background Music Triggers
```javascript
triggers: {
  room: {
    fire_dead: 'MUSIC_FIRE_DEAD',
    fire_smoldering: 'MUSIC_FIRE_SMOLDERING',
    fire_burning: 'MUSIC_FIRE_BURNING',
    fire_roaring: 'MUSIC_FIRE_ROARING'
  },
  outside: {
    day: 'MUSIC_WORLD',
    night: 'MUSIC_SILENT_FOREST'
  },
  combat: {
    start: 'MUSIC_COMBAT_START',
    victory: 'MUSIC_COMBAT_VICTORY',
    defeat: 'MUSIC_COMBAT_DEFEAT'
  }
}
```

### Sound Effect Mappings
```javascript
effects: {
  resources: {
    gather_wood: 'GATHER_WOOD',
    build: 'BUILD',
    craft: 'CRAFT',
    buy: 'BUY',
    eat: 'EAT_MEAT',
    use_meds: 'USE_MEDS'
  },
  combat: {
    hit: {
      unarmed: ['WEAPON_UNARMED_1', 'WEAPON_UNARMED_2', 'WEAPON_UNARMED_3'],
      melee: ['WEAPON_MELEE_1', 'WEAPON_MELEE_2', 'WEAPON_MELEE_3'],
      ranged: ['WEAPON_RANGED_1', 'WEAPON_RANGED_2', 'WEAPON_RANGED_3']
    },
    death: 'DEATH'
  },
  movement: {
    footsteps: ['FOOTSTEPS_1', 'FOOTSTEPS_2', 'FOOTSTEPS_3', 
                'FOOTSTEPS_4', 'FOOTSTEPS_5', 'FOOTSTEPS_6']
  }
}
```

### Event Sound Rules
```javascript
event_rules: {
  trader_arrival: {
    sound: 'EVENT_TRADER',
    volume: 1.0,
    delay: 0
  },
  combat_start: {
    sound: 'EVENT_COMBAT',
    volume: 1.0,
    delay: 0,
    dims_background: true
  },
  location_discovery: {
    sound: 'EVENT_DISCOVER',
    volume: 0.8,
    delay: 500
  }
}
```

## Usage Examples

```javascript
// Initialize the audio system
AudioEngine.init();

// Play background music
AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_DUSTY_PATH);

// Play event music (automatically dims background)
AudioEngine.playEventMusic(AudioLibrary.EVENT_NOMAD);

// Stop event music (restores background volume)
AudioEngine.stopEventMusic();

// Play a sound effect
AudioEngine.playSound(AudioLibrary.CRAFT);

// Adjust background music volume (0.0 to 1.0)
AudioEngine.setBackgroundMusicVolume(0.5);
```

## Technical Considerations

1. **Browser Compatibility**
   - Supports both standard and webkit prefixed Audio Context
   - Includes fallbacks for non-promise-based decodeAudioData (Safari support)

2. **Performance Optimization**
   - Implements audio buffer caching
   - Lazy loading of audio files
   - Automatic cleanup of completed sound effects

3. **Error Handling**
   - Graceful handling of missing audio files
   - Fallback sound generation for missing assets
   - Automatic state management for suspended audio contexts

## Integration Points

The audio system integrates with:
- Event system (for triggering event-specific audio)
- Game state manager (for background music changes)
- Combat system (for weapon sounds)
- Movement system (for footstep sounds)
- Space navigation (for ship and collision sounds)

## Extending the System

To add new audio:
1. Add the audio file to the `audio/` directory
2. Define the file path in `AudioLibrary`
3. Use appropriate `AudioEngine` methods for playback

To modify existing behavior:
1. Background music transitions: Adjust `FADE_TIME` constant
2. Volume levels: Modify gain values in playback methods
3. Add new playback channels: Implement new gain nodes and playback methods

## References

The audio system implementation can be found in the following source files:

1. **Core Audio Engine**
   - `script/audio.js` - Main audio engine implementation
     - Web Audio API integration
     - Buffer management
     - Volume control
     - Playback scheduling
   - `script/audioLibrary.js` - Audio asset catalog
     - Sound definitions
     - Music collections
     - File path mappings
     - Category organization

2. **Audio Categories**
   - `script/audio/background.js` - Background music system
     - Environment themes
     - Location-based music
     - Fire state themes
     - Special area music
   - `script/audio/events.js` - Event audio system
     - Character encounters
     - Dramatic events
     - Environmental events
   - `script/audio/effects.js` - Sound effects system
     - Resource gathering
     - Construction sounds
     - Combat effects
     - Movement sounds

3. **Integration Points**
   - `script/events.js` - Event system integration
     - Combat sounds
     - Scene transitions
     - Event notifications
   - `script/engine.js` - Engine integration
     - Audio initialization
     - State coordination
     - Platform compatibility
   - `script/room.js` - Room system integration
     - Fire sounds
     - Building effects
     - Ambient audio

4. **Performance & Optimization**
   - `script/audio/buffer.js` - Buffer management
     - Cache control
     - Memory optimization
     - Loading strategies
   - `script/audio/scheduler.js` - Audio scheduling
     - Playback timing
     - Transition management
     - Performance monitoring
