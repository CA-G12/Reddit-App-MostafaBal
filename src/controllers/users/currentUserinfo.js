const { currentUserinfoQuery } = require('../../database/queries');

const currentUserinfo = (req, res) => {
  const { id } = req.token;
  currentUserinfoQuery(id)
    .then((userInfo) => res.json(userInfo.rows[0]));
};

module.exports = { currentUserinfo };
