const { Router } = require("express");
const adminRoutes = require("./adminRotas");
const clienteRoutes = require("./clienteRotas");
const transacoesRoutes = require("./transacoesRotas");
const contaRoutes = require("./contasRotas")
const notificacoesRoutes = require("./notificacoesRotas")

const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', clienteRoutes);
router.use('/contas', contaRoutes)
router.use('/trasacoes', transacoesRoutes);
router.use('/notificacoes', notificacoesRoutes)


module.exports = router;