const express = require('express');
const {addUser} = require('../controllers/user');
const {login} = require('../controllers/auth');
const router = express.Router()

router.post('/users',addUser);
router.post('/login',login)

module.exports = router;