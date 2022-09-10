const { userProfileQuery } = require('../../database/queries');

const userProfile = (req, res) => {
  const { id } = req.token;
  const { idParam } = req.params;

  if (idParam) {
    userProfileQuery(idParam).then((result) => res.json(result.rows));
  } else {
    userProfileQuery(id).then((result) => res.json(result.rows));
  }
};

module.exports = { userProfile };
