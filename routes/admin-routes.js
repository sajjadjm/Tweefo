const express = require('express');
const router = express.Router();
const tweefo = require('../helpers/helpers');

router.get('/', async (req, res) => {

    res.render('index');

});

router.post('/get_info', async (req, res) => {

    console.log(req.body);

    const token = await tweefo.GetToken(req.body.key, req.body.secret);

    let users = new Array();
    
    if(req.body.rdo == '1')
    {
        let cursor = -1;
        
        while(cursor != 0)
        {
            const result = await tweefo.GetFollowers(req.body.name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;
            if(cursor == 0)
            {
                break;
            }
            // await tweefo.Sleep(60000);
        }
    }
    else if(req.body.rdo == '2')
    {
        let cursor = -1;
        
        while(cursor != 0)
        {
            const result = await tweefo.GetFollowings(req.body.name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;
            if(cursor == 0)
            {
                break;
            }
            // await tweefo.Sleep(60000);
        }
    }

    users = tweefo.GetUnique(users, 'screen_name');

    console.log(users.length);
    res.redirect('/');

});

module.exports = router;