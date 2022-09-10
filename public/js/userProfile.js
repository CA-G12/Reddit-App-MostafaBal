const navigationUsername = document.querySelector('.userBx .username');

const navigationUserImage = document.querySelector('.imgBx img');

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
      domForPosts(res);
    });
} else {
  fetch('/userProfile/')
    .then((data) => data.json())
    .then((res) => {
      domForPosts(res);
      res.forEach((ele, i) => {
        const postCard = document.querySelectorAll('.post-card')[i];
        const deleteBtn = document.createElement('ion-icon');
        deleteBtn.addEventListener('click', () => {
          const header = {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          };
          fetch(`/deletePost/${ele.id}`, header)
            .then((data) => data.json())
            .then((deleteResult) => {
              if (deleteResult.isDeleted) {
                postCard.style.display = 'none';
              }
            })
            .catch((err) => console.log(err));
        });
        // deleteBtn.textContent = 'delete';
        deleteBtn.setAttribute('class', 'delete-post');
        deleteBtn.setAttribute('name', 'trash-outline');
        postCard.appendChild(deleteBtn);
      });
    });
}

fetch('/mostUsersPost')
  .then((mostUsersPostResult) => mostUsersPostResult.json())
  .then((result) => {
    domForMostUserPost(result);
  });

//! dropDown menu

const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
