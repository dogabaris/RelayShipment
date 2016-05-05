const sequelize = require('sequelize');
const db = require('gluon/db');
const User = require('./user');

const Profile = db.define('Profile', {
  name: {
    type: sequelize.STRING(64)
  },

  surname: {
    type: sequelize.STRING(64)
  },

  birthDate: {
    type: sequelize.DATE
  },

  passportNumber: {
    type: sequelize.TEXT
  },

  country: {
    type: sequelize.TEXT
  },

  city: {
    type: sequelize.TEXT
  },

  phoneNumber: {
    type: sequelize.STRING(64),
    validate: {
      isMobilePhone: true
    }
  }
}, {
  freezeTableName: true,
  paranoid: true
});

User.hasOne(Profile, {foreignKey: 'profileId'});

module.exports = Profile;