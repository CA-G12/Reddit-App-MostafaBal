const signupUsername = document.querySelector('#sign-up .username');

const signupEmail = document.querySelector('#sign-up .email');

const signupPassword = document.querySelector('#sign-up .password');

const signupConfirmPassword = document.querySelector('#sign-up .confirm-password');

const signupButton = document.querySelector('#sign-up button');

const loginButton = document.querySelector('#login button');

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

fetch('/checkAuth')
  .then((checkAuthResult) => checkAuthResult.json())
  .then((userId) => {
    if (userId.id) {
      navIsLogged.style.display = 'flex';
      navNotLogged.style.display = 'none';
    }
  });

fetch('/allPosts')
  .then((data) => data.json())
  .then((res) => {
    res.forEach((ele) => {
      const postCard = document.createElement('div');
      postCard.setAttribute('class', 'post-card');
      allPosts.appendChild(postCard);

      const profileUsernameContainer = document.createElement('div');
      profileUsernameContainer.setAttribute('class', 'profile-username-container');
      postCard.appendChild(profileUsernameContainer);

      const profileImage = document.createElement('img');
      profileImage.setAttribute('class', 'profile-img');
      profileImage.src = ele.profile_image;
      profileUsernameContainer.appendChild(profileImage);

      const username = document.createElement('p');
      username.setAttribute('class', 'username');
      username.textContent = ele.username;
      profileUsernameContainer.appendChild(username);

      const dateTime = document.createElement('p');
      dateTime.setAttribute('class', 'date-time');
      dateTime.textContent = ele.data_time;
      postCard.appendChild(dateTime);

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
          window.location.reload();
        }
        navIsLogged.style.display = 'none';
        navNotLogged.style.display = 'flex';
      })
      .catch((err) => console.log(err));
  } else {
    window.alert('password Not match');
  }
});

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
      if (res.isLogged === true) {
      // navIsLogged.style.display = 'flex';
      // navNotLogged.style.display = 'none';
        window.location.reload();
      // return res.id;
      }
      navIsLogged.style.display = 'none';
      navNotLogged.style.display = 'flex';
    })
    .catch((err) => console.log(err));
});

fetch('/userinfo')
  .then((userInfo) => userInfo.json())
  .then((userInfoResult) => {
    navigationUsername.textContent = userInfoResult.username;
    navigationUserImage.src = userInfoResult.profile_image;
  });

//! dropDown menu
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
