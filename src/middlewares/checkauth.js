const jwt = require('jsonwebtoken');

const checkauth = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.secret, (err, decoded) => {
    if (err) {
        next()
    } else {
      req.userID = decoded.id;
      next();
    }
  });
};

module.exports = checkauth;
