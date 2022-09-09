const signupUsername = document.querySelector('#sign-up .username');

const signupEmail = document.querySelector('#sign-up .email');

const signupPassword = document.querySelector('#sign-up .password');

const signupConfirmPassword = document.querySelector('#sign-up .confirm-password');

const signupButton = document.querySelector('#sign-up button');
console.log('*********', signupButton);

const loginButton = document.querySelector('#login button');
console.log('*********', loginButton);

const loginEmail = document.querySelector('#login .email');

const loginPassword = document.querySelector('#login .password');

const allPosts = document.querySelector('#all-posts');

const navIsLogged = document.querySelector('#logged');

const navNotLogged = document.querySelector('#not-logged');

const navLoginBtn = document.getElementById('login-btn');

console.log(navLoginBtn);

const navSignUpBtn = document.querySelector('nav #sign-up-btn');

console.log(navSignUpBtn);

const navigationUsername = document.querySelector('.userBx .username');

const navigationUserImage = document.querySelector('.imgBx img');

const popup = document.querySelector('#popup');

const closePopup = document.querySelector('#popup ion-icon');

const popupLogin = document.querySelector('#popup #login');

const popupSignUp = document.querySelector('#popup #sign-up');

const newRedditorBtn = document.querySelector('#popup #login .new-redditor');

const alreadyRedditorBtn = document.querySelector('#popup #sign-up .login-redditor');
// console.log(123456,newRedditorBtn,alreadyRedditorBtn)

fetch('/checkAuth')
  .then((checkAuthResult) => checkAuthResult.json())
  .then((userId) => {
    console.log(userId);
    console.log('test', userId);
    if (userId.id) {
      console.log('fucking check-auth');
      navIsLogged.style.display = 'flex';
      navNotLogged.style.display = 'none';
    }
  });

fetch('/allPosts')
  .then((data) => data.json())
  .then((res) => {
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
  });

signupButton.addEventListener('click', () => {
  const header = {
    method: 'POST',
    body: JSON.stringify({
      username: signupUsername.value,
      email: signupEmail.value,
      password: signupPassword.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  if (signupPassword.value === signupConfirmPassword.value) {
    fetch('/signUp', header)
      .then((data) => data.json())
      .then((res) => {
        if (res.isLogged === true) {
          navIsLogged.style.display = 'block';
          navNotLogged.style.display = 'none';
        } else {
          navIsLogged.style.display = 'none';
          navNotLogged.style.display = 'block';
        }
      })
      .catch((err) => console.log(err));
  } else {
    window.alert('passwords not match');
  }
});
//! Done
loginButton.addEventListener('click', () => {
  const header = {
    method: 'POST',
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/login', header)
    .then((data) => data.json())
    .then((res) => {
      console.log('when login ', res);
      if (res.isLogged === true) {
        // navIsLogged.style.display = 'flex';
        // navNotLogged.style.display = 'none';
        window.location.reload();
        // return res.id;
      }
      navIsLogged.style.display = 'none';
      navNotLogged.style.display = 'flex';
    })
    // .then((id) => {
    //   fetch(`/userinfo/${id}`)
    //     .then((userInfo) => userInfo.json())
    //     .then((userInfoResult) => {
    //       console.log('**********', userInfoResult);
    //       navigationUsername.textContent = userInfoResult.username;
    //       navigationUserImage.src = userInfoResult.profile_image;
    //       // navigationUserID.textContent = userInfoResult.id;
    //     });
  // })
    .catch((err) => console.log(err));
});

// get some user information for navigation
fetch('/userinfo')
  .then((userInfo) => userInfo.json())
  .then((userInfoResult) => {
    navigationUsername.textContent = userInfoResult.username;
    navigationUserImage.src = userInfoResult.profile_image;
    // navigationUserID.textContent = userInfoResult.id;
  });

console.log(navLoginBtn);
console.log(navSignUpBtn);

//   .hidden{
//     display: none;
// }

// .active{
//     display: block;
// }

// .hidden{
//   display: none;
// }
// console.log('123456', popupLogin, popupSignUp);

navLoginBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
  popupLogin.classList.remove('hidden');
  popupSignUp.classList.add('hidden');
});

navSignUpBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
  popupSignUp.classList.remove('hidden');
  popupLogin.classList.add('hidden');
});

alreadyRedditorBtn.addEventListener('click', () => {
  popupLogin.classList.remove('hidden');
  popupSignUp.classList.add('hidden');
});

newRedditorBtn.addEventListener('click', () => {
  popupSignUp.classList.remove('hidden');
  popupLogin.classList.add('hidden');
});

closePopup.addEventListener('click', () => {
  popup.classList.toggle('active');
});

//! dropDown menu
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
