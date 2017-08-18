//define express
var express = require('express');
var appRoot = require('app-root-path');
//path
var path = require(appRoot + '/config/path');
//define router
var router = express.Router();
//define controller path
var controller = require(path.CONTROLLER_PATH);
/*
start backend router
*/
router.use('/admin', controller.admin_home);
router.use('/admin/login', controller.admin_login);
/*
end backend router
*/

/*
start frontend router
*/
router.use('/', controller.frontend_home);
/*
end frontend router
*/

module.exports = router;
