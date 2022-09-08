const {
  signUp, login, logout, currentUserinfo, checkAuth,
} = require('./users');

const { showAllPosts, addPost } = require('./posts');

module.exports = {
  signUp, showAllPosts, login, logout, currentUserinfo, checkAuth, addPost,
};
