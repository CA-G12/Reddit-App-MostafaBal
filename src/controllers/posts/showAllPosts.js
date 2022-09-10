const { showAllPostsQuery } = require('../../database/queries');

const showAllPosts = (req, res) => {
  const { userID } = req;
  // console.log(userID);
  showAllPostsQuery().then((data) => res.json({ userID: userID || null, data: data.rows }));
};

module.exports = showAllPosts;
