const connection = require('../config/connection');

const addPostQuery = (title, content, image, userId) => connection.query('insert into posts(title, content, post_image, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [title, content, image, userId]);
module.exports = { addPostQuery };
