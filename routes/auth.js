const express = require("express");
const authController = require("../controller/auth");

const router = express.Router();

router.post("/auth", authController.getCurrentUserData);

module.exports = router;
