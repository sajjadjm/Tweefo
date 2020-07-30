const tweefo = require('../axios/twitter-requests');

module.exports = {

    GetToken: (key, secret) => {

        return new Promise((resolve, reject) => {
    
            tweefo.GetToken(key, secret).then((response) => {
    
                resolve(response);
    
            }).catch((err) => {
        
                resolve(err);
        
            });
    
        });
    
    },
    
    GetFollowers: (screenName, cursor, response) => {
        return new Promise((resolve, reject) => {
            tweefo.GetFollowers(screenName, cursor, response.data.access_token).then((response) => {
    
                resolve(response.data);
    
            }).catch((err) => {
    
                resolve(err);
        
            });    
        })
    },
    
    GetFollowings: (screenName, cursor, response) => {
        return new Promise((resolve, reject) => {
            tweefo.GetFollowings(screenName, cursor, response.data.access_token).then((response) => {
    
                resolve(response.data);
    
            }).catch((err) => {
    
                resolve(err);
        
            });    
        })
    },
    
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
