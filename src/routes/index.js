const router = require('express').Router();

const { signUp, showAllPosts, login, currentUserinfo, checkAuth, addPost } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

router.get('/checkAuth', verifyToken, checkAuth);

router.get('/allPosts', showAllPosts);

router.post('/signUp', signUp);

router.post('/login', login);

router.post('/addPost', verifyToken, addPost);

router.get('/userinfo', verifyToken, currentUserinfo);


module.exports = router;
