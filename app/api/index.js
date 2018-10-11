var api = {}

api.getAllCustomers = function(req, res, next) {
    global.db.findAllCustomer((e, docs) => {
        if (e) {return next(e);}
        if (!docs.length) {return next({error: "None customer found"});}
        res.json(docs);
    });
};

api.getCustomer = function(req, res, next){
    var id = req.query.id;
    var email = req.query.email;
    var name = req.query.name?req.query.name:"";
    global.db.getCustomer(id, email, name, (e, docs) => {
        if (e) {return next(e);}
        if (!docs.length) {return next({error: "None customer found"});}
        res.json(docs);
    });
}

api.createCustomer = function(req, res, next){
    var customer = req.body;
    global.db.insertCustomer(customer, (docs) => res.json(customer),
        (e) => {
            if (e) {return next(e);}
            res.json(docs);
        }
    );
}

api.updateCustomer = function(req, res, next){
    var customer = req.body;
    var id = req.params.param;
    global.db.updateCustomer(id, customer, (docs) => res.json(customer)
        ,(e) => {
            if (e) {return next(e);}
            res.json(docs);
    });
}

api.deleteCustomer = function(req, res, next){
    var id = req.params.param;
    global.db.deleteCustomer(id, (e, docs) => {
        if (e) {return next(e);}
        res.json({"removed_id": id, "result": docs});
    });
}

module.exports = api;