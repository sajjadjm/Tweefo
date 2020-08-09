const fetch = require('node-fetch');
const qs = require('qs');

const tweefo = {

    GetUnique: (arr, comp) => {
    
        const unique =  arr.map(e => e[comp])
    
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        .filter((e) => arr[e]).map(e => arr[e]);
    
        return unique;
    },


    GetToken: (key, secret) => {

        const token = Buffer.from(`${key}:${secret}`, 'utf8').toString('base64');

        console.log(token);

        const body = qs.stringify({

            'grant_type': 'client_credentials'

        });

        return new Promise((resolve, reject) => {

            fetch('https://api.twitter.com/oauth2/token', {
                method: 'post',
                body:    body,
                headers: {
                    'Authorization': `Basic ${token}`, 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                }
            }).then(res => {

                resolve(res.json());

            }).catch(err => {

                resolve(err);

            });
        });
    },

    GetFollowers: (screenName, cursor, token) => {

        return new Promise((resolve, reject) => {

            fetch(`https://api.twitter.com/1.1/followers/list.json?cursor=${cursor}&screen_name=${screenName}&skip_status=true&include_user_entities=false`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(res => {
                
                resolve(res.json());
            
            }).catch(err => {

                resolve(err);

            });

        });
    },

    GetFollowings: (screenName, cursor, token) => {

        return new Promise((resolve, reject) => {

            fetch(`https://api.twitter.com/1.1/friends/list.json?cursor=${cursor}&screen_name=${screenName}&skip_status=true&include_user_entities=false`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(res => {
                
                resolve(res.json());

            }).catch(err => {

                resolve(err);

            });

        });

    },

    GetFavorites: (screenName, token) => {

        return new Promise((resolve, reject) => {

            fetch(`https://api.twitter.com/1.1/favorites/list.json?count=200&screen_name=${screenName}`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(res => {
                
                resolve(res.json());

            }).catch(err => {

                resolve(err);

            });

        });

    }

}

module.exports = tweefo;