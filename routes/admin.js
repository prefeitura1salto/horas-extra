const express = require('express');
const adminPanelController = require('../controller/admin')

const router = express.Router();

router.get('/admin', adminPanelController.getAdminPanel)


module.exports = router;