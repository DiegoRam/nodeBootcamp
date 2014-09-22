var http = require("http"),
	index = require('./src/controllers/index').HelloCat,
	server = http.createServer(index),
	port = 8001;

server.listen(port);
console.log("server listening at: " + port);