const { Router } = require("express");
const adminRoutes = require("./adminRotas");
const clienteRoutes = require("./clienteRotas");

const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', clienteRoutes);

module.exports = router;