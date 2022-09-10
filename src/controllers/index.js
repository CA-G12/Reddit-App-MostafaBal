const {
  signUp, login, logout, checkAuth, currentUserinfo, userProfile, updateProfile, deleteAccount,
} = require('./users');

const {
  showAllPosts, addPost, addVote, deletePost, mostUsersPost,
} = require('./posts');

module.exports = {
  signUp,
  showAllPosts,
  login,
  logout,
  checkAuth,
  addPost,
  currentUserinfo,
  userProfile,
  addVote,
  deletePost,
  mostUsersPost,
  updateProfile,
  deleteAccount,
};
