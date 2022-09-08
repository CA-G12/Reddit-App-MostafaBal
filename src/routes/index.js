const router = require('express').Router();

const { signUp, showAllPosts, login, currentUserinfo, checkAuth } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

router.get('/checkAuth', verifyToken, checkAuth);

router.get('/allPosts', showAllPosts);

router.post('/signUp', signUp);

router.post('/login', login);

router.get('/userinfo', verifyToken, currentUserinfo);


module.exports = router;
