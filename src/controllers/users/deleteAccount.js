const { deleteAccountQuery } = require('../../database/queries');

const deleteAccount = (req, res) => {
  const { id } = req.token;
  deleteAccountQuery(id).then((deleteAccountResult) => {
    res.clearCookie('token').json({ isDeleted: true });
  });
};

module.exports = { deleteAccount };
