const { addVoteQuery, checkUserVote, updateVote } = require('../../database/queries');

const addVote = (req, res) => {
  const { postId, voteValue } = req.body;
  const { id } = req.token;
  //   const userId = req.token.id
  console.log('in add vote controller', 'user id', id, 'post id', postId, 'vote', voteValue);
  checkUserVote(id, postId)
    .then((checkResult) => {
      if (checkResult.rows[0]) {
        if (checkResult.rows[0].vote === voteValue) {
          res.json({ vote: false });
        } else {
          updateVote(id, postId, voteValue).then((updateVoteResult) => {
            // console.log('updateVoteResult', updateVoteResult.rows[0]);
            res.json({ vote: updateVoteResult.rows[0].vote });
          });
        }
      } else {
        addVoteQuery(id, postId, voteValue).then((addVoteResult) => {
        //   console.log(addVoteResult.rows[0]);
          res.json({ vote: addVoteResult.rows[0].vote });
        });
      }
    });

//   addVoteQuery(id, postId, voteValue);
};

module.exports = addVote;
