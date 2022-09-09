const domForPosts = (res) => {
  const allPosts = document.querySelector('#all-posts');
  console.log('allpost in genrec dom', allPosts);
  res.forEach((ele) => {
    const postCard = document.createElement('div');
    postCard.setAttribute('class', 'post-card');
    allPosts.appendChild(postCard);

    const voteContainer = document.createElement('div');
    voteContainer.setAttribute('class', 'vote');
    postCard.appendChild(voteContainer);

    const voteUp = document.createElement('ion-icon');
    voteUp.setAttribute('name', 'arrow-up-outline');
    const numberOfVote = document.createElement('p');

    voteUp.addEventListener('click', () => {
      const header = {
        method: 'POST',
        body: JSON.stringify({
          postId: ele.id,
          voteValue: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
      fetch('/addVote', header)
        .then((addVote) => addVote.json())
        .then((addVoteResult) => {
          console.log('addVoteResult 99999999999999', addVoteResult);
          if (addVoteResult.vote === 0 || addVoteResult.vote === 1) {
            numberOfVote.textContent = (numberOfVote.textContent * 1) + 1;
          }
        })
        .catch((err) => console.log(err));
    });

    voteContainer.appendChild(voteUp);

    numberOfVote.textContent = ele.total_votes;
    voteContainer.appendChild(numberOfVote);

    const voteDown = document.createElement('ion-icon');
    voteDown.setAttribute('name', 'arrow-down-outline');

    voteDown.addEventListener('click', () => {
      const header = {
        method: 'POST',
        body: JSON.stringify({
          postId: ele.id,
          voteValue: -1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
      fetch('/addVote', header)
        .then((addVote) => addVote.json())
        .then((addVoteResult) => {
          console.log('addVoteResult 99999999999999', addVoteResult);
          if (addVoteResult.vote === 0 || addVoteResult.vote === -1) {
            numberOfVote.textContent = (numberOfVote.textContent * 1) - 1;
          }
        })
        .catch((err) => console.log(err));
    });

    voteContainer.appendChild(voteDown);
    //! !!!!!! on click here to move profile page
    const profileUsernameContainer = document.createElement('div');
    profileUsernameContainer.setAttribute('class', 'profile-username-container');
    profileUsernameContainer.addEventListener('click', () => {
      const userId = profileUsernameContainer.lastChild.previousSibling.textContent;
      window.location.href = `../html/userProfile.html?id=${userId}`;
    });
    postCard.appendChild(profileUsernameContainer);

    const profileImage = document.createElement('img');
    profileImage.setAttribute('class', 'profile-img');
    profileImage.src = ele.profile_image;
    profileUsernameContainer.appendChild(profileImage);

    const username = document.createElement('p');
    username.setAttribute('class', 'username');
    username.textContent = ele.username;
    profileUsernameContainer.appendChild(username);

    const userId = document.createElement('p');
    userId.style.display = 'none';
    userId.textContent = ele.user_id;
    profileUsernameContainer.appendChild(userId);

    const dateTime = document.createElement('p');
    dateTime.setAttribute('class', 'date-time');
    dateTime.textContent = ele.date_time;
    profileUsernameContainer.appendChild(dateTime);

    const postTitle = document.createElement('h2');
    postTitle.setAttribute('class', 'post-title');
    postTitle.textContent = ele.title;
    postCard.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.setAttribute('class', 'post-content');
    postContent.textContent = ele.content;
    postCard.appendChild(postContent);

    const postImage = document.createElement('img');
    postImage.setAttribute('class', 'post-img');
    postImage.src = ele.post_image;
    postCard.appendChild(postImage);

    const postComments = document.createElement('div');
    postComments.setAttribute('class', 'comments');
    postCard.appendChild(postComments);

    const commentsIcon = document.createElement('ion-icon');
    commentsIcon.setAttribute('name', 'chatbox-outline');
    postComments.appendChild(commentsIcon);

    const numberOfComments = document.createElement('p');
    numberOfComments.textContent = '9.5K Comments';
    postComments.appendChild(numberOfComments);
  });
};