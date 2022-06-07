const express = require('express')
const adminRegister = require('../controller/admin')

const router = express.Router()

router.post('/user_register', adminRegister.registerUser)

module.exports = router;