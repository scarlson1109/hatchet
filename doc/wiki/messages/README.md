# Game Messages Documentation

## Overview
This directory contains comprehensive documentation of all text messages that appear in A Dark Room. The documentation is organized to make it easy to find, update, and translate game text.

## Directory Structure
```
messages/
├── README.md          # This file
├── catalog.md         # Master list of all game messages
└── categories/        # Detailed message documentation by category
    ├── notifications.md
    ├── ui.md
    ├── events.md
    ├── combat.md
    ├── locations.md
    └── system.md
```

## Message Categories

### Notifications
Messages that appear in the notification area, including:
- State changes (fire, resources, etc.)
- Event notifications
- Achievement notifications

### UI Elements
Text that appears in the user interface:
- Button labels
- Menu items
- Status indicators
- Resource labels

### Events
Messages that appear during events:
- Event descriptions
- Character dialogue
- Scene descriptions
- Choice descriptions

### Combat
Text related to combat:
- Attack descriptions
- Combat status messages
- Enemy descriptions
- Combat results

### Locations
Text describing locations and discoveries:
- Location names
- Location descriptions
- Discovery messages
- Path descriptions

### System
System-level messages:
- Save/load notifications
- Error messages
- Tutorial text
- Settings text

## Usage

### Finding Messages
1. Use the master `catalog.md` for a complete searchable list
2. Browse category files for detailed context
3. Search by key or text content

### Adding New Messages
1. Add to appropriate category file
2. Update master catalog
3. Follow the standard format:
   ```javascript
   {
       "key": "unique_message_id",
       "text": "The actual message text",
       "category": "category_name",
       "context": "Usage description",
       "variables": ["var1", "var2"],  // If applicable
       "module": "module_name",
       "file": "source_file.js"
   }
   ```

### Translation Integration
This catalog serves as the source for translation files:
1. Extract messages using keys
2. Generate translation templates
3. Maintain consistency across languages

## Maintenance
- Keep catalog.md as the single source of truth
- Update when adding new game text
- Maintain consistent key naming
- Document all variable substitutions
- Include clear context descriptions 