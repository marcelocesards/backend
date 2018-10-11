var api = require('../api');

module.exports  = function(app) {
    
    app.route('/v1/user')
        .post(api.postUser)
        .get(api.getUser);

    app.route('/v1/customer')
        .get(api.getAllCustomers);
    /*
    app.route('/v1/user/:userId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/grupos', api.listaGrupos)
    app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);
      */  
    app.all('/', function(req, res) {
        res.send('Hello Word');
    });
    
};