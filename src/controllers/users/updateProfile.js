const { updateProfileQuery } = require('../../database/queries');

const updateProfile = (req, res) => {
  const { id } = req.token;
  const { username, profileImage } = req.body;
  updateProfileQuery(id, username, profileImage)
    .then((updateProfileResult) => res.json(updateProfileResult.rows[0]));
};

module.exports = { updateProfile };
