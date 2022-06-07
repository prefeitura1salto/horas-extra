const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/login/index", {
    userLocation: {
      ip: req.connection.remoteAddress,
    },
    pageTitle: "Login | Pref. de Salto - Horas Extras",
  });
});

module.exports = router;
