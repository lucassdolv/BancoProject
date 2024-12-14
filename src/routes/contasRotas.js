const { Router } = require('express');
const contaController = require("../controller/contasController");
const contaRoutes = Router();


contaRoutes.post('/', contaController.create)

contaRoutes.put('/:id', contaController.update)

contaRoutes.get('/', contaController.getAll)

contaRoutes.get('/:id', contaController.getOne)

contaRoutes.delete('/:id', contaController.delete)

module.exports = contaRoutes;