const { addPostQuery } = require('../../database/queries');

const addPost = (req, res) => {
  const { title, content, image } = req.body;
  const userId = req.token.id;
  if (title === '' && content === '' && image === '') {
    res.json({ msg: 'You must at least add a picture, title or content', isAdded: false });
  } else {
    addPostQuery(title, content, image, userId).then((data) => {
      res.json({ msg: 'Post added successfully', isAdded: true });
    });
  }
};

module.exports = addPost;
