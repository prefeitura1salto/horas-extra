const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const crypto = require("crypto");
const main = require("./routes/main");
const adminPanel = require("./routes/admin");
const adminUserSignUp = require("./routes/userSignUp");
const userRegistration = require("./routes/userRegister");
const authUser = require("./routes/auth");
const login = require("./routes/login");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  session({
    secret: crypto.randomBytes(36).toString("hex"),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authUser);
app.use("/admin", userRegistration);
app.use("/admin", adminUserSignUp);
app.use(adminPanel);
app.use(main);
app.use(login);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views/404", "404.html"));
});

mongoose
  .connect(
    "mongodb+srv://prefeitura:vt6VGqLLzJWGsNWz@prefeitura.dyhkplk.mongodb.net/funcionarios?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected");
    app.listen(3000);
  });
