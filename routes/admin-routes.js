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
        let cursor = -1;
        
        const requestLoop = setInterval( async () => {

            const result = await tweefo.GetFollowers(req.body.name, cursor, token.access_token);
            users = users.concat(result.users);
            cursor = result.next_cursor;

            if(cursor == 0)
            {
                users = helpers.GetUnique(users, 'screen_name');

                excel.ExportToExcel(users, res).then( () => {

                    res.redirect('/');
                    console.log('hello')
                    clearInterval(requestLoop);

                });
            }

        }, 60000);

    }
    else if(req.body.rdo == '2')
    {
        let cursor = -1;
        
        const requestLoop = setInterval( async () => {

            const result = await tweefo.GetFollowings(req.body.name, cursor, token.access_token);
            users = users.concat(result.users);
            cursor = result.next_cursor;

            if(cursor == 0)
            {
                users = helpers.GetUnique(users, 'screen_name');

                excel.ExportToExcel(users, res).then( () => {

                    console.log(users.length);
                    res.redirect('/');
                    clearInterval(requestLoop);

                });
            }

        }, 60000);
    }

});

module.exports = router;