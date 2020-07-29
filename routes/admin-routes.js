const express = require('express');
const router = express.Router();
const tweefo = require('../axios/twitter-requests');

router.get('/', async (req, res) => {

    const token = await GetToken();

    const result = await GetFollowings('pouya__ip', '-1', token);

    console.log(result);

    res.render('index');

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