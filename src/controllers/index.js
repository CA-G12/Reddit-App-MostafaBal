const {
  signUp, login, currentUserinfo, checkAuth,
} = require('./users');

const { showAllPosts, addPost } = require('./posts');

module.exports = {
  signUp, showAllPosts, login, currentUserinfo, checkAuth, addPost
};
