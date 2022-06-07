const mongoose = require("mongoose");

const funcSchema = new mongoose.Schema({
  mat: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
  cpf: String,
  setor: {
    nomeSetor: String,
    cargo: String,
    secretaria: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Funcionario = mongoose.model("Funcionario", funcSchema);

module.exports = Funcionario;
