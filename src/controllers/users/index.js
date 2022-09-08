const { signUp } = require('./signup');

const { login } = require('./login');

const { logout } = require('./logout');

const { checkAuth } = require('./checkAuth');

const { currentUserinfo } = require('./currentUserinfo');

const { userProfile } = require('./userProfile');

module.exports = {
  signUp, login, logout, currentUserinfo, checkAuth, userProfile
};
