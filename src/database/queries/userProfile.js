const connection = require('../config/connection');

const userProfileQuery = (id) => connection.query(`SELECT posts.id, username, profile_image, title, content, post_image, posts.user_id,
to_char(date_time,'YYYY-MM-DD at HH:MI:SS') as date_time,
coalesce (sum(votes.vote),0) as total_votes 
from users join posts on users.id = posts.user_id 
left join votes on votes.post_id = posts.id where users.id = $1
GROUP by votes.post_id, users.id, posts.id 
order by coalesce (sum(votes.vote),0) desc;`, [id]);

module.exports = { userProfileQuery };

// `select username, profile_image, data_time,
// title, content, post_image, user_id
// from posts join users on posts.user_id=users.id
// where users.id=$1`
