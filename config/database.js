var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/backend")
            .then(conn => global.conn = conn.db("backend"))
            .catch(err => console.log(err))

function findAllCustomer(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

function insertCustomer(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

module.exports = { 
    findAllCustomer, insertCustomer
}