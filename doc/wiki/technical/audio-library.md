# Audio Library

The audio library system in A Dark Room manages audio asset definitions, loading, and playback through the Web Audio API. This document details the technical implementation and features of the audio library system.

## Core Components

### Audio Asset Categories
```javascript
// Music collections
MUSIC_DUSTY_PATH: 'audio/dusty-path.flac',
MUSIC_SILENT_FOREST: 'audio/silent-forest.flac',
MUSIC_LONELY_HUT: 'audio/lonely-hut.flac',
MUSIC_FIRE_DEAD: 'audio/fire-dead.flac',
MUSIC_FIRE_ROARING: 'audio/fire-roaring.flac',

// Event sounds
EVENT_NOMAD: 'audio/event-nomad.flac',
EVENT_NOISES_OUTSIDE: 'audio/event-noises-outside.flac',
EVENT_BEAST_ATTACK: 'audio/event-beast-attack.flac',

// Landmark sounds
LANDMARK_FRIENDLY_OUTPOST: 'audio/landmark-friendly-outpost.flac',
LANDMARK_CAVE: 'audio/landmark-cave.flac',
LANDMARK_SULPHUR_MINE: 'audio/landmark-sulphurmine.flac'
```

### Audio Engine Configuration
```javascript
// Core settings
FADE_TIME: 1,  // Fade transition time in seconds
AUDIO_BUFFER_CACHE: {},  // Cache for loaded audio buffers

// Audio nodes
_audioContext: null,     // Web Audio context
_master: null,           // Master gain node
_currentBackgroundMusic: null,
_currentEventAudio: null,
_currentSoundEffectAudio: null
```

## Audio Mechanics

### Buffer Management
```javascript
buffer_settings: {
    sample_rate: 44100,
    channels: 2,
    missing_audio_frequency: 0.05,  // Fallback beep frequency
    missing_audio_duration: 0.25    // Fallback beep duration
}
```

### Playback Rules
```javascript
playback: {
    background_music: {
        loop: true,
        fade_in: true,
        fade_out: true,
        concurrent: false
    },
    event_audio: {
        loop: true,
        fade_in: true,
        fade_out: true,
        dims_background: true
    },
    sound_effects: {
        loop: false,
        fade_in: false,
        fade_out: false,
        concurrent: true
    }
}
```

### Volume Control
```javascript
volume_levels: {
    master: {
        default: 1.0,
        range: [0.0, 1.0]
    },
    background_music: {
        default: 1.0,
        event_dimming: 0.2
    },
    effects: {
        default: 1.0
    }
}
```

## Technical Implementation

### Audio Context Initialization
```javascript
_initAudioContext: function() {
    // Create audio context with fallback
    AudioEngine._audioContext = new (
        window.AudioContext || 
        window.webkitAudioContext
    );
    AudioEngine._createMasterChannel();
}
```

### Audio Loading
```javascript
loadAudioFile: function(src) {
    // Check cache first
    if (AudioEngine.AUDIO_BUFFER_CACHE[src]) {
        return Promise.resolve(
            AudioEngine.AUDIO_BUFFER_CACHE[src]
        );
    }
    
    // Load and decode audio file
    return fetch(src)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return AudioEngine._audioContext
                .decodeAudioData(buffer);
        });
}
```

### Playback Control
```javascript
// Background music playback
_playBackgroundMusic: function(buffer) {
    var source = AudioEngine._audioContext
        .createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    
    // Create gain envelope
    var envelope = AudioEngine._audioContext
        .createGain();
    envelope.gain.setValueAtTime(0.0, 
        AudioEngine._audioContext.currentTime);
    
    // Connect nodes
    source.connect(envelope);
    envelope.connect(AudioEngine._master);
    
    // Start playback with fade-in
    source.start();
    envelope.gain.linearRampToValueAtTime(1.0, 
        AudioEngine._audioContext.currentTime + 
        AudioEngine.FADE_TIME);
}
```

## Integration Features

### Event System Integration
```javascript
// Play event-specific audio
playEventMusic: function(src) {
    AudioEngine.loadAudioFile(src)
        .then(function(buffer) {
            AudioEngine._playEventMusic(buffer);
            // Dims background music automatically
        });
}
```

### State Management Integration
```javascript
// Handle audio context state
isAudioContextRunning: function() {
    return AudioEngine._audioContext.state !== 
        'suspended';
},

tryResumingAudioContext: function() {
    if (AudioEngine._audioContext.state === 
        'suspended') {
        AudioEngine._audioContext.resume();
    }
}
```

### Error Handling
```javascript
_getMissingAudioBuffer: function() {
    // Create fallback beep sound
    var buffer = AudioEngine._audioContext
        .createBuffer(1, 
            AudioEngine._audioContext.sampleRate,
            AudioEngine._audioContext.sampleRate);
            
    var data = buffer.getChannelData(0);
    for (var i = 0; i < buffer.length / 2; i++) {
        data[i] = Math.sin(i * 0.05) / 4;
    }
    return buffer;
}
```

