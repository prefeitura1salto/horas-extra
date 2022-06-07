const adminController = require('../controller/user');
const express = require('express');
const router = express.Router();


router.get('/main', adminController.isAdmin)

module.exports = router;