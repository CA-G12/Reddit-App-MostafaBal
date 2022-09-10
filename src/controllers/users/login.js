const bcrypt = require('bcryptjs');

const { checkValidEmailQuery } = require('../../database/queries');

const generateToken = require('../../modules/generateToken');

const login = (req, res) => {
  const { password, email } = req.body;
  checkValidEmailQuery(email).then((userInfo) => {
    bcrypt.compare(password, userInfo.rows[0].password).then((compareResult) => {
      if (compareResult) {
        const { id, emailToken } = userInfo.rows[0];
        generateToken({ id, emailToken }).then((token) => {
          res.cookie('token', token, { httpOnly: true, secure: true }).json({ isLogged: true, id });
        });
      }
    });
  });
};

module.exports = { login };
