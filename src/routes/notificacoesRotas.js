const { Router } = require('express');
const notificacaoController = require("../controller/notificacoesController");
const notificacoesRoutes = Router();


notificacoesRoutes.post('/', notificacaoController.create)

notificacoesRoutes.get('/', notificacaoController.getAll)

notificacoesRoutes.get('/:id', notificacaoController.getOne)

notificacoesRoutes.put('/:id', notificacaoController.update)

notificacoesRoutes.delete('/:id', notificacaoController.delete)

module.exports = notificacoesRoutes;