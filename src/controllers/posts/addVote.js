const { addVoteQuery, checkUserVote, updateVote } = require('../../database/queries');

const addVote = (req, res) => {
  const { postId, voteValue } = req.body;
  const { id } = req.token;

  checkUserVote(id, postId)
    .then((checkResult) => {
      if (checkResult.rows[0]) {
        if (checkResult.rows[0].vote === voteValue) {
          res.json({ vote: false });
        } else {
          updateVote(id, postId, voteValue).then((updateVoteResult) => {
            res.json({ vote: updateVoteResult.rows[0].vote });
          });
        }
      } else {
        addVoteQuery(id, postId, voteValue).then((addVoteResult) => {
          res.json({ vote: addVoteResult.rows[0].vote });
        });
      }
    });
};

module.exports = addVote;
