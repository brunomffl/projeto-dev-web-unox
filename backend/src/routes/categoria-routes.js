const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria-controller');
const { verificarAutenticacao, verificarAdmin } = require('../middleware/auth-middleware');

// Listar categorias - usuários autenticados podem ver
router.get('/categorias', verificarAutenticacao, categoriaController.getAll);

router.get('/categorias/:id', verificarAutenticacao, categoriaController.getById);

// Gerenciar categorias - apenas admin
router.post('/categorias', verificarAdmin, categoriaController.CreateCategoria);

router.patch('/categorias/:id', verificarAdmin, categoriaController.update);

router.put('/categorias/:id', verificarAdmin, categoriaController.updateFull);

router.delete('/categorias/:id', verificarAdmin, categoriaController.delete);

module.exports = router;
