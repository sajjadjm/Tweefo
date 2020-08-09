var Excel = require('exceljs');

module.exports.ExportToExcel = (users) => {

        let fileName = 'export.xlsx';

        const options = {
                filename: '/home/sajjad/Project/Twitter-API/exports/' + Date.now() + fileName,
                useStyles: true,
                useSharedStrings: true
        };

        const workbook = new Excel.stream.xlsx.WorkbookWriter(options);

        const worksheet = workbook.addWorksheet('Users sheet');

        worksheet.columns = [
                { header: 'Id', key: 'id' },
                { header: 'name', key: 'name' },
                { header: 'screen name', key: 'screen_name' },
                { header: 'location', key: 'location' },
                { header: 'url', key: 'url' },
                { header: 'description', key: 'description' },
                { header: 'protected', key: 'protected' },
                { header: 'followers count', key: 'followers_count' },
                { header: 'friends count', key: 'friends_count' },
                { header: 'listed count', key: 'listed_count' },
                { header: 'created at', key: 'created_at' },
                { header: 'favourites count', key: 'favourites_count' },
                { header: 'utc offset', key: 'utc_offset' },
                { header: 'time zone', key: 'time_zone' },
                { header: 'geo enabled', key: 'geo_enabled' },
                { header: 'verified', key: 'verified' },
                { header: 'statuses count', key: 'statuses_count' },
                { header: 'lang', key: 'lang' },
                { header: 'contributors enabled', key: 'contributors_enabled' },
                { header: 'is translator', key: 'is_translator' },
                { header: 'is translation enabled', key: 'is_translation_enabled' },
                { header: 'profile background color', key: 'profile_background_color' },
                { header: 'profile background image url', key: 'profile_background_image_url' },
                { header: 'profile background image url https', key: 'profile_background_image_url_https' },
                { header: 'profile background tile', key: 'profile_background_tile' },
                { header: 'profile image url', key: 'profile_image_url' },
                { header: 'profile image url https', key: 'profile_image_url_https' },
                { header: 'profile banner url', key: 'profile_banner_url' },
                { header: 'profile link color', key: 'profile_link_color' },
                { header: 'profile sidebar border color', key: 'profile_sidebar_border_color' },
                { header: 'profile sidebar fill color', key: 'profile_sidebar_fill_color' },
                { header: 'profile text color', key: 'profile_text_color' },
                { header: 'profile use background image', key: 'profile_use_background_image' },
                { header: 'has extended profile', key: 'has_extended_profile' },
                { header: 'default profile', key: 'default_profile' },
                { header: 'default profile image', key: 'default_profile_image' },
                { header: 'following', key: 'following' },
                { header: 'follow request sent', key: 'follow_request_sent' },
                { header: 'notifications', key: 'notifications' },
                { header: 'muting', key: 'muting' },
                { header: 'blocking', key: 'blocking' },
                { header: 'blocked by', key: 'blocked_by' },
                { header: 'translator type', key: 'translator_type' },
        ]

        let data;

        for (let i = 0; i < users.length; i++) {

                data = {
                        id: users[i].id,
                        name: users[i].name,
                        screen_name: users[i].screen_name,
                        location: users[i].location,
                        url: users[i].url,
                        description: users[i].description,
                        protected: users[i].protected,
                        followers_count: users[i].followers_count,
                        friends_count: users[i].friends_count,
                        listed_count: users[i].listed_count,
                        created_at: users[i].created_at,
                        favourites_count: users[i].favourites_count,
                        utc_offset: users[i].utc_offset,
                        time_zone: users[i].time_zone,
                        geo_enabled: users[i].geo_enabled,
                        verified: users[i].verified,
                        statuses_count: users[i].statuses_count,
                        lang: users[i].lang,
                        contributors_enabled: users[i].contributors_enabled,
                        is_translator: users[i].is_translator,
                        is_translation_enabled: users[i].is_translation_enabled,
                        profile_background_color: users[i].profile_background_color,
                        profile_background_image_url: users[i].profile_background_image_url,
                        profile_background_image_url_https: users[i].profile_background_image_url_https,
                        profile_background_tile: users[i].profile_background_tile,
                        profile_image_url: users[i].profile_image_url,
                        profile_image_url_https: users[i].profile_image_url_https,
                        profile_banner_url: users[i].profile_banner_url,
                        profile_link_color: users[i].profile_link_color,
                        profile_sidebar_border_color: users[i].profile_sidebar_border_color,
                        profile_sidebar_fill_color: users[i].profile_sidebar_fill_color,
                        profile_text_color: users[i].profile_text_color,
                        profile_use_background_image: users[i].profile_use_background_image,
                        has_extended_profile: users[i].has_extended_profile,
                        default_profile: users[i].default_profile,
                        default_profile_image: users[i].default_profile_image,
                        following: users[i].following,
                        follow_request_sent: users[i].follow_request_sent,
                        notifications: users[i].notifications,
                        muting: users[i].muting,
                        blocking: users[i].blocking,
                        blocked_by: users[i].blocked_by,
                        translator_type: users[i].translator_type,
                        

                };

                worksheet.addRow(data).commit();
        }

        
        return workbook.commit();
}

