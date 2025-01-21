import { readFileSync, readdirSync, statSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import { join, basename } from 'path';

// Configuration
const SOURCE_DIR = '../../../script';
const CATEGORIES_DIR = './categories';

// Regex for finding translated strings
const TRANSLATION_REGEX = /_\(['"](.+?)['"]\)/g;

// Category patterns for auto-categorization
const CATEGORIES = {
    notification: {
        pattern: /Notifications\.notify|\.notify|notification:/,
        file: 'notifications.md'
    },
    ui: {
        pattern: /\.text\(|\.attr\(|button|title|name:|text:|\.appendTo|\.html\(|\.addClass/,
        file: 'ui.md'
    },
    building: {
        pattern: /Buildings\.|\.build|buildMsg|availableMsg/,
        file: 'building.md'
    },
    crafting: {
        pattern: /craftable|craft\.|buildMsg/,
        file: 'crafting.md'
    },
    combat: {
        pattern: /combat:|enemy:|damage|attack|hp|health|weapon|armour|shield/i,
        file: 'combat.md'
    },
    event: {
        pattern: /scenes:|scene:|buttons:|notification:|loot:|reward:|cost:|availableScenes/,
        file: 'events.md'
    },
    location: {
        pattern: /location:|distance:|path:|map:|world\.|tile|terrain/i,
        file: 'locations.md'
    },
    status: {
        pattern: /status:|state:|cooldown:|delay:|timer:|income:|stores\.|population\./i,
        file: 'status.md'
    }
};

// Store for found strings
const foundStrings = {
    notification: [],
    ui: [],
    building: [],
    crafting: [],
    combat: [],
    event: [],
    location: [],
    status: [],
    uncategorized: []
};

function findJsFiles(dir) {
    const files = [];
    const items = readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...findJsFiles(fullPath));
        } else if (item.endsWith('.js')) {
            files.push(fullPath);
        }
    });
    
    return files;
}

function extractContext(content, match, index) {
    // Get 3 lines before and after for context
    const lines = content.split('\n');
    const lineNo = content.substr(0, index).split('\n').length;
    const start = Math.max(0, lineNo - 3);
    const end = Math.min(lines.length, lineNo + 3);
    return lines.slice(start, end).join('\n');
}

function categorizeString(str, context, file) {
    const module = basename(file, '.js');
    
    // Check each category's patterns
    for (const [category, info] of Object.entries(CATEGORIES)) {
        if (info.pattern.test(context)) {
            return {
                category,
                module,
                file: basename(file),
                context: context.trim()
            };
        }
    }
    
    return {
        category: 'uncategorized',
        module,
        file: basename(file),
        context: context.trim()
    };
}

function processFile(filePath) {
    const content = readFileSync(filePath, 'utf8');
    let match;
    
    while ((match = TRANSLATION_REGEX.exec(content)) !== null) {
        const str = match[1];
        const context = extractContext(content, match[0], match.index);
        const category = categorizeString(str, context, filePath);
        
        const entry = {
            text: str,
            context: category.context,
            module: category.module,
            file: category.file
        };
        
        foundStrings[category.category].push(entry);
    }
}

function generateMarkdown(category, strings) {
    let md = `# ${category.charAt(0).toUpperCase() + category.slice(1)} Messages\n\n`;
    
    // Group by module
    const byModule = {};
    strings.forEach(str => {
        if (!byModule[str.module]) {
            byModule[str.module] = [];
        }
        byModule[str.module].push(str);
    });
    
    // Generate tables for each module
    for (const [module, moduleStrings] of Object.entries(byModule)) {
        md += `## ${module.charAt(0).toUpperCase() + module.slice(1)} Module\n\n`;
        md += '| Key | Text | Context | Variables | Module | File |\n';
        md += '|-----|------|---------|-----------|---------|------|\n';
        
        moduleStrings.forEach(str => {
            const key = `${str.module}.${category}.${str.text.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`;
            const variables = str.text.includes('{') ? str.text.match(/\{(\d+)\}/g)?.join(', ') || '-' : '-';
            md += `| \`${key}\` | "${str.text}" | ${str.context.split('\n')[0]} | ${variables} | ${str.module} | ${str.file} |\n`;
        });
        
        md += '\n';
    }
    
    return md;
}

function generateCatalog(strings) {
    let md = '# Game Message Catalog\n\n';
    md += '## Overview\n';
    md += 'This document catalogs all text messages that appear in the game, organized by category and context.\n\n';
    
    // Add statistics
    md += '## Statistics\n';
    for (const [category, items] of Object.entries(strings)) {
        if (items.length > 0) {
            md += `- ${category}: ${items.length} messages\n`;
        }
    }
    md += '\n';
    
    return md;
}

// Main execution
console.log('Finding JS files...');
const files = findJsFiles(SOURCE_DIR);

console.log('Processing files...');
files.forEach(file => {
    console.log(`Processing ${basename(file)}...`);
    processFile(file);
});

console.log('Generating documentation...');

// Ensure categories directory exists
if (!existsSync(CATEGORIES_DIR)) {
    mkdirSync(CATEGORIES_DIR, { recursive: true });
}

// Generate category files
for (const [category, strings] of Object.entries(foundStrings)) {
    if (strings.length > 0) {
        const md = generateMarkdown(category, strings);
        writeFileSync(join(CATEGORIES_DIR, `${category}.md`), md);
    }
}

// Generate catalog
const catalog = generateCatalog(foundStrings);
writeFileSync('catalog.md', catalog);

console.log('Done!');
