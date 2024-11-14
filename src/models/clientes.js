const { DataTypes } = require('sequelize') 
const sequelize = require('../config/database')

const Cliente = sequelize.define('Clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Cliente;
