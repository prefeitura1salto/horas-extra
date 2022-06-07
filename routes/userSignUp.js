const express = require('express');
const adminPanelController = require('../controller/admin')

const router = express.Router()

router.get('/user_signup', adminPanelController.getAdminUserSignUp)

module.exports = router;