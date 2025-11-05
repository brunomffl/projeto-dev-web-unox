const express = require('express');
const router = express.Router();
const tarefasController = require('../controller/tarefas-controller');

router.post('/tarefas', tarefasController.CreateTarefas);

router.get('/tarefas', tarefasController.getAll);

router.get('/tarefas/:id', tarefasController.getById);

router.patch('/tarefas/:id', tarefasController.update);

router.put('/tarefas/:id', tarefasController.updateFull);

router.delete('/tarefas/:id', tarefasController.delete);

module.exports = router;