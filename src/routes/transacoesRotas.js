const { Router } = require('express');
const transacoesController = require("../controller/transacoesController");
const transacoesRoutes = Router ();

transacoesRoutes.post('/', transacoesController.create)

transacoesRoutes.get('/', transacoesController.getAll)

transacoesRoutes.get('/:id', transacoesController.getOne)

transacoesRoutes.put('/:id', transacoesController.update)

transacoesRoutes.delete('/:id', transacoesController.delete)

module.exports = transacoesRoutes;