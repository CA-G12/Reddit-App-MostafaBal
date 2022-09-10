const connection = require('../config/connection');

const mostUsersPostQuery = () => connection.query('select users.id,users.username, profile_image, COUNT(posts.id) as number_Of_Posts from users join posts on users.id = posts.user_id group by users.id order by COUNT(posts.id) DESC LIMIT 5');

module.exports = { mostUsersPostQuery };
