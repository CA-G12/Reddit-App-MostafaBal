const navigationUsername = document.querySelector('.userBx .username');

const navigationUserImage = document.querySelector('.imgBx img');

// fetch('/checkAuth')
//   .then((checkAuthResult) => checkAuthResult.json())
//   .then((userId) => {
//     console.log('test', userId);
//     if (userId.id) {
//       navIsLogged.style.display = 'flex';
//     }
//   });

fetch('/userinfo')
  .then((userInfo) => userInfo.json())
  .then((userInfoResult) => {
    navigationUsername.textContent = userInfoResult.username;
    navigationUserImage.src = userInfoResult.profile_image;
  });

// fetch any user posts by id in url  || fetch currentUser posts by id in token
const id = window.location.href.split('=')[1];
if (id) {
  fetch(`/userProfile/${id}`)
    .then((data) => data.json())
    .then((res) => {
      console.log('user profile by params', res);
      domForPosts(res);
    });
} else {
  fetch('/userProfile/')
    .then((data) => data.json())
    .then((res) => {
      console.log('user profile by token', res);
      domForPosts(res);
    });
}

//! dropDown menu

const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
