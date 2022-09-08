const connection = require('../config/connection');

const userProfileQuery = (id) => connection.query(`select username, profile_image, data_time, 
title, content, post_image, user_id 
from posts join users on posts.user_id=users.id 
where users.id=$1`, [id]);

module.exports = { userProfileQuery };
