// <input class="title" type="text" placeholder="title">
// <input  class="content" type="text" placeholder="content">
// <input class="image" type="text" placeholder="image">

const title = document.querySelector('.title');
const content = document.querySelector('.content');
const image = document.querySelector('.image');
const addPostBtn = document.querySelector('.add-post-btn');

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
      console.log(res);
    })
    .catch((err) => console.log(err));
});
