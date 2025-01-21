# A Dark Room - Game Documentation

Welcome to the comprehensive documentation for A Dark Room. This wiki covers technical implementation details, gameplay mechanics, and narrative elements.

## Quick Start Guides

### For Players
- [Combat Guide](gameplay/combat.md#combat-flow)
- [Resource Management](gameplay/resources.md#core-mechanics)
- [Location Guide](gameplay/locations.md#world-system)
- [Crafting Guide](gameplay/crafting.md#crafting-system)

### For Developers
- [Event Creation](gameplay/events/encounters.md#event-creation-guidelines)
- [State Management](core/state.md#technical-implementation)
- [Translation System](technical/translation.md#core-mechanics)
- [Save System](technical/save-system.md#technical-features)

## Narrative Elements

### Storylines
- [Main Path](narrative/storylines/main_path.md) - Primary game progression and story
- [Alternate Paths](narrative/storylines/alternate_paths.md) - Optional story branches and choices
- [Hidden Events](narrative/storylines/hidden_events.md) - Secret encounters and discoveries

### Story Elements
- [Location Stories](narrative/story_elements/location_stories.md) - Location-based narratives and progression
- [Character Arcs](narrative/story_elements/character_arcs.md) - Character development and interactions
- [World Evolution](narrative/story_elements/world_evolution.md) - World state changes and consequences

### Mechanics Narrative
- [Resource Progression](narrative/mechanics_narrative/resource_progression.md) - Resource gathering and evolution
- [Technology Progression](narrative/mechanics_narrative/technology_progression.md) - Technology advancement and discoveries

## Core Systems

### Engine & State
- [Game Engine](core/engine.md) - Core game loop and initialization
- [State Management](core/state.md) - Game state tracking and persistence
- [Event System](core/events.md) - Event handling and management
- [Save System](technical/save-system.md) - Game saving and loading

### UI & Audio
- [UI Components](core/ui.md) - Interface elements and management
- [Audio System](core/audio.md) - Sound effects and music
- [Audio Library](technical/audio-library.md) - Sound asset management
- [Notifications](core/notifications.md) - User feedback system

### Localization
- [Translation Guide](technical/translation.md) - Localization system
- [Dropbox Integration](technical/dropbox.md) - Cloud save functionality

## Gameplay Systems

### Core Mechanics
- [Combat System](gameplay/combat.md) - Combat mechanics and balance
- [Crafting System](gameplay/crafting.md) - Item creation and upgrades
- [Resources](gameplay/resources.md) - Resource management
- [Locations](gameplay/locations.md) - World exploration

### Event System
- [Random Encounters](gameplay/events/encounters.md) - Combat and exploration events
  - Combat mechanics
  - Enemy types
  - Loot system
- [Global Events](gameplay/events/global.md) - World-changing events
  - Event timing
  - Event pools
  - State integration
- [Room Events](gameplay/events/room.md) - Base management events
  - Trading system
  - Builder events
  - Resource events
- [Set Pieces](gameplay/events/setpieces.md) - Story-driven encounters
  - Scene branching
  - Multi-stage events
  - Special rewards

## Game Modules

### Core Modules
- [Room](modules/room.md) - Base building and management
  - Fire mechanics
  - Building system
  - Resource generation
- [Outside](modules/outside.md) - World exploration
  - Gathering system
  - Worker management
  - Location discovery

### Advanced Modules
- [Path](modules/path.md) - Journey mechanics
- [Ship](modules/ship.md) - Space vessel management
- [Space](modules/space.md) - Endgame content
- [Fabricator](modules/fabricator.md) - Advanced crafting

## Technical Reference
- [Integration Points](technical/integration.md) - System interconnections
- [Performance Guide](technical/performance.md) - Optimization tips
- [Error Handling](technical/errors.md) - Error management

## Contributing
- [Style Guide](contributing/style.md) - Code formatting
- [Testing Guide](contributing/testing.md) - Test procedures
- [Documentation Guide](contributing/documentation.md) - Documentation standards
