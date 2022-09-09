const connection = require('../config/connection');

const checkUserVote = (id, postId) => connection.query('select * from votes where user_id=$1 AND post_id =$2', [id, postId]);

const updateVote = (id, postId, voteValue) => connection.query(`
UPDATE votes SET vote=(select vote from votes where user_id=$1 AND post_id=$2)+$3
where user_id=$1 AND post_id =$2 RETURNING *`, [id, postId, voteValue]);

const addVoteQuery = (id, postId, voteValue) => connection.query('insert into votes ( user_id, post_id, vote) values ( $1, $2, $3 ) RETURNING *', [id, postId, voteValue]);

module.exports = { addVoteQuery, checkUserVote, updateVote };
