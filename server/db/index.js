const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
})

module.exports = db