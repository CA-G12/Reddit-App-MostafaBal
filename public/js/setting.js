const navigationUsername = document.querySelector('.userBx .username');

const navigationUserImage = document.querySelector('.imgBx img');

const username = document.querySelector('#userinfo .username');

const userImg = document.querySelector('#userinfo .profile-image');

const accountDate = document.querySelector('#userinfo .account-date');

const updateBtn = document.querySelector('#userinfo button');

const inputsContainer = document.querySelector('#update-userinfo');

const inputUsername = document.querySelector('#update-userinfo input.username');

const inputProfileImage = document.querySelector('#update-userinfo input.profile-image');

const SaveUpdateBtn = document.querySelector('#update-userinfo button');

const deleteBtn = document.querySelector('#delete-account #delete');

const confirmDeleteContainer = document.querySelector('#confirm-delete-container');

const confirmDeleteBtn = document.querySelector('#confirm-delete');

fetch('/userinfo')
  .then((userInfo) => userInfo.json())
  .then((userInfoResult) => {
    navigationUsername.textContent = userInfoResult.username;
    navigationUserImage.src = userInfoResult.profile_image;
    username.textContent = userInfoResult.username;
    userImg.src = userInfoResult.profile_image;
    accountDate.textContent = `The account was created on the date ${userInfoResult.account_time}`;
  });

updateBtn.addEventListener('click', () => {
  inputsContainer.style.display = 'block';
  inputUsername.value = username.textContent;
  inputProfileImage.value = userImg.src;
});

updateBtn.addEventListener('click', () => {
  inputsContainer.style.display = 'block';
  inputUsername.value = username.textContent;
  inputProfileImage.value = userImg.src;
});

SaveUpdateBtn.addEventListener('click', () => {
  const header = {
    method: 'PUT',
    body: JSON.stringify({
      username: inputUsername.value,
      profileImage: inputProfileImage.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch('/updateProfile', header)
    .then((updateProfileResult) => updateProfileResult.json())
    .then((result) => {
      username.textContent = result.username;
      userImg.src = result.profile_image;
      navigationUsername.textContent = result.username;
      navigationUserImage.src = result.profile_image;
    });
});

deleteBtn.addEventListener('click', () => {
  confirmDeleteContainer.style.display = 'block';
});

confirmDeleteBtn.addEventListener('click', () => {
  const header = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/deleteAccount', header)
    .then((deleteAccount) => deleteAccount.json())
    .then((deleteAccountResult) => {
      myFunction();
      caches.keys()
        .then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))).then(() => {
          setTimeout(() => {
            window.location.href = '/';
          }, 5000);
        }));
    //   }
    });
});

//! show msg when delete Account
function myFunction() {
  const snackbar = document.getElementById('snackbar');
  console.log('snackbar', snackbar);
  snackbar.className = 'show';
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 4999);
}

//! dropDown menu
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
