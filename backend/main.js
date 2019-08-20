/**
 * Calculation endpoints to help with GE
 */

const {GECategories:G} = require('./rsapi/api');
const {Calculate, I} = require('./calculate');

const calculations = [
    {
        buy: [I(G.Mining_and_smithing, 'Banite ore', 2)],
        sell: I(G.Mining_and_smithing, 'Bane bar')
    },

    {
        buy: [I(G.Mining_and_smithing, 'Runite'), I(G.Mining_and_smithing,'Luminite')],
        sell: I(G.Mining_and_smithing, 'Rune bar')
    },

    {
        buy: [I(G.Mining_and_smithing, 'Drakolith'), I(G.Mining_and_smithing,'Orichalcite ore')],
        sell: I(G.Mining_and_smithing, 'Orikalkum bar')
    },

    {
        buy: [I(G.Mining_and_smithing, 'Necrite ore'), I(G.Mining_and_smithing,'Phasmatite')],
        sell: I(G.Mining_and_smithing, 'Necronium bar')
    },
    // {
    //     buy: [I(G.Mining_and_smithing, 'Rune bar')],
    //     sell: I(G.Arrows, 'Rune arrow', 75)
    // },
    // {
    //     buy: [I(G.Crafting_materials, 'Blue dragonhide')],
    //     sell: I(G.Crafting_materials, 'Blue dragon leather')
    // },
    // {
    //     buy: [I(G.Crafting_materials, 'Black dragonhide')],
    //     sell: I(G.Crafting_materials, 'Black dragon leather')
    // },
    // {
    //     buy: [I(G.Crafting_materials, 'Green dragonhide')],
    //     sell: I(G.Crafting_materials, 'Green dragon leather')
    // },
    // {
    //     buy: [I(G.Crafting_materials, 'Red dragonhide')],
    //     sell: I(G.Crafting_materials, 'Red dragon leather')
    // }
];

async function run() {
    const promises = [];
    calculations.forEach(calc => {
        promises.push(Calculate(calc));
    });
    Promise.all(promises)
        .then(results => {
            results.forEach(result => {
                console.log(result);
            })
        })
}

run().then(() => {
});