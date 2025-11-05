const express = require('express');
const router = express.Router();
const tarefasRoutes = require('./tarefas-routes');
const categoriaRoutes = require('./categoria-routes');

router.use('/', tarefasRoutes);
router.use('/', categoriaRoutes);

module.exports = router;
