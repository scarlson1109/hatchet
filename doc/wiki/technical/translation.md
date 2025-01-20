# Translation System

The translation system in A Dark Room provides comprehensive internationalization support through a combination of gettext-based tools and JavaScript implementation. This document details the technical implementation and workflow for managing translations.

## Core Components

### Translation Engine
```javascript
// Core translation function
function _(message) {
    // Translates strings using loaded language data
    return translated[message] || message;
}

// Language initialization
var lang = decodeURIComponent(
    (new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)')
        .exec(location.search) || [,""])[1]
        .replace(/\+/g, '%20')
) || null;
```

### Language Catalog
```javascript
// Language definitions
var langs = {
    'cs': 'czech',
    'de': 'deutsch',
    'el': 'ελληνικά',
    'en': 'english',
    'eo': 'esperanto',
    'es': 'español',
    'fr': 'français',
    'gl': 'galego',
    'id': 'bahasa indonesia',
    'it': 'italiano',
    'ja': '日本語',
    'ko': '한국어',
    'nb': 'norsk',
    'pl': 'polski',
    'pt': 'português',
    'pt_br': 'português (brasil)',
    'ru': 'русский',
    'th': 'ไทย',
    'vi': 'tiếng việt',
    'zh_cn': '简体中文',
    'zh_tw': '繁體中文'
};
```

## Translation Workflow

### 1. String Extraction
```bash
# Ubuntu/Linux
pybabel extract -F babel.cfg -c "TRANSLATORS" script > lang/adarkroom.pot

# Windows/Mac
# Use poedit: Catalog -> New Catalog from POT file...
```

### 2. Translation File Creation
```bash
# Create new language directory
mkdir lang/{new_language_code}

# Initialize PO file
msginit --locale {locale} -i lang/adarkroom.pot -o lang/{new_language}/strings.po
```

### 3. Translation Process
```javascript
// Example translation strings
{
    "wood": "木材",           // Japanese
    "iron": "ferro",         // Portuguese
    "steel": "stahl",        // German
    "coal": "煤",            // Chinese
    "sulphur": "硫黄",       // Japanese
    "medicine": "藥劑"       // Traditional Chinese
}
```

## Technical Implementation

### String Management
```javascript
// Localization keywords for poedit
var keywords = [ 
    _('saved.'),
    _('wood'),
    _('builder'),
    _('teeth'),
    // ... more strings
];
```

### Language Loading
```javascript
// Load language from URL or localStorage
if(typeof Storage != 'undefined' && localStorage) {
    if(localStorage.lang) {
        Engine.switchLanguage(localStorage.lang);
    }
}
```

### CSS Localization
```css
/* Language-specific CSS overrides */
.button.build:before {
    content: _('build:');
}

.button.build:hover:before {
    content: _('build:');
}
```

## Integration Features

### Language Selection
```javascript
// Language switcher UI
var customSelect = $('<span>')
    .addClass('customSelect')
    .addClass('menuBtn')
    .appendTo(menu);

$.each(langs, function(name, display) {
    $('<li>')
        .text(display)
        .attr('data-language', name)
        .on("click", function() { 
            Engine.switchLanguage(this); 
        })
        .appendTo(optionsList);
});
```

### State Management
```javascript
// Save language preference
saveLanguage: function() {
    var lang = decodeURIComponent(
        (new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)')
            .exec(location.search) || [,""])[1]
            .replace(/\+/g, '%20')
    ) || null;
    
    if(lang && typeof Storage != 'undefined' && localStorage) {
        localStorage.lang = lang;
    }
}
```

## Development Tools

### Required Tools
1. **gettext**: Translation file management
   - Ubuntu: `apt-get install gettext`
   - Windows/Mac: Use Poedit

2. **Poedit**: Translation editor
   - All platforms: http://poedit.net/

3. **Python**: Script support
   - Required for PO to JS conversion
   - Includes polib module

### File Structure
```
lang/
├── adarkroom.pot     # Translation template
├── langs.js          # Language definitions
├── {language_code}/  # Language-specific directory
│   ├── strings.po    # Translation strings
│   └── main.css      # Language-specific styles
└── README.md         # Translation guide
```

## Technical Considerations

### 1. String Management
- All UI strings must use `_()` function
- CSS strings require localization.js updates
- Support for HTML content in translations
- Plural form handling

### 2. Performance
- Lazy loading of language files
- CSS optimization for RTL languages
- Memory management for language switching

### 3. Browser Support
- Fallback for missing translations
- RTL text rendering
- Unicode support
- Font loading strategy

### 4. Maintenance
- Regular template updates
- Translation memory
- Context preservation
- Version control integration

## References

### Core Implementation
- `script/localization.js`: Core translation engine
  - Translation function
  - String management
  - CSS localization
  - Keyword definitions

### Language Files
- `lang/langs.js`: Language catalog
  - Language codes
  - Display names
  - Supported languages

### Translation Tools
- `tools/po2js.py`: Conversion utility
  - PO to JS conversion
  - String extraction
  - Format validation

### Integration Points
- `script/engine.js`: Game engine integration
  - Language switching
  - State management
  - UI updates

### Style Management
- `lang/{language}/main.css`: Language-specific styles
  - RTL support
  - Font specifications
  - Layout adjustments
