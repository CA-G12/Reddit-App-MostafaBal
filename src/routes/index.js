const router = require('express').Router();

const { signUp, showAllPosts, login } = require('../controllers');

// const verifyToken = require('../middlewares/verifyToken');


router.get('/allPosts', showAllPosts);

router.post('/signUp', signUp);

router.post('/login', login);


module.exports = router;
