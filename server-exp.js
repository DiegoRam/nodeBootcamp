var express = require('express'),
	app = express(),
	index = require('./src/controllers/index').HelloCatExp

app.get('/hello', index);
//app.get('/', welcome);

console.log("running application at: " );

module.exports = app;