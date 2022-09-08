const { userProfileQuery } = require('../../database/queries');

const userProfile = (req, res) => {
  const { id } = req.token;
    console.log('userprofile req.token controoooler', id);
  const { idParam } = req.params;

    console.log('userprofile  req.params controoooler', idParam);

  if (idParam) {
    console.log(idParam);
    userProfileQuery(idParam).then((result) => res.json(result.rows));
  } else {
    userProfileQuery(id).then((result) => res.json(result.rows));
  }
};

module.exports = { userProfile };
