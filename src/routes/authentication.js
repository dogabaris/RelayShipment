const gluon = require('gluon');
const token = require('../models/token');
const user = require('../models/user');

const router = gluon.router(null, true);
router.use('/', (req, res, next) => {
  const code = req.get('token');
  if (!/^[a-f0-9]{32}$/.test(code)) return res.unauthorized('invalid token code');
  token.find({
    include: [user],
    where: {code}
  }).then((data)=> {
    if (data == null || data.expire < new Date) return res.expiredToken('probably your token has been removed, please take new one');
    req.user = data.User;
    next();
  }).catch((err) => res.database(err));
});

module.exports = router;