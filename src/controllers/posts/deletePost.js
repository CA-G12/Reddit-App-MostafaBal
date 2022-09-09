const { deletePostQuery } = require('../../database/queries');

const deletePost = (req, res) => {
  console.log('in delete controller', req.params);
  const { postId } = req.params;
  deletePostQuery(postId)
    .then((postIdResult) => res.json({ msg: 'deleted successfully' }))
    .catch((err) => console.log(err));
};

module.exports = deletePost;
