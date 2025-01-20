# Combat System

The combat system in A Dark Room is a real-time battle system that manages encounters between the player and various enemies. This document details the mechanics and implementation of the combat system.

## Core Mechanics

### Combat Constants
```javascript
// Core timing constants
_FIGHT_SPEED: 100,        // Base tick rate in ms
_EAT_COOLDOWN: 5,         // Cooldown for eating meat
_MEDS_COOLDOWN: 7,        // Cooldown for using medicine
_HYPO_COOLDOWN: 7,        // Cooldown for using hypo
_SHIELD_COOLDOWN: 10,     // Cooldown for shield
_STIM_COOLDOWN: 10,       // Cooldown for stim boost

// Status effect durations (ms)
STUN_DURATION: 4000,      // Stun effect length
ENERGISE_MULTIPLIER: 4,   // Energy boost multiplier
EXPLOSION_DURATION: 3000, // Explosion effect
ENRAGE_DURATION: 4000,    // Enrage duration
MEDITATE_DURATION: 5000,  // Meditation length
BOOST_DURATION: 3000,     // Damage boost duration
BOOST_DAMAGE: 10,         // Extra damage from boost
DOT_TICK: 1000           // Damage over time interval

// Combat encounter chances
FIGHT_CHANCE: 0.20,      // Base encounter probability
FIGHT_DELAY: 3,          // Moves between fights
BASE_HIT_CHANCE: 0.8     // Base accuracy
```

### Damage System

#### Damage Types
```javascript
damage_types: {
    blunt: {
        stun_chance: 0.5,
        damage_multiplier: 1.0
    },
    sharp: {
        bleed_chance: 0.3,
        damage_multiplier: 1.2
    },
    fire: {
        burn_chance: 0.4,
        damage_multiplier: 1.5
    }
}
```

#### Hit Chance Modifiers
```javascript
hit_chance: {
    base: 0.8,
    modifiers: {
        'weapon.sharp': 0.1,     // Sharp weapons bonus
        'weapon.precise': 0.15,  // Precise weapons bonus
        status_stunned: -0.5     // Stunned penalty
    }
}
```

#### Damage Calculation
```javascript
damage_calculation: {
    base_damage: 'weapon.damage',
    multipliers: {
        critical: 2,
        backstab: 1.5,
        wounded: 0.5
    }
}
```

### Perk System

#### Combat Perks
```javascript
perks: {
    'boxer': {
        requirement: 50,    // 50 punches
        effect: 'doubles unarmed damage'
    },
    'martial artist': {
        requirement: 150,   // 150 punches
        effect: 'triples unarmed damage'
    },
    'unarmed master': {
        requirement: 300,   // 300 punches
        effect: 'doubles unarmed damage again and halves cooldown'
    },
    'precise': {
        effect: 'increases hit chance by 10%'
    },
    'evasive': {
        effect: 'reduces enemy hit chance by 20%'
    },
    'barbarian': {
        effect: 'increases melee damage by 50%'
    }
}
```

### Weapon System

#### Weapon Categories
- **Unarmed**: Basic attacks with special perk progression
- **Melee**: Higher damage, affected by barbarian perk
- **Ranged**: Requires ammunition, different animation

#### Weapon Definition Example
```javascript
Weapons: {
    'fists': {
        verb: _('punch'),
        type: 'unarmed',
        damage: 1,
        cooldown: 2
    },
    'iron sword': {
        verb: _('swing'),
        type: 'melee',
        damage: 4,
        cooldown: 2
    },
    'rifle': {
        verb: _('shoot'),
        type: 'ranged',
        damage: 5,
        cooldown: 1,
        cost: { 'bullets': 1 }
    }
}
```

### Enemy System

#### Enemy Types
1. **Single Character Types**
- **Basic Enemies**
```javascript
{
    enemy: 'beast',
    chara: 'R',
    damage: 3,
    hit: 0.8,
    attackDelay: 1,
    health: 25,
    notification: _('a large beast charges out of the dark'),
    loot: {
        'fur': {
            min: 1,
            max: 3,
            chance: 1.0    // Always drops
        },
        'teeth': {
            min: 1,
            max: 3,
            chance: 0.8    // Common drop
        }
    }
}
```

- **Elite Enemies**
```javascript
{
    enemy: 'soldier',
    chara: 'D',
    damage: 8,
    hit: 0.8,
    attackDelay: 2,
    health: 50,
    ranged: true,
    loot: {
        'cured meat': {
            min: 1,
            max: 5,
            chance: 0.8    // Common drop
        },
        'bullets': {
            min: 1,
            max: 5,
            chance: 0.5    // Uncommon
        },
        'rifle': {
            min: 1,
            max: 1,
            chance: 0.2    // Rare drop
        }
    },
    notification: _('a soldier opens fire')
}
```

