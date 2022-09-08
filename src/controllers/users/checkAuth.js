const checkAuth = (req, res) => {
  console.log('in controller', req.token);
  if (req.token.id) {
    console.log(req.token.id);
    res.json(req.token);
  } else {
    res.json({ isLogged: 'nooooooo' });
  }
};

module.exports = { checkAuth };
