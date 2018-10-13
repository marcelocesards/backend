global.db = require('./infra/database');
var app = require('./infra/express');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function(){
	console.log('Server running on http://%s:%s', ip, port);
});