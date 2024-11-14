const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conta = sequelize.define('Contas', {
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clientes,
            key: 'id'
        }
    },
    saldo: {
        type:  DataTypes.DOUBLE,
        allowNull: false
    }
})
Cliente.hasMany(Conta, { foreignKey: 'clienteId' });
Conta.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Conta