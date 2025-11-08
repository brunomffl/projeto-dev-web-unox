const express = require('express');
const router = express.Router();
const tarefasController = require('../controller/tarefas-controller');
const { verificarAutenticacao, verificarProprietarioTarefa } = require('../middleware/auth-middleware');

// Aplicar middleware de autenticação em todas as rotas de tarefas
router.use(verificarAutenticacao);

router.post('/tarefas', verificarProprietarioTarefa, tarefasController.CreateTarefas);

router.get('/tarefas', verificarProprietarioTarefa, tarefasController.getAll);

router.get('/tarefas/:id', verificarProprietarioTarefa, tarefasController.getById);

router.patch('/tarefas/:id', verificarProprietarioTarefa, tarefasController.update);

router.put('/tarefas/:id', verificarProprietarioTarefa, tarefasController.updateFull);

router.delete('/tarefas/:id', verificarProprietarioTarefa, tarefasController.delete);

module.exports = router;