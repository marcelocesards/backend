var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;