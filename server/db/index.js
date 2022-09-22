// const { Sequelize } = require('sequelize');

// const db = new Sequelize({
//     dialect: 'sqlite',
//     storage: ':memory:',
//     logging: false
// })

// module.exports = db

const { Sequelize, DataTypes} =
    require ('sequelize');
    const path = require ('path');

    const db = new Sequelize ( {
       dialect : 'sqlite' ,
       storage : path.join(__dirname, 'db.sqlite'),
        logging : false
    })

    module.exports = db