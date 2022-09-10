const connection = require('../config/connection');

const currentUserinfoQuery = (id) => connection.query(`select id, to_char(account_time,'YYYY-MM-DD at HH:MI:SS') as account_time, username, profile_image from users where id= '${id}'`);

module.exports = { currentUserinfoQuery };
