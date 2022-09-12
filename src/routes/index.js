const router = require('express').Router();

const {
  signUp, showAllPosts, login, logout, checkAuth, addPost, currentUserinfo,
  userProfile, addVote, deletePost, mostUsersPost, updateProfile, deleteAccount,
} = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');
const checkauth = require('../middlewares/checkauth');


router.get('/checkAuth', verifyToken, checkAuth);

router.get('/allPosts', checkauth, showAllPosts);

router.post('/signUp', signUp);

router.post('/login', login);

router.get('/logout', logout);

router.post('/addPost', verifyToken, addPost);

router.get('/userinfo/:idParam?', verifyToken, currentUserinfo);

router.get('/userProfile/:idParam?', verifyToken, userProfile);

router.post('/addVote', verifyToken, addVote);

router.delete('/deletePost/:postId', verifyToken, deletePost);

router.get('/mostUsersPost', checkauth, mostUsersPost);

router.put('/updateProfile', verifyToken, updateProfile);

router.delete('/deleteAccount', verifyToken, deleteAccount);

module.exports = router;
