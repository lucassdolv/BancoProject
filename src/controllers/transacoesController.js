const transacoesService = require('../services/transacoesService'); 

const transacoesController = { 
  create: async (req, res) => {
    try {
      const transacao = await transacoesService.create(req.body); 
      return res.status(201).json({
        msg: 'Transação criada com sucesso',
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: 'Erro ao tentar criar a transação!'
      });
    }
  },
  update: async (req, res) => {
    try{
        const transacao = await transacaoService.update(req.params.id, req.body);
        if (!user) {
            return res.status(400).json({
                msg: 'Transação não encontrado'
            })
        }
        return res.status(200).json({
            msg: 'Transação atualizado com sucesso',
            transacao
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Erro ao atualizar o transação'
        })
    }
},
  getAll: async (req, res) => {
    try {
      const transacoes = await transacoesService.getAll(); 
      return res.status(200).json({
        msg: 'Todas as Transações',
        transacoes,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Erro ao buscar as transações.',
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const transacao = await transacoesService.getById(req.params.id); 
      if (!transacao) {
        return res.status(400).json({
          msg: 'Transação não encontrada!',
        });
      }
      return res.status(200).json({
        msg: 'Transação encontrada',
        transacao, 
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Erro ao buscar a transação.',
      });
    }
  },

  delete: async (req, res) => {
    try {
      const transacao = await transacoesService.delete(req.params.id); 
      if (!transacao) {
        return res.status(400).json({
          msg: 'Transação não encontrada.',
        });
      }
      return res.status(200).json({
        msg: 'Transação deletada com sucesso.',
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Erro ao deletar a transação.',
      });
    }
  },
};

module.exports = transacoesController; 