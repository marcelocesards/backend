var api = require('../api');

module.exports  = function(app) {
    app.all('/', function(req, res) {
        res.send('Hello Word');
    });
    
    app.route('/v1/customer')
        .get(api.getAllCustomers)
        .post(api.createCustomer);
    
    app.route('/v1/customer/:param')
        .get(api.getCustomer)
        .put(api.updateCustomer)
        .delete(api.deleteCustomer);

    app.use(function(err, req, res, next) {
        res.status(500);
        res.json(err);
    });
    
};