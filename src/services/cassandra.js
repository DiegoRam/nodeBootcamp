var cassandra = require('cassandra-driver');
//cassandra.js
function CassandraDB(){
	this.client = new cassandra.Client({contactPoints: ['localhost'], 
					keyspace: 'lautaro_data'});
}

CassandraDB.prototype.getById = function(id) {
	console.log("getting by id: " + id);
};

CassandraDB.prototype.getByName = function(username, callback){
	var query = "SELECT username, timestamp, attend FROM attendant \
	WHERE username = ?";
	client.execute(query, [username], function(err, result){
		if (err){
			callback(err, null);
		} else {
			if(result.rows.lenght > 0) {
				callback(null, result.rows);
			} else {
				callback(null, []);
			}
		}
	});
}

exports.DB = new CassandraDB();