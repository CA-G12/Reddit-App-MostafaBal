const { signUp } = require('./signup');

const { login } = require('./login');

const { checkAuth } = require('./checkAuth');

const { currentUserinfo } = require('./currentUserinfo');

module.exports = {
  signUp, login, currentUserinfo, checkAuth,
};
