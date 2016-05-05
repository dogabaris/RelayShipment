const sequelize = require('sequelize');
const db = require('gluon/db');
const md5 = require('js-md5');

const Token = db.define('Token', {
  code: {
    type: sequelize.STRING,
    allowNull: false
  },

  expire: {
    type: sequelize.DATE,
    allowNull: false
  }
}, {
  freezeTableName: true,
  classMethods: {
    /**
     * @memberof Token
     * @returns {String}
     */
    generateCode: () => {
      return md5(new Date().toString());
    }
  },
  indexes: [{
    fields: ['code']
  }]
});

const User = require('./user');

Token.belongsTo(User, {foreignKey: "userId"});

module.exports = Token;