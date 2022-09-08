const domForPosts = (res) => {
  const allPosts = document.querySelector('#all-posts');
  console.log('allpost in genrec dom', allPosts);
  res.forEach((ele) => {
    console.log(res[0]);
    const postCard = document.createElement('div');
    postCard.setAttribute('class', 'post-card');
    allPosts.appendChild(postCard);

    const voteContainer = document.createElement('div');
    voteContainer.setAttribute('class', 'vote');
    postCard.appendChild(voteContainer);

    const voteUp = document.createElement('ion-icon');
    voteUp.setAttribute('name', 'arrow-up-outline');
    voteContainer.appendChild(voteUp);

    const numberOfVote = document.createElement('p');
    numberOfVote.textContent = '9';
    voteContainer.appendChild(numberOfVote);

    const voteDown = document.createElement('ion-icon');
    voteDown.setAttribute('name', 'arrow-down-outline');
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
    // userId.setAttribute('class', 'date-time');
    userId.textContent = ele.user_id;
    profileUsernameContainer.appendChild(userId);

    const dateTime = document.createElement('p');
    dateTime.setAttribute('class', 'date-time');
    dateTime.textContent = ele.data_time;
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
