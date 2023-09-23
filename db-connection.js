// sequelize.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbtest', 'admin', 'masterTFM', {
    host: 'db-autoparts.cssymwvopatw.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
});

module.exports = sequelize;
