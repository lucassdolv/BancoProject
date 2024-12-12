const Cliente = require('../models/clientes');
const { update } = require('./adminService');

const clienteService = {
    create: async (cliente) => {
        try{
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Cliente')
        }
    },
    update: async (id, clienteToUpdate) => {
        try{
            const cliente = await Cliente.findByPk(id);
            if(!cliente){
                return null;
            }
            await cliente.update(clienteToUpdate);
            await cliente.save();
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar cliente')
        }
    },
    getById: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar cliente')
        }
    },
    getAll: async () => {
        try {
            return await Cliente.findAll()
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar os clientes');
        }
    },
    delete: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            await cliente.destroy();
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o cliente')
        }
    }
}

module.exports = clienteService;