const express = require('express');
const router = express.Router();
const tweefo = require('../axios/twitter-requests');

router.get('/', async (req, res) => {

    res.render('index');

});

router.post('/get_info', async (req, res) => {

    console.log(req.body);

    const token = await GetToken();
    // const result = await GetFollowings('pouya__ip', '-1', token);

    let users = new Array();
    
    if(req.body.rdo == '1')
    {
        let cursor = -1;
        
        while(cursor != 0)
        {
            const result = await GetFollowers(req.body.name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;
        }
    }
    else if(req.body.rdo == '2')
    {
        let cursor = -1;
        
        while(cursor != 0)
        {
            const result = await GetFollowings(req.body.name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;
        }
    }

    users.forEach(user => {
        console.log(user.screen_name);
    });

});

GetToken = () => {

    return new Promise((resolve, reject) => {

        tweefo.GetToken().then((response) => {

            resolve(response);

        }).catch((err) => {
    
            resolve(err);
    
        });

    });

}

GetFollowers = (screenName, cursor, response) => {
    return new Promise((resolve, reject) => {
        tweefo.GetFollowers(screenName, cursor, response.data.access_token).then((response) => {

            resolve(response.data);

        }).catch((err) => {

            resolve(err);
    
        });    
    })
}

GetFollowings = (screenName, cursor, response) => {
    return new Promise((resolve, reject) => {
        tweefo.GetFollowings(screenName, cursor, response.data.access_token).then((response) => {

            resolve(response.data);

        }).catch((err) => {

            resolve(err);
    
        });    
    })
}

module.exports = router;