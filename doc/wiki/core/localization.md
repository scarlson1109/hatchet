# Localization System

The Localization system in A Dark Room provides comprehensive internationalization support, managing translations for game text, resource names, and UI elements across multiple languages.

## Core Mechanics

### Translation Function
```javascript
// Basic translation
_('some text')  // Returns translated text in current language

// Resource names
_('wood')       // Translates resource name
_('fur')        // Translates material name
_('iron')       // Translates mineral name

// Status messages
_('not enough wood')     // Translates status message
_('saved.')             // Translates system message

// Directional messages
_('the compass points north')  // Translates compass directions
```

### Language Support
- Multiple language support through language files
- Language-specific CSS for visual adjustments
- Right-to-left (RTL) language support
- Font fallbacks for special characters
- Language detection and switching

### Resource Categories
- Basic Resources: wood, fur, meat
- Refined Materials: leather, iron, steel
- Advanced Materials: alien alloy, energy cell
- Consumables: bullets, medicine, torch
- Special Items: charm, compass, scales

### Message Categories
- Resource Names
- Status Messages
- System Messages
- Directional Information
- Error Messages
- Worker Types
- Building Names

## Technical Implementation

### Translation Files
```
/lang/
├── adarkroom.pot         # Translation template
├── langs.js             # Language definitions
├── [lang_code]/         # Language-specific directories
│   ├── strings.po       # Translated strings
│   └── main.css         # Language-specific styles
```

### Translation Management
- POEdit compatible string marking
- Automatic string extraction
- Translation template generation
- Language file compilation
- Dynamic string loading

### Style Management
- Language-specific CSS files
- Font family definitions
- Text direction support
- Character spacing adjustments
- Line height modifications

## Integration Points

### Engine Integration
- Dynamic string loading
- Language switching support
- Save system integration
- State persistence

### UI Integration
- Automatic text replacement
- RTL layout support
- Font loading system
- Style application
- Dynamic text sizing

### Module Integration
- Resource name translation
- Event text localization
- Button text translation
- Notification localization
- Error message translation

## Technical Features

### Performance Optimization
- Lazy loading of language files
- CSS optimization per language
- Font subsetting for efficiency
- Cache management
- Memory efficient string storage

### Error Handling
- Missing translation fallbacks
- Character encoding management
- Font loading failures
- Invalid language codes
- RTL/LTR conflicts

## References

### Core Implementation
- `script/localization.js`: Localization system implementation
  - Translation function
  - String management
  - Language support
  - POEdit integration

### Resource Files
- `lang/adarkroom.pot`: Translation template
  - String definitions
  - Context information
  - Metadata
- `lang/langs.js`: Language configuration
  - Supported languages
  - Language metadata
  - Font definitions

### Language Files
- `lang/[lang_code]/strings.po`: Language translations
  - Translated strings
  - Language-specific metadata
  - Translation context
- `lang/[lang_code]/main.css`: Language styles
  - Font configurations
  - Text adjustments
  - RTL support 