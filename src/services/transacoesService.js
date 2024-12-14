const Transacoes = require("../models/transacoes");

const transacoesService = {
  create: async (transacao) => {
    try {
      return await Transacoes.create(transacao);
  } catch (error) {
      throw new Error('Ocorreu um erro ao criar Transacao');
  }
},
  update: async (id, transacaoToUpdate) => {
    try {
      const transacao = await Transacoes.findByPk(id);
      if(!transacao) {
          return null;
      }
      await transacao.update(transacaoToUpdate);
      await transacao.save();
      return transacao;
  } catch (error) {
      throw new Error('Ocorreu um erro ao atualizar transação');
  }
  },
  getById: async (id) => {
    try {
      const transacao = await Transacoes.findByPk(id);
      if (!transacao) {
        return null; 
      }
      return transacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar a transação");
    }
  },

  getAll: async () => {
    try {
      return await Transacoes.findAll();
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar todas as transações.");
    }
  },

  delete: async (id) => {
    try {
      const transacao = await Transacoes.findByPk(id);
      if (!transacao) {
        return null; 
      }
      await transacao.destroy();
      return transacao;
    } catch (error) {
      console.error(error); 
      throw new Error("Ocorreu um erro ao deletar a transação.");
    }
  },
};

module.exports = transacoesService;