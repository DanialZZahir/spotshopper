const db = require('../db');
const { DataTypes } = require('sequelize')

const items = db.define('items', {
    ItemType: {
        type: DataTypes.STRING
    },
    Name: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.STRING,
        type: DataTypes.INTEGER,
    },
    Description: {
        type: DataTypes.STRING
    }
})

module.exports = items