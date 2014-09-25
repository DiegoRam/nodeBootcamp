function CassandraDB(){}

CassandraDB.prototype.getById = function(id) {
	console.log("getting by id: " + id);
};

exports.DB = new CassandraDB();