## Technical Features

### 1. Asset Management
- Centralized audio file definitions
- Automatic path resolution
- Buffer caching system
- Lazy loading support

### 2. Playback Control
- Background music looping
- Event sound management
- Sound effect handling
- Volume control and fading

### 3. Browser Compatibility
- WebKit Audio Context support
- Promise-based loading
- Safari compatibility fixes
- Suspended state handling

### 4. Performance Optimization
- Audio buffer caching
- Memory management
- Resource cleanup
- Efficient state tracking

## Mobile & Browser Support

### Audio Context Suspension
```javascript
// Handle suspended audio context
isAudioContextRunning: function() {
    return AudioEngine._audioContext.state !== 'suspended';
},

tryResumingAudioContext: function() {
    if (AudioEngine._audioContext.state === 'suspended') {
        AudioEngine._audioContext.resume();
    }
}
```

### Mobile Browser Initialization
```javascript
// Add click listener for mobile browsers
if(!AudioEngine.isAudioContextRunning()) {
    document.addEventListener('click', Engine.resumeAudioContext, true);
}

// Resume context and restore volume
resumeAudioContext: function() {
    AudioEngine.tryResumingAudioContext();
    AudioEngine.setMasterVolume(
        $SM.get('config.soundOn') ? 1.0 : 0.0, 0
    );
    document.removeEventListener('click', Engine.resumeAudioContext);
}
```

## Engine Integration

### Volume Toggle System
```javascript
toggleVolume: function(enabled) {
    if (enabled == null) {
        enabled = !$SM.get('config.soundOn');
    }
    if (!enabled) {
        $('.volume').text(_('sound on.'));
        $SM.set('config.soundOn', false);
        AudioEngine.setMasterVolume(0.0);
    } else {
        $('.volume').text(_('sound off.'));
        $SM.set('config.soundOn', true);
        AudioEngine.setMasterVolume(1.0);
    }
}
```

### First-Time Audio Notification
```javascript
function notifyAboutSound() {
    if ($SM.get('playStats.audioAlertShown')) {
        return;
    }
    
    $SM.set('playStats.audioAlertShown', true);
    Events.startEvent({
        title: _('Sound Available!'),
        scenes: {
            start: {
                text: [
                    _('ears flooded with new sensations.'),
                    _('perhaps silence is safer?')
                ],
                buttons: {
                    'yes': {
                        text: _('enable audio'),
                        nextScene: 'end',
                        onChoose: () => Engine.toggleVolume(true)
                    },
                    'no': {
                        text: _('disable audio'),
                        nextScene: 'end',
                        onChoose: () => Engine.toggleVolume(false)
                    }
                }
            }
        }
    });
}
```

## Error Recovery

### Missing Audio Handling
```javascript
_getMissingAudioBuffer: function() {
    // Create fallback beep sound for missing audio
    var buffer = AudioEngine._audioContext.createBuffer(
        1, 
        AudioEngine._audioContext.sampleRate,
        AudioEngine._audioContext.sampleRate
    );
    
    var data = buffer.getChannelData(0);
    for (var i = 0; i < buffer.length / 2; i++) {
        data[i] = Math.sin(i * 0.05) / 4;
    }
    return buffer;
}
```

### Audio Loading Error Recovery
```javascript
loadAudioFile: function(src) {
    // Check cache first
    if (AudioEngine.AUDIO_BUFFER_CACHE[src]) {
        return Promise.resolve(
            AudioEngine.AUDIO_BUFFER_CACHE[src]
        );
    }
    
    // Load and decode with error handling
    return fetch(src)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return AudioEngine._audioContext
                .decodeAudioData(buffer);
        })
        .catch(error => {
            console.warn('Failed to load audio:', src);
            return AudioEngine._getMissingAudioBuffer();
        });
}
```

## References

### Core Implementation
- `script/audio.js`: Audio engine implementation
  - Web Audio API integration
  - Playback control
  - State management
  - Error handling
  - Mobile browser support
  - Audio context suspension handling
  - Volume management system
  - Missing audio generation
  - Loading error recovery
  - Fallback sound system
  - Context suspension management
  - Touch event handling
  - iOS/Safari specific fixes
  - Autoplay policy compliance

### Asset Management
- `script/audioLibrary.js`: Audio asset catalog
  - File definitions
  - Asset categories
  - Path mappings
  - Asset organization
  - Error recovery fallbacks
  - Loading strategy configuration

### Integration Points
- `script/events.js`: Event system integration
  - Event sounds
  - Scene transitions
  - Combat audio
  - First-time audio notification system
  - Sound availability events
  
- `script/engine.js`: Engine integration
  - Audio context initialization
  - Mobile click handling
  - Volume toggle system
  - State persistence
  - Browser compatibility checks
  
### Performance Systems
- `script/audio/buffer.js`: Buffer management
  - Cache control
  - Memory optimization
  - Loading strategies
  - Error recovery mechanisms
  - Missing audio fallbacks