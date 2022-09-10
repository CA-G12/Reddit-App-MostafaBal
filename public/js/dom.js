const domForPosts = (res) => {
  const allPosts = document.querySelector('#all-posts');
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

    if (ele.post_image) {
      const postImage = document.createElement('img');
      postImage.setAttribute('class', 'post-img');
      postImage.src = ele.post_image;
      postCard.appendChild(postImage);
    }

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

const domForMostUserPost = (result) => {
  const topUsersMenu = document.querySelector('#top-users-menu');
  result.forEach((ele, i) => {
    const user = document.createElement('div');
    user.setAttribute('class', 'users');
    topUsersMenu.appendChild(user);

    const index = document.createElement('p');
    index.textContent = i + 1;
    user.appendChild(index);

    const topIcon = document.createElement('ion-icon');
    topIcon.setAttribute('name', 'chevron-up-outline');
    user.appendChild(topIcon);

    const userImg = document.createElement('img');
    userImg.setAttribute('class', 'profile-img');
    userImg.src = ele.profile_image;
    user.appendChild(userImg);

    const username = document.createElement('p');
    username.setAttribute('class', 'username');
    username.textContent = ele.username;
    user.appendChild(username);

    const numOfPosts = document.createElement('p');
    numOfPosts.setAttribute('class', 'num-of-posts');
    numOfPosts.textContent = `published ${ele.number_of_posts} posts`;
    user.appendChild(numOfPosts);
  });
};
