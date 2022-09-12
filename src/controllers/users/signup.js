const joi = require('joi');

const bcrypt = require('bcryptjs');

const { checkValidEmailQuery, addUserQuery } = require('../../database/queries');

const generateToken = require('../../modules/generateToken');

// SignUp
const signupValidation = (email, username, password, confirmPassword) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().pattern(/^[a-zA-Z]{3,}\d?/).required().messages({
      'string.pattern.base': 'Username must contains only letters and digits and must starts with number',
    }),
    password: joi.string().pattern(/^(?=.*[0-9])[a-zA-Z0-9\W]{6,15}$/).required().messages({
      'string.pattern.base': 'Password must be at least 6 characters from letters,digits and special characters',

    }),
    confirmPassword: joi.ref('password'),
  });
  return schema.validateAsync({
    email, username, password, confirmPassword,
  });
};

const signUp = (req, res) => {
  const {
    email, username, password, confirmPassword,
  } = req.body;
  signupValidation(email, username, password, confirmPassword)
    .then(() => checkValidEmailQuery(email))
    .then((data) => {
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
        res.json({ msg: 'this email used already' });
      }
    });
};
module.exports = { signUp };
