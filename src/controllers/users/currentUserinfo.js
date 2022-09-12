const { currentUserinfoQuery } = require('../../database/queries');

const currentUserinfo = (req, res) => {
  const { id } = req.token;
  const { idParam } = req.params;
  // console.log(idParam);
  // console.log(id);
  if (idParam) {
    currentUserinfoQuery(idParam)
      .then((userInfo) => { res.json(userInfo.rows[0]); });
  } else {
    currentUserinfoQuery(id)
      .then((userInfo) => { res.json(userInfo.rows[0]); });
  }
};

module.exports = { currentUserinfo };
