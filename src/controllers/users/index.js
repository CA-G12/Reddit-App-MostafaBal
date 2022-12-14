const { signUp } = require('./signup');

const { login } = require('./login');

const { logout } = require('./logout');

const { checkAuth } = require('./checkAuth');

const { currentUserinfo } = require('./currentUserinfo');

const { userProfile } = require('./userProfile');

const { updateProfile } = require('./updateProfile');

const { deleteAccount } = require('./deleteAccount');

module.exports = {
  signUp, login, logout, checkAuth, currentUserinfo, userProfile, updateProfile, deleteAccount,
};
