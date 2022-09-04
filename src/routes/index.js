const router = require('express').Router();

const { signUp } = require('../controllers');

router.post('/signUp', signUp);

module.exports = router;
