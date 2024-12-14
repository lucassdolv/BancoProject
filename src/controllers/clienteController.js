const clienteService = require("../services/clienteService")

const clienteController = {
    create: async (req, res) => {
        try {
            const cliente = await clienteService.create(req.body);
            return res.status(201).json({
                msg: 'Cliente criado com sucesso',
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao criar cliente'
            })
        }
    },
    update: async (req, res) => {
        try{
            const cliente = await clienteService.update(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'Cliente não encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Cliente atualizado com sucesso',
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o cliente'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const clientes = await clienteService.getAll();
            return res.status(200).json({
                msg: ' Todos clientes encontrados',
                clientes
            })
        } catch (eeror) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no Servidor'
            })
        }
    },
    getOne: async (req, res) => {
        try{
            const cliente = await clienteService.getById(req.params.id);
            if (!cliente){
                return res.status(400).json({
                    msg: 'Cliente não encontrado'
                })
            }
            return res.status(200),json({
                msg: 'Cliente encontrado',
                cliente
            })
        } catch(error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            })
        }
    },
    delete: async (req, res) => {
        try {
            const cliente = await clienteService.delete(req.params.id)
            if(!cliente) {
                return res.status(400).json({
                    msg: 'Cliente não encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso'
            })
        }catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            }) 
        }
    }
}

module.exports = clienteController;