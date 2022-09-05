const joi = require('joi');

const bcrypt = require('bcryptjs');

const { checkValidEmailQuery, addUserQuery } = require('../../database/queries');

const generateToken = require('../../modules/generateToken');

const signUp = (req, res) => {
  const { email } = req.body;
  const { username } = req.body;

  checkValidEmailQuery(email).then((data) => {
    if (data.rowCount === 0) {
      bcrypt.hash(req.body.password, 10).then((hashed) => {
        addUserQuery(username, email, hashed).then((user) => {
          generateToken(user.rows[0]).then((token) => {
            res.cookie('token', token, { httpOnly: true, secure: true }).json({ isLogged: true });
          });
        });
      });
    } else {
      console.log('this email used already ');
    }
  });
};
module.exports = { signUp };
