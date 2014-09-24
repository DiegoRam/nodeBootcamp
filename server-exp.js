//server-express.js
var express = require('express'),
	app = express(),
	index = require('./src/controllers/index').HelloCatExp,
	landing = require('./src/controllers/landing');

app.set('views', __dirname + '/src/templates')
app.set('view engine', 'jade')
app.use('/public', express.static(__dirname + '/src/static'));



app.get('/hello', index);
app.get('/',landing.wellcome);
app.get('/mypage2', landing.mypage);

console.log("running application at: " );

module.exports = app;
