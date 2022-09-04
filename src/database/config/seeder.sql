BEGIN;

INSERT INTO users(username, email, password) VALUES
('mostafa balousha', 'mostafa@gmail.com' , '$2a$10$NwU1a4yBUW0wMTajvY03vu8WlicR9P8O3OWGy1kBXwkMaRgTl6YlW');

INSERT INTO posts(title, content, post_image, user_id) VALUES
('travel', 'My first travel around the world', 'https://www.wanderella.co/wp-content/uploads/2018/10/sabrinatrip.jpg', 1),
('Karim', 'What a goal !! Karim Benzema!!', 'https://atalayar.com/sites/default/files/styles/foto_/public/noticias/karim-benzema-real-madrid%20%282%29_0.jpg?itok=BxDpSznV', 1);

COMMIT;