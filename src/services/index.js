//index.js
var db = require('./cassandra').DB,
	kvs = require('./redis').KV,
	logging = require('./redis').logging;

module.exports = {
	db: db,
	kvs: kvs,
	logging: logging
}