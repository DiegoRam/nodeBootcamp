
//server-express.js
var express = require('express'),
	app = express(),
	index = require('./src/controllers/index').HelloCatExp,
	landing = require('./src/controllers/landing'),
	services = require('./src/services');
	attendant = require('./src/controllers/attendant')(services);

app.set('views', __dirname + '/templates')
app.set('view engine', 'jade')
app.use('/public', express.static(__dirname + '/static'));



app.get('/hello', index);
app.get('/',landing.wellcome);
app.get('/mypage2', landing.mypage);
app.get('/attendant/:name', attendant.getByName());
app.get('/attendant/:name/list', attendant.listByName());

//app.listen(9001, function(){
//	console.log("running application at: " );
//});

module.exports = app;
