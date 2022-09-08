const {
    signUp, login, logout, checkAuth, currentUserinfo, userProfile
  } = require('./users');
  
  const { showAllPosts, addPost } = require('./posts');
  
  module.exports = {
    signUp, showAllPosts, login, logout, checkAuth, addPost, currentUserinfo, userProfile
  };
  