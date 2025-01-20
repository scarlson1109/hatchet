# Audio Library

The Audio Library in A Dark Room defines and organizes all audio assets used in the game, providing a centralized system for managing sound effects and music across different game states and events.

## Core Categories

### Music Tracks
```javascript
// Village Evolution
MUSIC_LONELY_HUT         // Initial room state
MUSIC_TINY_VILLAGE       // Early village
MUSIC_MODEST_VILLAGE     // Growing village
MUSIC_LARGE_VILLAGE      // Developed village
MUSIC_RAUCOUS_VILLAGE    // Thriving village

// Fire States
MUSIC_FIRE_DEAD         // Fire extinguished
MUSIC_FIRE_SMOLDERING   // Fire barely alive
MUSIC_FIRE_FLICKERING   // Fire stable
MUSIC_FIRE_BURNING      // Fire strong
MUSIC_FIRE_ROARING      // Fire maximum

// World Areas
MUSIC_DUSTY_PATH        // Path exploration
MUSIC_SILENT_FOREST     // Forest area
MUSIC_WORLD             // World map
MUSIC_SPACE             // Space sequence
MUSIC_ENDING            // Game completion
MUSIC_SHIP              // Ship preparation
```

### Event Sounds
```javascript
// Room Events
EVENT_NOMAD               // Trader arrival
EVENT_NOISES_OUTSIDE     // Outside disturbance
EVENT_NOISES_INSIDE      // Inside activity
EVENT_BEGGAR             // Beggar encounter
EVENT_SHADY_BUILDER      // Builder event
EVENT_MYSTERIOUS_WANDERER // Special visitor

// World Events
EVENT_SCOUT              // Scout discovery
EVENT_WANDERING_MASTER   // Master encounter
EVENT_SICK_MAN          // Illness event
EVENT_RUINED_TRAP       // Trap destruction
EVENT_HUT_FIRE          // Building fire
EVENT_SICKNESS          // Disease outbreak
EVENT_PLAGUE            // Major illness
EVENT_BEAST_ATTACK      // Animal attack
EVENT_SOLDIER_ATTACK    // Military conflict
EVENT_THIEF             // Theft incident
```

### Landmark Sounds
```javascript
// Locations
LANDMARK_FRIENDLY_OUTPOST  // Safe haven
LANDMARK_SWAMP            // Dangerous terrain
LANDMARK_CAVE             // Underground area
LANDMARK_TOWN             // Settlement
LANDMARK_CITY             // Urban area
LANDMARK_HOUSE            // Dwelling
LANDMARK_BATTLEFIELD      // Combat zone
LANDMARK_BOREHOLE         // Resource site
LANDMARK_CRASHED_SHIP     // Wreckage
LANDMARK_SULPHUR_MINE     // Sulphur source
LANDMARK_COAL_MINE        // Coal source
LANDMARK_IRON_MINE        // Iron source
LANDMARK_DESTROYED_VILLAGE // Ruined settlement
```

### Combat Sounds
```javascript
// Encounter Tiers
ENCOUNTER_TIER_1          // Basic encounters
ENCOUNTER_TIER_2          // Medium encounters
ENCOUNTER_TIER_3          // Advanced encounters

// Combat Actions
WEAPON_UNARMED_1/2/3      // Hand-to-hand combat
WEAPON_MELEE_1/2/3        // Close combat
WEAPON_RANGED_1/2/3       // Distance combat
DEATH                     // Character death
```

### Action Sounds
```javascript
// Room Actions
LIGHT_FIRE               // Fire starting
STOKE_FIRE               // Fire maintenance
BUILD                    // Construction
CRAFT                    // Item creation
BUY                      // Trading
GATHER_WOOD              // Resource collection
CHECK_TRAPS              // Trap inspection

// Movement
FOOTSTEPS_1/2/3/4/5/6    // Walking variations
EMBARK                   // Journey start

// Item Usage
EAT_MEAT                 // Food consumption
USE_MEDS                 // Medicine usage
```

### Space Sequence
```javascript
// Ship Actions
REINFORCE_HULL           // Hull upgrade
UPGRADE_ENGINE           // Engine improvement
LIFT_OFF                 // Launch sequence

// Space Events
ASTEROID_HIT_1/2/3/4/5/6/7/8  // Impact variations
CRASH                    // Ship destruction
```

## Technical Implementation

### Audio Engine
```javascript
// Initialize audio context
AudioEngine.init();  // Sets up WebAudio context and master channel

// Playback controls
AudioEngine.playBackgroundMusic(src);  // Loops with fade-in
AudioEngine.playEventMusic(src);       // Layers over background
AudioEngine.playSound(src);            // One-shot sound effect
AudioEngine.stopEventMusic();          // Fades out event layer

// Volume control
AudioEngine.setBackgroundMusicVolume(volume, duration);
```

### Playback Mechanics
- Background music loops continuously with crossfading
- Event sounds layer over background with volume ducking
- Sound effects prevent duplicate playback
- Smooth volume ramping for all transitions
- Automatic audio context suspension handling
- Cross-browser compatibility support

### Audio Context Management
- WebAudio API initialization
- Fallback to webkitAudioContext
- Automatic context resumption
- Buffer management and caching
- Memory-efficient audio loading

### File Format
- All audio files use FLAC format
- Consistent naming convention
- Organized directory structure
- Optimized file sizes
- Automatic path resolution

### Audio Categories
- Background Music
- Event Sounds
- Location Ambience
- Combat Effects
- Action Feedback
- Movement Sounds
- Space Sequence

### File Organization
```
/audio/
├── music/           # Background tracks
├── events/          # Event-specific sounds
├── landmarks/       # Location sounds
├── combat/          # Combat effects
├── actions/         # Gameplay actions
└── space/           # Space sequence
```

## Integration Points

### Audio System Integration
- Sound loading and caching
- Volume management with ramping
- Layered playback control
- Format handling with fallbacks
- Error recovery with placeholder audio
- Cross-browser compatibility
- Promise-based loading
- Safari-specific handling

### Engine Integration
- Event triggers
- State changes
- Scene transitions
- Combat sequences
- Space navigation

### Module Integration
- Room state changes
- World exploration
- Combat encounters
- Space sequence
- Event system

## Technical Features

### Performance Optimization
- Audio buffer caching
- Lazy loading of assets
- Memory-efficient buffer management
- Optimized audio decoding
- Smart resource cleanup
- Minimal network requests
- Efficient path resolution

### Error Handling
- Missing file detection with placeholder sound
- Format validation and fallbacks
- Playback failures recovery
- Loading error management
- Resource cleanup
- Context suspension recovery
- Cross-browser compatibility
- Safari promise polyfill

### Browser Compatibility
- WebAudio API support detection
- Vendor prefix handling
- Promise API compatibility
- Safari-specific optimizations
- Mobile device handling
- Suspension management

## References

### Core Implementation
- `script/audioLibrary.js`: Audio asset definitions
  - File paths and categories
  - Asset organization
  - Integration points
- `script/audio.js`: Audio engine
  - WebAudio context management
  - Playback control
  - Buffer management
  - Volume control
  - Error handling
  - Browser compatibility

### Integration Files
- `script/audio.js`: Audio system
  - Playback control
  - Volume management
  - State handling
- `script/engine.js`: Game engine
  - Event triggers
  - State management
  - Scene control

### Asset Organization
- `/audio/`: Sound files
  - FLAC format
  - Categorized structure
  - Optimized assets
  - Quality control 