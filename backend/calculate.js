const {getPriceObject} = require('./rsapi/api');

const Calculate = (calculation) => {

    // checks
    if (calculation.sell === undefined || Array.isArray(calculation.sell) || typeof calculation.buy !== 'object')
        throw Error('calculation.sell incorrect');
    if (calculation.buy === undefined || !Array.isArray(calculation.buy))
        throw Error('calculation.price incorrect');
    const promises = [];
    const prices = {};

    // build async tasks to getPrices, if not duplicate, init results array
    calculation.buy.forEach(item => {
            if (!(item.name in prices)) {
                prices[item.name] = null;
                promises.push(getPriceObject(item.type, item.name));
            }
        }
    );

    if (!(calculation.sell.name in prices)) {
        prices[calculation.sell.name] = null;
        {
        }
        promises.push(getPriceObject(
            calculation.sell.type,
            calculation.sell.name
        ))
    }

    return new Promise((resolve) => Promise.all(promises)
        .then(results => {
            // store results
            results.forEach(({name, price}) => {
                prices[name] = price
            });
            calculation.buy.forEach(item => {
                item.price = prices[item.name]
            });
            calculation.sell.price = prices[calculation.sell.name];

            // calculate profit
            const sellPrice = calculation.sell.price * calculation.sell.number;
            const buyPrice = calculation.buy.map(item => {
                return item.price * item.number
            }).reduce((a, b) => a + b);
            const profit = sellPrice - buyPrice;

            const outputLines = [];

            outputLines.push(`# ${calculation.sell.name}`);
            outputLines.push(`  Profit: $${profit}`);
            calculation.buy.forEach(item => {
                outputLines.push(` - ${item.string}`);
            });
            outputLines.push(` - ${calculation.sell.string}`);


            resolve(outputLines.join('\n'));
        }).catch((e) => {console.log('Error', e)})
    );

};

const I = (type, name, number = 1) => {
    return {
        type, name, number, price: null,
        get string() {
            return `"${this.name}" x${this.number}: $${this.price}`
        }
    }
};

module.exports = {
    Calculate, I
};