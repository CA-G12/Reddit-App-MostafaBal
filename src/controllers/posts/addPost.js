const { addPostQuery } = require('../../database/queries');

const addPost = (req, res) => {
  const { title, content, image } = req.body;
  const userId = req.token.id
  addPostQuery(title, content, image, userId).then((data) => {
    res.json(data.rows);
  });
};

module.exports = addPost;
