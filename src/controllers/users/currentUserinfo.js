const { currentUserinfoQuery } = require('../../database/queries');

const currentUserinfo = (req, res) => {
  const { id } = req.token;
  console.log(id)
  currentUserinfoQuery(id)
    .then((userInfo) => { res.json(userInfo.rows[0]); });
};

module.exports = { currentUserinfo };
