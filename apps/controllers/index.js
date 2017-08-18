module.exports = {
    //backend module
    admin_home: require(__dirname + '/backend/index'),
    admin_login: require(__dirname + '/backend/login'),

    //frontend module
    frontend_home: require(__dirname + '/frontend/index')
}
