const connection = require('../config/connection');

const updateProfileQuery = (id, username, profileImage) => connection.query(` UPDATE users SET username=$2,profile_image=$3
    where id=$1 RETURNING username, profile_image`, [id, username, profileImage]);

module.exports = { updateProfileQuery };
