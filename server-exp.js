var express = require('express'),
	app = express(),
	port = 8002;
	index = require('./src/controllers/index').HelloCatExp


app.get('/hello', index);

console.log("running application at: " + port);
app.listen(port);