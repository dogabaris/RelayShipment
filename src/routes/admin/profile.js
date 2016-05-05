const gluon = require('gluon');
const generator = require('gluon/generator');
const authentication = require('./authentication');
const Profile = require('../../models/profile');

const router = gluon.router();

router.use('/', authentication);
generator(router, Profile);
module.exports = router;