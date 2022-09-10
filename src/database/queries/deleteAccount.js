const connection = require('../config/connection');

const deleteAccountQuery = (id) => connection.query('delete from users where id=$1', [id]);

module.exports = { deleteAccountQuery };
