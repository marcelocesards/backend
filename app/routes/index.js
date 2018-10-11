var api = require('../api');

module.exports  = function(app) {
    
    app.route('/v1/customer')
        .get(api.getAllCustomers)
        .post(api.createCustomer);
    
    app.route('/v1/customer/:param')
        .get(api.getCustomer)
        .put(api.updateCustomer)
        .delete(api.deleteCustomer);

    app.all('/', function(req, res) {
        res.send('Hello Word');
    });
    
};