const { Router } = require('express');

const router = Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.lofi);
router.get('/home', UserController.home);
router.get('/perfil', UserController.perfil);
router.post('/cadastro', UserController.cadastro);
router.post('/login', UserController.login);
router.post('/recuperarsenha', UserController.recuperarsenha);

module.exports = router;
