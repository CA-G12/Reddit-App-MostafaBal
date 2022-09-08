const logout = (req, res) => {
  console.log('logout controller');
  res.clearCookie('token').redirect('/');
};

module.exports = { logout };