module.exports.ExportToExcelFav = (favs) => {

        let fileName = 'export.xlsx';

        const options = {
                filename: '/home/sajjad/Project/Twitter-API/exports/' + Date.now() + fileName,
                useStyles: true,
                useSharedStrings: true
        };

        const workbook = new Excel.stream.xlsx.WorkbookWriter(options);

        const worksheet = workbook.addWorksheet('Favs sheet');

        worksheet.columns = [
                { header: 'created At', key: 'created_at' },
                { header: 'Id', key: 'id' },
                { header: 'text', key: 'text' },
                { header: 'location', key: 'location' },
                { header: 'truncated', key: 'truncated' },
                { header: 'source', key: 'source' },
                { header: 'in reply to status id', key: 'in_reply_to_status_id' },
                { header: 'in reply to user id', key: 'in_reply_to_user_id' },
                { header: 'in reply to screen name', key: 'in_reply_to_screen_name' },
                { header: 'user id', key: 'user_id' },
                { header: 'user name', key: 'user_name' },
                { header: 'user screen name', key: 'user_screen_name' },
                { header: 'user location', key: 'user_location' },
                { header: 'user description', key: 'user_description' },
                { header: 'user url', key: 'user_url' },
                { header: 'user protected', key: 'user_protected' },
                { header: 'user followers count', key: 'user_followers_count' },
                { header: 'user friends count', key: 'user_friends_count' },
                { header: 'user listed count', key: 'user_listed_count' },
                { header: 'user created at', key: 'user_created_at' },
                { header: 'user favourites count', key: 'user_favourites_count' },
                { header: 'user utc offset', key: 'user_utc_offset' },
                { header: 'user time zone', key: 'time_zone' },
                { header: 'user geo enabled', key: 'geo_enabled' },
                { header: 'user verified', key: 'verified' },
                { header: 'user statuses count', key: 'statuses_count' },
                { header: 'user lang', key: 'lang' },
                { header: 'user contributors enabled', key: 'contributors_enabled' },
                { header: 'user is translator', key: 'is_translator' },
                { header: 'user is translation enabled', key: 'is_translation_enabled' },
                { header: 'user profile background color', key: 'profile_background_color' },
                { header: 'user profile background image url', key: 'profile_background_image_url' },
                { header: 'user profile background image url https', key: 'profile_background_image_url_https' },
                { header: 'user profile background tile', key: 'profile_background_tile' },
                { header: 'user profile image url', key: 'profile_image_url' },
                { header: 'user profile image url https', key: 'profile_image_url_https' },
                { header: 'user profile banner url', key: 'profile_banner_url' },
                { header: 'user profile link color', key: 'profile_link_color' },
                { header: 'user profile sidebar border color', key: 'profile_sidebar_border_color' },
                { header: 'user profile sidebar fill color', key: 'profile_sidebar_fill_color' },
                { header: 'user profile text color', key: 'profile_text_color' },
                { header: 'user profile use background image', key: 'profile_use_background_image' },
                { header: 'user has extended profile', key: 'has_extended_profile' },
                { header: 'user default profile', key: 'default_profile' },
                { header: 'user default profile image', key: 'default_profile_image' },
                { header: 'user following', key: 'following' },
                { header: 'user follow request sent', key: 'follow_request_sent' },
                { header: 'user notifications', key: 'notifications' },
                { header: 'user muting', key: 'muting' },
                { header: 'user blocking', key: 'blocking' },
                { header: 'user blocked by', key: 'blocked_by' },
                { header: 'user translator type', key: 'translator_type' },
        ]

        let data;

        for (let i = 0; i < favs.length; i++) {

                data = {
                        created_at: favs[i].created_at,
                        id: favs[i].id.toString(),
                        text: favs[i].text.toString(),
                        location: favs[i].location,
                        truncated: favs[i].truncated,
                        source: favs[i].source,
                        in_reply_to_status_id: favs[i].in_reply_to_status_id,
                        in_reply_to_user_id: favs[i].in_reply_to_user_id,
                        in_reply_to_screen_name: favs[i].in_reply_to_screen_name,
                        user_id: favs[i].user.id.toString(),
                        user_name: favs[i].user.name,
                        user_screen_name: favs[i].user.screen_name,
                        user_location: favs[i].user.location,
                        user_url: favs[i].user.url,
                        user_description: favs[i].user.description,
                        user_protected: favs[i].user.protected,
                        user_followers_count: favs[i].user.followers_count,
                        user_friends_count: favs[i].user.friends_count,
                        user_listed_count: favs[i].user.listed_count,
                        user_created_at: favs[i].user.created_at,
                        user_favourites_count: favs[i].user.favourites_count,
                        user_utc_offset: favs[i].user.utc_offset,
                        time_zone: favs[i].user.time_zone,
                        geo_enabled: favs[i].user.geo_enabled,
                        verified: favs[i].user.verified,
                        statuses_count: favs[i].user.statuses_count,
                        lang: favs[i].user.lang,
                        contributors_enabled: favs[i].user.contributors_enabled,
                        is_translator: favs[i].user.is_translator,
                        is_translation_enabled: favs[i].user.is_translation_enabled,
                        profile_background_color: favs[i].user.profile_background_color,
                        profile_background_image_url: favs[i].user.profile_background_image_url,
                        profile_background_image_url_https: favs[i].user.profile_background_image_url_https,
                        profile_background_tile: favs[i].user.profile_background_tile,
                        profile_image_url: favs[i].user.profile_image_url,
                        profile_image_url_https: favs[i].user.profile_image_url_https,
                        profile_banner_url: favs[i].user.profile_banner_url,
                        profile_link_color: favs[i].user.profile_link_color,
                        profile_sidebar_border_color: favs[i].user.profile_sidebar_border_color,
                        profile_sidebar_fill_color: favs[i].user.profile_sidebar_fill_color,
                        profile_text_color: favs[i].user.profile_text_color,
                        profile_use_background_image: favs[i].user.profile_use_background_image,
                        has_extended_profile: favs[i].user.has_extended_profile,
                        default_profile: favs[i].user.default_profile,
                        default_profile_image: favs[i].user.default_profile_image,
                        following: favs[i].user.following,
                        follow_request_sent: favs[i].user.follow_request_sent,
                        notifications: favs[i].user.notifications,
                        muting: favs[i].user.muting,
                        blocking: favs[i].user.blocking,
                        blocked_by: favs[i].user.blocked_by,
                        translator_type: favs[i].user.translator_type,
                        

                };

                worksheet.addRow(data).commit();
        }

        
        return workbook.commit();

}