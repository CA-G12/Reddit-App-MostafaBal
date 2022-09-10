const checkAuth = (req, res) => {
  if (req.token.id) {
    res.json(req.token);
  } else {
    res.json({ isLogged: 'nooooooo' });
  }
};

module.exports = { checkAuth };
