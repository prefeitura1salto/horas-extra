const Funcionario = require("../models/func");

exports.getCurrentUserData = async (req, res) => {
  const { user, password } = req.body;

  const getUser = await Funcionario.findOne({
    mat: user,
    senha: password,
  })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));

  const currentUser = getUser;
  console.log(currentUser);

  if (!currentUser) {
    res.redirect("/");
  } else {
    req.session.isLoggedIn = true;
    req.session.data = {
      mat: currentUser.mat,
      func: currentUser.setor.cargo,
      name: currentUser.name,
      department: currentUser.setor.nomeSetor,
      cpf: currentUser.cpf,
      isAdmin: currentUser.isAdmin,
    };
    res.redirect("/main");
  }
};
