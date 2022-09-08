const { checkValidEmailQuery, addUserQuery } = require('./signup');
const { showAllPostsQuery } = require('./showAllPosts');
const { addPostQuery } = require('./addPost');
const { currentUserinfoQuery } = require('./currentUserinfo');

module.exports = {
  checkValidEmailQuery, addUserQuery, showAllPostsQuery, currentUserinfoQuery, addPostQuery,
};
