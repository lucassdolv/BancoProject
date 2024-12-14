const { DataTypes } = require(' sequelize ');
const sequelize = require('../config/database');

const Transacoes = sequelize.define('Transacoes', {
    contaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Contas,
            key: 'id'
        }
    },
    tipoConta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipoTransicao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    dataTransicao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Transacoes;