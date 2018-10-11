var api = {}

api.getUser = function(req, res) {
    res.json({"_name":"Marcelo"}); 
};

api.getAllCustomers = function(req, res) {
    global.db.findAllCustomer((e, docs) => {
        if (e) {return console.log(e);}
        res.json(docs);
    });
};

api.createCustomer = function(req, res){
    var customer = req.body;
    global.db.insertCustomer(customer, (e, docs) => {
        if (e) {return console.log(e);}
        res.json(docs);
    });
}

api.postUser = function(req, res){
    var usuario = req.body;
    console.log(usuario._name);
    res.send('Post realizado com sucesso: '+ usuario._name);
};
/*
api.adiciona = function(req, res) {
    var foto = req.body;
    delete foto._id;
    db.insert(foto, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.busca = function(req, res) {
   db.findOne({_id: req.params.fotoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {
    console.log('Parâmetro recebido:' + req.params.fotoId);
    db.update({_id : req.params.fotoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.lista = function(req, res) {
    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPorGrupo = function(req, res) {
    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });

};

api.remove = function(req, res) {

    db.remove({ _id: req.params.fotoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'esporte'
        }, 
        { 
            _id: 2, 
            nome: 'lugares', 
        }, 
        { 
            _id: 3, 
            nome: 'animais'
        }
    ]);
        
};
*/

module.exports = api;