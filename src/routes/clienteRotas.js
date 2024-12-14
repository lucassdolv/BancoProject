const { Router } = require("express");
const clienteController = require('../controllers/clienteController');
const clienteRoutes = Router();
const { validateCliente, validateClienteId } = require('../middlewares/validateCliente')


clienteRoutes.post('/', validateCliente, clienteController.create ); 

clienteRoutes.put('/:id', validateCliente, validateClienteId, clienteController.update); 

clienteRoutes.delete('/:id',validateCliente, validateClienteId, clienteController.delete);

clienteRoutes.get('/:id', validateClienteId, clienteController.getOne); 

clienteRoutes.get('/', clienteController.getAll); 

module.exports = clienteRoutes;