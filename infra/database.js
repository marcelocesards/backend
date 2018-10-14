var mongoClient = require("mongodb").MongoClient,
    ObjectId = require("mongodb").ObjectId;


var mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
	mongoURLLabel = "";
console.log("mongoURL:"+mongoURL);
console.log('process.env.DATABASE_SERVICE_NAME:'+process.env.DATABASE_SERVICE_NAME);
if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
	var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
		mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
		mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
		mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
		mongoPassword = process.env[mongoServiceName + '_PASSWORD']
		mongoUser = process.env[mongoServiceName + '_USER'];
	
	if (mongoHost && mongoPort && mongoDatabase) {
		mongoURLLabel = mongoURL = 'mongodb://';
		if (mongoUser && mongoPassword) {
		mongoURL += mongoUser + ':' + mongoPassword + '@';
		}
		// Provide UI label that excludes user id and pw
		mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
		mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
    }
}
console.log("url:" + mongoURL);
mongoClient.connect(mongoURL, { useNewUrlParser: true })
                        .then(conn => {
                            global.conn = conn.db("backend");
                            console.log('Connected to MongoDB at: %s', mongoURL);
                        })
                        .catch(err => console.log(err));

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
        .updateOne({_id: ObjectId(id)}, {$set:customer})
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