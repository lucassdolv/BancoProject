const { Router } = require("express");
const adminController = require('../controllers/adminController')
const adminRoutes = Router()
const authenticateToken = require('../middlewares/authenticateToken');
const { validateAdmin, validateAdminId } = require("../middlewares/validateAdmin");

adminRoutes.post('/', validateAdmin, adminController.create);

adminRoutes.put('/:id', validateAdmin, validateAdminId, adminController.update);

adminRoutes.delete('/:id', validateAdminId, adminController.delete);

adminRoutes.get('/:id', validateAdminId, adminController.getOne);

adminRoutes.get('/', adminController.getAll)

adminRoutes.put('/auth/login', adminController.login);

module.exports = adminRoutes