const gluon = require('gluon');
const control = require('gluon/control');
const md5 = require('js-md5');
const user = require('../models/user');
const token = require('../models/token');

const router = gluon.router();

router.post('/', control(['account', 'password']), (req, res) => {
  user.find({
    where: {
      account: req.body.account,
      password: md5(req.body.password)
    }
  }).then((data) => {
    if (data == null) return res.unauthorized('invalid credentials');
    token.create({
      code: token.generateCode(),
      expire: new Date(Date.now() + 3600000),
      userId: data.id
    }).then((data) => res.ok(data)).catch((err) => res.database(err));
  }).catch((err) => res.database(err));
});

router.all('/', (req, res) => res.redirectRequest('use post'));

module.exports = router;