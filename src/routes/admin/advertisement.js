const gluon = require('gluon');
const generator = require('gluon/generator');
const authentication = require('./authentication');
const Advertisement = require('../../models/advertisement');

const router = gluon.router();

router.use('/', authentication);
generator(router, Advertisement);
module.exports = router;