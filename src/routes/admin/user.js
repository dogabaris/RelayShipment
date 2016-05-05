const gluon = require('gluon');
const generator = require('gluon/generator');
const authentication = require('./authentication');
const User = require('../../models/user');

const router = gluon.router();

router.use('/', authentication);
generator(router, User);
module.exports = router;