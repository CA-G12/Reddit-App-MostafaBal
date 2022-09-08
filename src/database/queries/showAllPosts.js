const connection = require('../config/connection');

const showAllPostsQuery = () => connection.query('select username, profile_image, data_time, title, content, post_image, user_id from posts join users on posts.user_id=users.id');

module.exports = { showAllPostsQuery };
