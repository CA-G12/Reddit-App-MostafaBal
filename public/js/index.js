const signupUsername = document.querySelector('#sign-up .username');

const signupEmail = document.querySelector('#sign-up .email');

const signupPassword = document.querySelector('#sign-up .password');

const signupConfirmPassword = document.querySelector('#sign-up .confirm-password');

const signupButton = document.querySelector('#sign-up button');

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
  console.log('in btn **');
  if (signupPassword.value === signupConfirmPassword.value) {
    fetch('/signUp', header)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } else {
    window.alert('تتهبلش');
  }
});
