const jwt = require('jsonwebtoken');
const path = require('path');
const { registerValidate } = require('./validateController');

class UserController {
  lofi(req, res) {
    res.render('lofi');
  }

  home(req, res) {
    res.render('home');
  }

  perfil(req, res) {
    res.render('perfil');
  }

  cadastro(req, res) {
    res.render('cadastro');
  }

  login(req, res) {
    res.render('login');
  }

  recuperarsenha(req, res) {
    res.render('Recupere sua Senha');
  }
}

module.exports = new UserController();
