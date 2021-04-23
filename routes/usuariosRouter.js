var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarCadastro = require('../middlewares/ValidarCadastro');

router.get('/', usuariosController.index);
router.get('/login', usuariosController.login);
router.post('/login', usuariosController.auth);
router.get('/registro', usuariosController.registro);
router.post('/', validarCadastro, usuariosController.create);
router.put('/:id', validarCadastro, usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;
