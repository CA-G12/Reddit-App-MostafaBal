const jwt = require('jsonwebtoken');

const generateToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.secret, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

module.exports = generateToken;
