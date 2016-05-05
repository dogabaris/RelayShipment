const sequelize = require('sequelize');
const db = require('gluon/db');

const Advertisement = db.define('Advertisement', {
  name: {
    type: sequelize.STRING(256),
    allowNull: false
  },

  weight: {
    type: sequelize.DOUBLE,
    allowNull: false
  },

  volume: {
    type: sequelize.DOUBLE,
    allowNull: false
  },

  lengthX: {
    type: sequelize.DOUBLE,
    allowNull: false
  },

  lengthY: {
    type: sequelize.DOUBLE,
    allowNull: false
  },

  lengthZ: {
    type: sequelize.DOUBLE,
    allowNull: false
  },

  isActivated: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  freezeTableName: true
});

const User = require('./user');

Advertisement.belongsTo(User, {foreignKey: "userId"});

module.exports = Advertisement;