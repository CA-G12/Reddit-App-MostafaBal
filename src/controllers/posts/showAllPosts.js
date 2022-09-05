const { showAllPostsQuery } = require('../../database/queries');

const showAllPosts = (req, res) => {
  showAllPostsQuery().then((data) => res.json(data.rows) /* console.log(data.rows) */);
};

module.exports = showAllPosts;
