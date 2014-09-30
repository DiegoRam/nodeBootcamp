var cassandra = require('cassandra-driver');
//cassandra.js
function CassandraDB(){
	this.client = new cassandra.Client({contactPoints: ['localhost'], 
					keyspace: 'lautaro_data'});
}

CassandraDB.prototype.getById = function(id) {
	console.log("getting by id: " + id);
};

exports.DB = new CassandraDB();