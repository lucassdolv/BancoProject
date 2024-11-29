const adminService = require("../services/adminService")

const adminController = {
    create: async (req, res) => {
        try {
            const admin = await adminService.create(req.body);
            return res.status(201).json({
                msg: 'Admin criado com sucesso',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o Admin'
            })
        }
    },
    update: async (req, res) => {
        try {
            const admin = await adminService.update(req.parms.id);
            if(!admin) {
                return res.status(400).json({
                    msg: 'Admin nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Admin atualizado com sucesso',
                admin
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o Admin'
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const admins =  await adminService.getAll();
            return res.status(200).json({
                msg: 'Todos os admins:',
                admins
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro com o servidor'
            })
        }
    },
    getOne: async (req, res) => {
        try{
            const admin = await adminService.getById(req.params.id);
            if (!admin) {
                return res.status(400).json({
                    msg: 'Admin nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Admin encontrado',
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            })
        }
    },
    delete: async (req, res) => {
        try {
            const admin = await adminService.delete(req.params.id);
            if (!admin) {
                return res.status(400).json({
                    
                })
            }
        }
    }
 }