var Excel = require('exceljs');
var fs = require('fs');
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