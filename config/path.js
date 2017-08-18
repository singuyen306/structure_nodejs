var appRoot = require('app-root-path');

const APP_PATH = appRoot + '/apps';
const CONTROLLER_PATH = APP_PATH + '/controllers';
const MODEL_PATH = APP_PATH + '/models';
const VIEW_PATH = APP_PATH + '/views';
const ROUTER_PATH = APP_PATH + '/routers/router';
const PUBLIC_PATH = appRoot + '/public';
const CONFIG_PATH = appRoot + '/config';
const COMMON_PATH = appRoot + '/common';
const TEST_PATH = appRoot + '/tests';

module.exports = Object.freeze({
    APP_PATH: APP_PATH,
    CONTROLLER_PATH: CONTROLLER_PATH,
    MODEL_PATH: MODEL_PATH,
    VIEW_PATH: VIEW_PATH,
    ROUTER_PATH: ROUTER_PATH,
    PUBLIC_PATH: PUBLIC_PATH,
    CONFIG_PATH: CONFIG_PATH,
    COMMON_PATH: COMMON_PATH,
    TEST_PATH: TEST_PATH
});
