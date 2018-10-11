var mongoClient = require("mongodb").MongoClient,
    ObjectId = require("mongodb").ObjectId;

mongoClient.connect("mongodb://localhost/backend")
            .then(conn => global.conn = conn.db("backend"))
            .catch(err => console.log(err))

function findAllCustomer(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

function getCustomerByParameter(id, email, name, callback){  
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

function insertCustomer(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

function updateCustomer(id, customer, callback){    
    global.conn.collection("customers").update({_id: ObjectId(id)}, customer, callback);
}

function deleteCustomer(id, callback){    
    global.conn.collection("customers").deleteOne({_id: ObjectId(id)}, callback);
}

module.exports = { 
    findAllCustomer, 
    getCustomerByParameter, 
    insertCustomer, 
    updateCustomer,
    deleteCustomer
}