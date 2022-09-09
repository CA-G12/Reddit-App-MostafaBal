const connection = require('../config/connection');

const showAllPostsQuery = () => connection.query(`SELECT posts.id, username, profile_image, title, content, post_image, posts.user_id,
to_char(data_time,'YYYY-MM-DD at HH:MI:SS') as date_time,
coalesce (sum(votes.vote),0) as total_votes 
from users join posts on users.id = posts.user_id 
left join votes on votes.post_id = posts.id 
GROUP by votes.post_id, users.id, posts.id 
order by coalesce (sum(votes.vote),0) desc;`);

module.exports = { showAllPostsQuery };

