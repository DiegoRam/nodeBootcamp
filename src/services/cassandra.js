//cassandra.js
var cassandra = require('cassandra-driver');

function CassandraDB(){
	this.client = new cassandra.Client({contactPoints: ['localhost'], 
					keyspace: 'lautaro_data'});
}

CassandraDB.prototype.getById = function(id) {
	console.log("getting by id: " + id);
};

CassandraDB.prototype.getByName = function(username, callback){
	var query = 'SELECT username, timestamp, attend FROM attendant \
	WHERE username = ?';
	this.client.execute(query, [username], function(err, result){
		if (err){
			callback(err, null);
		} else {
			if(result.rows.length > 0) {
				var obj = [];
				for(var index in result.rows){
					obj.push({name: result.rows[index].username,
						date: result.rows[index].timestamp,
						attend: result.rows[index].attend});
				}
				callback(null, obj);
			} else {
				callback(null, []);
			}
		}
	});
}

exports.DB = new CassandraDB();