const connection = require('../config/connection');

const checkValidEmailQuery = (email) => connection.query(`select * from users where email='${email}'`);

const addUserQuery = (username, email, password) => connection.query('insert into users(username, email, password) VALUES ($1, $2, $3) RETURNING id , email', [username, email, password]);

module.exports = { checkValidEmailQuery, addUserQuery };
