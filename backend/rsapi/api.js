const req = require('request');
const constants = require('./endpoints/constants');
const querystring = require('querystring');

const getItemJSON = (geCategory, searchTerm, pageNumber=1) => {
    const parms = querystring.encode({
        category: geCategory,
        alpha: searchTerm.toLowerCase(),
        page: pageNumber
    });

    const uri = constants.BaseURL + constants.ItemRoute + parms;

    // console.log(uri);
    return new Promise((resolve, reject) => {
        req.get(uri, {}, (err, res, body) => {
            if (res.statusCode === 200) {
                resolve(JSON.parse(res.body));
            } else {
                reject(`Status code ${res.statusCode}`);
            }
        })
    })
};

const getPrice = (geCategory, searchTerm, pageNumber=1) => {

    return new Promise((resolve, reject) => {
        getItemJSON(geCategory, searchTerm, pageNumber)
            .then(json => {
                const items = json.items;
                if (items.length > 1) {
                    reject(`more than one item found... ${items.map(item => item.name)}`)
                } else if (items.length === 0 ) {
                    reject('no items found')
                } else {
                    let price = items[0].current.price;
                    if (typeof price === 'string' ) {
                        price = parseInt(price.replace(/[^0-9|^.]/g, ""));
                    }
                    resolve(price);
                }
            })
    });
};

module.exports = {
    getPrice,
    GECategories: constants.GECategories
};
