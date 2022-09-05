const router = require('express').Router();

const { signUp, showAllPosts } = require('../controllers');

router.post('/signUp', signUp);

router.get('/allPosts', showAllPosts);
module.exports = router;
