const tweefo = require('../axios/twitter-requests');
const excel = require('../helpers/excel');

module.exports = {
    
    StartGettingFollowers: (users, name, token) => {

        let cursor = -1;
        
        const requestLoop = setInterval( async () => {

            const result = await tweefo.GetFollowers(name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;

            if(cursor == 0)
            {
                users = tweefo.GetUnique(users, 'screen_name');

                excel.ExportToExcel(users).then( () => {

                    clearInterval(requestLoop);
                    alert('Your file is ready!');

                });
            }

        }, 60000);

    },

    StartGettingFollowings: (users, name, token) => {

        let cursor = -1;
        
        const requestLoop = setInterval( async () => {

            const result = await tweefo.GetFollowings(name, cursor, token);
            users = users.concat(result.users);
            cursor = result.next_cursor;

            if(cursor == 0)
            {
                users = GetUnique(users, 'screen_name');

                excel.ExportToExcel(users).then( () => {

                    clearInterval(requestLoop);

                });
            }

        }, 60000);

    },

    StartGettingFavorites: async (favs, name, token) => {

        const result = await tweefo.GetFavorites(name, token);
        favs = favs.concat(result);

        console.log(favs[1].user.name);

        excel.ExportToExcelFav(favs);
        
    }

}
