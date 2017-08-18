var express = require('express');
var engine = require('ejs-mate');
var config = require('config');
var bodyParser = require('body-parser');
var session = require('express-session');

//path
var path = require('./config/path');

var app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: config.get("secret_key"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.VIEW_PATH);
app.set('view engine', 'ejs');

//static folder
app.use('/static', express.static(path.PUBLIC_PATH));
//router path
var router = require(path.ROUTER_PATH);
app.use(router);

var host = config.get('server.host');
var port = config.get('server.port');

app.listen(port, host, function(){
    console.log("Server is running on port " + port);
});
