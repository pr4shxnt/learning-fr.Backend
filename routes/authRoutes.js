const express = require('express');
const router = express.Router()
const {registerUser} = require('../controllers/userAuthController')

router.post('/register' , registerUser)

module.exports = router;
