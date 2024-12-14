const notificacaoService = require("../services/notificacoesService"); 

const notificacaoController = {
  create: async (req, res) => {
    try {
      const notificacao = await notificacaoService.create(req.body); 
      return res.status(201).json({
        msg: "Notificação criada com sucesso", 
        notificacao, 
      });
    } catch (error) {
      console.error("erro:", error);
      return res.status(500).json({
        msg: "Erro ao tentar criar a notificação!",
      });
    }
  },
  update: async (req, res) => {
    try {
      const notificacao = await notificacaoService.update(req.params.id, req.body); 
      if (!notificacao) {
        return res.status(400).json({
          msg: "Notificação não encontrada!", 
        });
      }
      return res.status(200).json({
        msg: "Notificação atualizada com sucesso",
        notificacao, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar atualizar a notificação.",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const notificacoes = await notificacaoService.getAll(); 
      return res.status(200).json({
        msg: "Todas as Notificações",
        notificacoes, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao buscar as notificações.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const notificacao = await notificacaoService.getById(req.params.id); 
      if (!notificacao) {
        return res.status(400).json({
          msg: "Notificação não encontrada!", 
        });
      }
      return res.status(200).json({
        msg: "Notificação encontrada",
        notificacao, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao buscar a notificação.",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const notificacao = await notificacaoService.delete(req.params.id); 
      if (!notificacao) {
        return res.status(400).json({
          msg: "Notificação não encontrada.",
        });
      }
      return res.status(200).json({
        msg: "Notificação deletada com sucesso.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao deletar a notificação.",
      });
    }
  },
};

module.exports = notificacaoController; 