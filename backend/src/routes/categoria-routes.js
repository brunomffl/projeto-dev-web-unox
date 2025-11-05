const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria-controller');

router.post('/categorias', categoriaController.CreateCategoria);

router.get('/categorias', categoriaController.getAll);

router.get('/categorias/:id', categoriaController.getById);

router.patch('/categorias/:id', categoriaController.update);

router.put('/categorias/:id', categoriaController.updateFull);

router.delete('/categorias/:id', categoriaController.delete);

module.exports = router;
