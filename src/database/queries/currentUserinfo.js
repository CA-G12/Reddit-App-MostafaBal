const connection = require('../config/connection');

const currentUserinfoQuery = (id) => connection.query(`select id, username,profile_image from users where id= '${id}'`);
;

module.exports = { currentUserinfoQuery };
