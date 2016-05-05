const sequelize = require('sequelize');
const db = require('gluon/db');

module.exports = db.define('User', {
  account: {
    type: sequelize.STRING(32),
    allowNull: false,
    unique: true,
    validate: {
      is: /^[\w]{3,30}$/
    }
  },

  password: {
    type: sequelize.STRING(32),
    allowNull: false,
    validate: {
      is: /^[a-f0-9]{32}$/
    }
  },

  accessLevel: {
    type: sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  freezeTableName: true,
  paranoid: true
});