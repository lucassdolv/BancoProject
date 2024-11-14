const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notificacao = sequelize.define('Notificacoes', {
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clientes,
            key: 'id'
        }
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNotificacao: {
        type: DataTypes.DATE,
        allowNull: false
    }

})