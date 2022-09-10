const { deleteAccountQuery } = require('../../database/queries');

const deleteAccount = (req, res) => {
  const { id } = req.token;
  deleteAccountQuery(id).then((deleteAccountResult) => {
        console.log(deleteAccountResult.rows)
    //   res.json({ isDeleted: true });
      //   res.clearCookie('token').redirect('/');
      res.clearCookie('token').json({ isDeleted: true });
  });
};

module.exports = { deleteAccount };
