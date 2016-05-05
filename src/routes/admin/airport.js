const gluon = require('gluon');
const generator = require('gluon/generator');
const authentication = require('./authentication');
const Airport = require('../../models/airport');

const router = gluon.router();

router.use('/', authentication);
generator(router, Airport);
module.exports = router;