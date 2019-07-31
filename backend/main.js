/**
 * Calculation endpoints to help with GE
 */

const {getPrice, GECategories} = require('./rsapi/api');
const mining_smithing = GECategories.Mining_and_smithing;
const arrows = GECategories.Arrows;

const PrintRuneBarProfitInfo = async () => {
    const runeBarPrice = getPrice(mining_smithing, 'rune bar');
    const runitePrice = getPrice(mining_smithing, 'runite');
    const luminitePrice = getPrice(mining_smithing, 'luminite');
    Promise.all([runeBarPrice, runitePrice, luminitePrice])
        .then(
            ([runeBarPrice, runitePrice, luminitePrice]) => {
                const profit = runeBarPrice - runitePrice - luminitePrice;
                const lines = [
                    `RuneBar: ${runeBarPrice}`,
                    `Runite ${runitePrice}`,
                    `Luminite: ${luminitePrice}`,
                    `Profit: ${profit}`

                ];
                console.log(lines.join('\n'));
            });
};

const PrintRuneArrowHeadProfitInfo = async () => {
    const runeBarPrice = getPrice(mining_smithing, 'rune bar');
    const runeArrowHeadPrice = getPrice(arrows, 'rune arrow');
    Promise.all([runeBarPrice, runeArrowHeadPrice])
        .then(([runeBarPrice, runeArrowHeadPrice]) => {
            const profit = runeArrowHeadPrice * 75 - runeBarPrice;
            const lines = [
                `RuneBar: ${runeBarPrice}`,
                `RuneArrowhead ${runeArrowHeadPrice}`,
                `Profit: ${profit}`
            ];
            console.log(lines.join('\n'));
        });
};

async function run() {
    await Promise.all([PrintRuneBarProfitInfo(), PrintRuneArrowHeadProfitInfo()])
}

run().then(() => {
});