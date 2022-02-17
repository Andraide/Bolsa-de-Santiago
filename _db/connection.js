const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('bolsa-de-santiago', 'postgres', 'Piramide14141515', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize