const title = document.querySelector('.title');
const content = document.querySelector('.content');
const image = document.querySelector('.image');
const addPostBtn = document.querySelector('.add-post-btn');
const navigationUsername = document.querySelector('.userBx .username');
const navigationUserImage = document.querySelector('.imgBx img');

addPostBtn.addEventListener('click', () => {
  const header = {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      content: content.value,
      image: image.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/addPost', header)
    .then((data) => data.json())
    .then((res) => {
      // res.json({ msg: 'You must at least add a picture, title or content', isAdded: false });

      console.log(res.isAdded);
      if (res) {
        myFunction(res.isAdded, res.msg);
      }
    })
    .catch((err) => console.log(err));
});

fetch('/userinfo')
  .then((userInfo) => userInfo.json())
  .then((userInfoResult) => {
    navigationUsername.textContent = userInfoResult.username;
    navigationUserImage.src = userInfoResult.profile_image;
  });

//! handle all cases if user post is added successfully or failed
function myFunction(postIsAdded, massage) {
  const snackbar = document.getElementById('snackbar');
  snackbar.textContent = massage;
  snackbar.className = 'show';
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 2999);
  if (postIsAdded) {
    setTimeout(() => {
      window.location.href = './userProfile.html';
    }, 3000);
  }
}

//! dropDown menu
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