2. **Multi-Character Types**
- **Group Enemies**
```javascript
{
    enemy: 'tentacles',
    chara: 'TTT',
    damage: 2,
    hit: 0.6,
    attackDelay: 0.5,
    health: 60,
    plural: true,
    loot: {
        'scales': {
            min: 3,
            max: 6,
            chance: 1.0    // Always drops
        },
        'teeth': {
            min: 2,
            max: 4,
            chance: 0.8    // Common drop
        }
    },
    notification: _('writhing tentacles emerge from the ground')
}
```

#### Special Abilities
```javascript
specials: [{
    delay: 7,                  // Seconds between special attacks
    action: (fighter) => {
        Events.setStatus(fighter, 'enraged');
        return 'enraged';
    }
}]
```

### Status Effects

#### Effect Types
```javascript
status_effects: {
    stun: {
        duration: 4000,
        effect: 'skip_turn'
    },
    poison: {
        duration: 10000,
        damage: 1,
        tick: 1000
    },
    burn: {
        duration: 5000,
        damage: 2,
        tick: 1000
    },
    shield: {
        effect: 'blocks_one_hit'
    },
    energised: {
        effect: 'multiplies_damage',
        multiplier: 4
    },
    meditation: {
        duration: 5000,
        effect: 'stores_damage'
    }
}
```

## Combat Flow

### Initialization
```javascript
startCombat: function(scene) {
    Events.fought = false;
    Events.won = false;
    
    // Create fighter divs
    Events.createFighterDiv('@', World.health, World.getMaxHealth())
        .attr('id', 'wanderer')
        .appendTo(fightBox);
    Events.createFighterDiv(scene.chara, scene.health, scene.health)
        .attr('id', 'enemy')
        .appendTo(fightBox);
        
    // Start enemy AI
    Events.startEnemyAttacks();
}
```

### Combat Actions

#### Attack Implementation
```javascript
useWeapon: function(btn) {
    var weaponName = btn.attr('id').substring(7).replace(/-/g, ' ');
    var weapon = World.Weapons[weaponName];
    
    // Check weapon costs
    if(weapon.cost) {
        for(var k in weapon.cost) {
            if(Path.outfit[k] < weapon.cost[k]) return;
        }
    }
    
    // Calculate damage
    var dmg = -1;
    if(Math.random() <= World.getHitChance()) {
        dmg = weapon.damage;
        // Apply perks
        if(weapon.type == 'unarmed') {
            if($SM.hasPerk('boxer')) dmg *= 2;
            if($SM.hasPerk('martial artist')) dmg *= 3;
            if($SM.hasPerk('unarmed master')) dmg *= 2;
        }
        if(weapon.type == 'melee' && $SM.hasPerk('barbarian')) {
            dmg = Math.floor(dmg * 1.5);
        }
    }
    
    // Perform attack
    var attackFn = weapon.type == 'ranged' ? Events.animateRanged : Events.animateMelee;
    attackFn($('#wanderer'), dmg);
}
```

### Death Handling
```javascript
checkPlayerDeath: () => {
    if($('#wanderer').data('hp') <= 0) {
        Events.clearTimeouts();
        Events.endEvent();
        World.die();
        return true;
    }
    return false;
}
```

## Technical Implementation

### Combat Animation
```javascript
animateMelee: function(fighter, dmg, callback) {
    var start = fighter.attr('id') == 'wanderer' ? 
        {'left': '50%'} : {'right': '50%'};
    var end = fighter.attr('id') == 'wanderer' ? 
        {'left': '25%'} : {'right': '25%'};
    
    fighter.stop(true, true).animate(start, Events._FIGHT_SPEED, function() {
        Events.damage(fighter, enemy, dmg, 'melee');
        $(this).animate(end, Events._FIGHT_SPEED, callback);
    });
}

animateRanged: function(fighter, dmg, callback) {
    var start = fighter.attr('id') == 'wanderer' ? 
        {'left': '25%'} : {'right': '25%'};
    var end = fighter.attr('id') == 'wanderer' ? 
        {'left': '50%'} : {'right': '50%'};
    
    $('<div>').css(start).addClass('bullet').text('o')
        .appendTo('#description')
        .animate(end, Events._FIGHT_SPEED * 2, 'linear', function() {
            Events.damage(fighter, enemy, dmg, 'ranged');
            $(this).remove();
            if(callback) callback();
        });
}
```

## References

### Core Implementation
- `script/events.js`: Combat system core implementation including:
  - Combat initialization and flow
  - Weapon system and attack mechanics
  - Status effects and healing
  - Enemy AI and behavior
  - Combat UI and animations
  - Loot system
- `script/world.js`: Contains weapon definitions and combat stats including:
  - Base weapon configurations
  - Damage calculations
  - Health management
  - Combat-related constants

### Integration Points
- `script/path.js`: Equipment and inventory management
- `script/state_manager.js`: Combat state tracking and persistence
