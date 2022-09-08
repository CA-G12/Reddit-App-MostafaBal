const { addPostQuery } = require('../../database/queries');

const addPost = (req, res) => {
  const { title, content, image } = req.body;
  const userId = req.token.id
  console.log('add post contooool',req.body)
  addPostQuery(title, content, image, userId).then((data) => {
    res.json(data.rows);
    console.log(data.rows);
  });
};

module.exports = addPost;
