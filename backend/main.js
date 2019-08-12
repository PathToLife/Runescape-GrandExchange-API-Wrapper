/**
 * Calculation endpoints to help with GE
 */

const {GECategories} = require('./rsapi/api');
const {Calculate, I} = require('./calculate');

const mining_smithing = GECategories.Mining_and_smithing;
const arrows = GECategories.Arrows;
const calculations = [
    {
        buy: [I(mining_smithing, 'banite ore', 2)],
        sell: I(mining_smithing, 'bane bar')
    },
    {
        buy: [I(mining_smithing, 'rune bar')],
        sell: I(arrows, 'rune arrow')
    },
    {
        buy: [I(mining_smithing, 'runite'), I(mining_smithing,'luminite')],
        sell: I(mining_smithing, 'rune bar')
    }
];

async function run() {
    calculations.forEach(calc => {
        Calculate(calc)
    })
}

run().then(() => {
});