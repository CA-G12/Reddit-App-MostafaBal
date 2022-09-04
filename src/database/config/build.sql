BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  email VARCHAR(200) UNIQUE,
  password TEXT NOT NULL,
  profile_image TEXT DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKevXJxjANQLI8UuioSqliVMY5UZhSFFWonzkGPqjEcE_zQgkzvYpvZJZeJIurcwfZkw&usqp=CAU'
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title TEXT ,
  content TEXT NOT NULL,
  data_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  post_image TEXT,
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  data_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  post_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(post_id) REFERENCES posts(id)
);

COMMIT;