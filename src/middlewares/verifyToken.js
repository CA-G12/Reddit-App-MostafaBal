const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token)
  // console.log('**************************', req.cookies);
  //   console.log(req.token);
  jwt.verify(token, process.env.secret, (err, decoded) => {
    if (err) {
    //  console.log(err);
      res.status(300).json({ massage: 'index.html', isLogged: false });
    } else {
      console.log(decoded)
      req.token = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
