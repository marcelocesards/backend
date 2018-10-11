global.db = require('./infra/database');
var http = require('http')
    ,app = require('./infra/express');

http.createServer(app).listen(3000, function() {
    console.log('Server listening port: ' + this.address().port);
});