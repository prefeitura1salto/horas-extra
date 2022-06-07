const Funcionario = require("../models/func");
const user = require("../models/func");

exports.getAdminPanel = (req, res) => {
  res.render("../views/admin/admin", {
    isAuthenticated: "",
    pageTitle: "Admin Panel (Pref. de Salto - Horas Extras)",
  });
};

exports.getAdminUserSignUp = (req, res) => {
  if (req.session.isLoggedIn) {
    res.render("../views/admin/userSignUp", {
      isAuthenticated: req.session.isLoggedIn,
      pageTitle: "CADASTRO DE USUÁRIO",
    });
  }
};

exports.registerUser = (req, res) => {
  const { mat, name, pass, cpf, sec, func, set, isAdmin } = req.body;

  const User = new Funcionario({
    mat: mat,
    name: name,
    isAdmin: Boolean(isAdmin),
    senha: pass,
    cpf: cpf,
    setor: {
      nomeSetor: set,
      cargo: func,
      secretaria: sec,
    },
  });
  User.save()
    .then((result) => {
      console.log("Tabela Criada \n" + result);
      res.redirect("/admin/user_signup");
    })
    .catch((err) => console.log(err));
};
