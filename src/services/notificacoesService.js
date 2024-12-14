const Notificacao = require('../models/notificacoes');

const notificacaoService = {
  create: async (notificacao) => {
    try {
        return await Notificacao.create(notificacao);
    } catch (error) {
        throw new Error('Ocorreu um erro ao criar Notificacao');
    }
},
  update: async (id, notificacaoToUpdate) => {
    try {
      const notificacao = await Notificacao.findByPk(id);
      if (!notificacao) {
        return null;
      }

      await notificacao.update(notificacaoToUpdate);
      await notificacao.save();
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao atualizar a notificação.");
    }
  },

  getById: async (id) => {
    try {
      const notificacao = await Notificacao.findByPk(id);
      if (!notificacao) {
        return null;
      }
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar a notificação");
    }
  },

  getAll: async () => {
    try {
      return await Notificacao.findAll();
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao buscar todas notificações.");
    }
  },

  delete: async (id) => {
    try {
      const notificacao = await Notificacao.findByPk(id);
      if (!notificacao) {
        return null;
      }
      await notificacao.destroy();
      return notificacao;
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao deletar a notificação.");
    }
  },
};

module.exports = notificacaoService;  