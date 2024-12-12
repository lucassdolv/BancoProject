const Conta = require("../models/contas")

const contaService = {
    create: async (conta) => {
        try {
            return await Conta.create(conta);
        }catch (error) {
            throw new Error('Ocorreu um erro ao criar a conta')
        }
    },
    update: async (id, contaToUpdate) => {
        try {
            const conta = await Conta.findByPk(id);
            if(!conta) {
                return null;
            }
            await conta.update(contaToUpdate);
            await conta.save();
            return conta;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar conta');
        }
    }
}