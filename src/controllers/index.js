const {
  signUp, login, currentUserinfo, checkAuth,
} = require('./users');

const { showAllPosts } = require('./posts');

module.exports = {
  signUp, showAllPosts, login, currentUserinfo, checkAuth,
};
