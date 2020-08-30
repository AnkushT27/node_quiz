const express = require('express');
const {addUser} = require('../controllers/user');
const {login} = require('../controllers/auth');
const {auth} = require('../middleware/tokenValid')
const router = express.Router()

router.post('/users',auth,addUser);
router.post('/login',login)

module.exports = router;