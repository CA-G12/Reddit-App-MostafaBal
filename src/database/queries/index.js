const { checkValidEmailQuery, addUserQuery } = require('./signup');
const { showAllPostsQuery } = require('./showAllPosts');
const { addPostQuery } = require('./addPost');
const { deletePostQuery } = require('./deletePost');
const { userProfileQuery } = require('./userProfile');
const { currentUserinfoQuery } = require('./currentUserinfo');
const { addVoteQuery, checkUserVote, updateVote } = require('./addVote');
const { mostUsersPostQuery } = require('./mostUsersPost');

module.exports = {
  checkValidEmailQuery,
  addUserQuery,
  showAllPostsQuery,
  addPostQuery,
  userProfileQuery,
  currentUserinfoQuery,
  addVoteQuery,
  checkUserVote,
  updateVote,
  deletePostQuery,
  mostUsersPostQuery,
};
