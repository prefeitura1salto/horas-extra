exports.isAdmin = (req, res) => {
  console.log(req.session);
  if (req.session.isLoggedIn) {
    res.render("../views/app", {
      isAuthenticated: req.session.isLoggedIn,
      isAdmin: req.session.data.isAdmin,
      pageTitle: "Admin - Pref. Salto - Horas Extras",
      data: {
        mat: req.session.data.mat,
        func: req.session.data.func,
        name: req.session.data.name,
        department: req.session.data.department,
        cpf: req.session.data.cpf,
      },
    });
  } else {
    res.redirect("/");
  }
};
