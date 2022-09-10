const { mostUsersPostQuery } = require('../../database/queries');

const mostUsersPost = (req, res) => {
  mostUsersPostQuery().then((result) => res.json(result.rows));
};

module.exports = mostUsersPost;
