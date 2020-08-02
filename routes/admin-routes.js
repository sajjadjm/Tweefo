const express = require('express');
const router = express.Router();
const tweefo = require('../axios/twitter-requests');
const helpers = require('../helpers/helpers');
const excel = require('../helpers/excel');


router.get('/', async (req, res) => {

    res.render('index');

});

router.post('/get_info', async (req, res) => {

    console.log(req.body);

    let users = new Array();

    const token = await tweefo.GetToken(req.body.key, req.body.secret);

    console.log(token);

    if(req.body.rdo == '1')
    {
        
        helpers.StartGettingFollowers(users, req.body.name, token.access_token);
        res.redirect('/');

    }
    else if(req.body.rdo == '2')
    {
        helpers.StartGettingFollowings(users, req.body.name, token.access_token);
        res.redirect('/');
    }

});



module.exports = router;