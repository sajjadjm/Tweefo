const tweefo = require('../axios/twitter-requests');

module.exports = {
    
    GetUnique: (arr, comp) => {
    
        const unique =  arr.map(e => e[comp])
    
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        .filter((e) => arr[e]).map(e => arr[e]);
    
        return unique;
    },

    Sleep: (ms) => {

        return new Promise(resolve => setTimeout(resolve, ms));

    }

}
