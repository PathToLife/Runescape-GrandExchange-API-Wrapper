

/**
 * Calculation endpoints to help with GE
 */

const {getPrice, GECategories} = require('./rsapi/api');
const mining_smithing = GECategories.Mining_and_smithing;
const arrows = GECategories.Arrows;

const getRuneBarProfit = async() => {
    const runeBarPrice = await getPrice(mining_smithing, 'rune bar');
    const runitePrice = await getPrice(mining_smithing, 'runite');
    const luminitePrice = await getPrice(mining_smithing, 'luminite');
    const profit = runeBarPrice - runitePrice - luminitePrice;
    return profit;
};

const getRuneArrowHeadProfit = async() => {
    const runeBarPrice = await getPrice(mining_smithing, 'rune bar');
    const runeArrowHeadPrice = await getPrice(arrows, 'rune arrow');
    return runeArrowHeadPrice * 75 - runeBarPrice;
};

async function run() {
    console.log(`Rune Bar Profit = ${await getRuneBarProfit()}`);
    console.log(`Rune ArrowHead Profit = ${await getRuneArrowHeadProfit()}`);
}

run();