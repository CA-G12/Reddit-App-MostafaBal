const connection = require('../config/connection');

const deletePostQuery = (id) => connection.query('delete from posts where posts.id = $1', [id]);

module.exports = { deletePostQuery };
