const categories = {
    notification: {
        pattern: /notification|notify|alert/i,
        file: 'notification.md'
    },
    ui: {
        pattern: /button|title|label|tab|header/i,
        file: 'ui.md'
    },
    building: {
        pattern: /build|construct|upgrade|reinforce/i,
        file: 'building.md'
    },
    crafting: {
        pattern: /craft|make|create/i,
        file: 'crafting.md'
    },
    resource: {
        pattern: /wood|fur|iron|steel|coal|sulphur|scales|teeth|meat|cloth|leather|alloy|bullets|charm|energy cell|medicine|cured meat/i,
        file: 'resource.md'
    },
    combat: {
        pattern: /attack|fight|damage|miss|stunned|weapon|armour|rifle|bayonet|grenade/i,
        file: 'combat.md'
    },
    event: {
        pattern: /scene|event|description|corridor|chamber|battle|creature|wanderer|stranger|builder|camp|ruins/i,
        file: 'event.md'
    },
    location: {
        pattern: /compass points|north|south|east|west|troposphere|stratosphere|mesosphere|thermosphere|exosphere|space/i,
        file: 'location.md'
    },
    error: {
        pattern: /not enough|invalid|failed/i,
        file: 'error.md'
    },
    status: {
        pattern: /state|condition|status/i,
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
    resource: [],
    uncategorized: []
}; 