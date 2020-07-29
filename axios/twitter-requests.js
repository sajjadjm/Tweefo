const axios = require('axios');
const qs = require('qs');

const tweefo = {

    GetToken: () => {

        const data = qs.stringify({

            'grant_type': 'client_credentials' 

        });

        const config = {

            method: 'post',
            url: 'https://api.twitter.com/oauth2/token',
            headers: { 
                'Authorization': 'Basic SGlxUU1aU25ZS0dWZXlrUWN4WVdnRE1tcDpjQms1a2JnV3Y4ODZKdlhrNmx6cTlXMTdpWkcySXBUalcwNWxUSGZJa3NiblllenRqTQ==', 
                'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data

        };
        console.log(JSON.stringify(config))
        return axios(config);

    },

    GetFollowers: (screenName, cursor, token) => {

        const config = {

            method: 'get',
            url: `https://api.twitter.com/1.1/followers/list.json?cursor=${cursor}&screen_name=${screenName}&skip_status=true&include_user_entities=false`,
            headers: {

                'Authorization': `Bearer ${token}`,

            }

        };

        return axios(config);

    },

    GetFollowings: (screenName, cursor, token) => {

        const config = {

            method: 'get',
            url: `https://api.twitter.com/1.1/friends/list.json?cursor=${cursor}&screen_name=${screenName}&skip_status=true&include_user_entities=false`,
            headers: {

                'Authorization': `Bearer ${token}`,

            }

        };

        return axios(config);

    }

}

module.exports = tweefo;