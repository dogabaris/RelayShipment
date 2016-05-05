require('gluon')({
  ready: () => {
    const db = require('gluon/db');
    db.sync().then(() => {
      const user = require('./models/user');
      const airport = require('./models/airport');
      const token = require('./models/token');
      user.findOrCreate({
        where: {account: 'admin'},
        defaults: {
          account: 'admin',
          password: 'c4ca4238a0b923820dcc509a6f75849b',
          accessLevel: 1337
        }
      }).spread((model) => {
        token.findOrCreate({
          where: {code: 'c4ca4238a0b923820dcc509a6f75849b'},
          defaults: {
            code: 'c4ca4238a0b923820dcc509a6f75849b',
            expire: new Date(Date.now() + 24 * 60 * 60 *1000), // 24 hours max
            userId: model.id
          }
        });
      });

      airport.findOrCreate({
        where: {name: 'Sabiha Gökçen Havalimanı'},
        defaults: {
          name: 'Sabiha Gökçen Havalimanı',
          country: 'Türkiye',
          city: 'İstanbul'
        }
      });

      airport.findOrCreate({
        where: {name: 'Atatürk Havalimanı'},
        defaults: {
          name: 'Atatürk Havalimanı',
          country: 'Türkiye',
          city: 'İstanbul'
        }
      });

      airport.findOrCreate({
        where: {name: 'Cengiz Topel Havalimanı'},
        defaults: {
          name: 'Cengiz Topel Havalimanı',
          country: 'Türkiye',
          city: 'Kocaeli'
        }
      });

      require('node-schedule').scheduleJob('*/10 * * * *', () => {
        token.destroy({
          where: {
            expire: {$lt: new Date}
          }
        });
      });
    });
  }
});