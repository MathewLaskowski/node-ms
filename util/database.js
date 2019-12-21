const Sequilze = require('sequelize');

const sequlize = new Sequilze(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST
  }
);

module.exports = sequlize;
