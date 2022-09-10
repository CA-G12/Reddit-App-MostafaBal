const { deletePostQuery } = require('../../database/queries');

const deletePost = (req, res) => {
  const { postId } = req.params;
  deletePostQuery(postId)
    .then((postIdResult) => res.json({ msg: 'deleted successfully' }))
    .catch((err) => console.log(err));
};

module.exports = deletePost;
