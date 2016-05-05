const sequelize = require('sequelize');
const db = require('gluon/db');
const Advertisement = require('./advertisement');

const Airport = db.define('Airport', {
  name: {
    type: sequelize.STRING(256),
    allowNull: false
  },

  country: {
    type: sequelize.STRING(256),
    allowNull: false
  },

  city: {
    type: sequelize.STRING(256),
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Advertisement.belongsTo(Airport, {foreignKey: "sourceAirportId"});
Advertisement.belongsTo(Airport, {foreignKey: "targetAirportId"});

module.exports = Airport;