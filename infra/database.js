var mongoClient = require("mongodb").MongoClient,
    ObjectId = require("mongodb").ObjectId;

mongoClient.connect("mongodb://localhost:27017/backend", { useNewUrlParser: true })
            .then(conn => global.conn = conn.db("backend"))
            .catch(err => console.log(err))

function findAllCustomer(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

function getCustomer(id, email, name, callback){  
    if(name){var regex = new RegExp([name], "i");}
    
    global.conn.collection("customers").find(
        { $or: 
            [                 
                {email:{$eq:email}}, 
                {_id: ObjectId(id)}, 
                {name:regex}
            ] 
        }).toArray(callback);
}

function insertCustomer(customer, callback, callbackError){
    global.conn.collection("customers")
        .insertOne(customer)
        .then(callback)
        .catch(callbackError);
}

function updateCustomer(id, customer, callback, errorCallback){    
    global.conn.collection("customers")
        .update({_id: ObjectId(id)}, customer)
        .then( callback)
        .catch(errorCallback);
}

function deleteCustomer(id, callback){    
    global.conn.collection("customers").deleteOne({_id: ObjectId(id)}, callback);
}

module.exports = { 
    findAllCustomer, 
    getCustomer, 
    insertCustomer, 
    updateCustomer,
    deleteCustomer
}