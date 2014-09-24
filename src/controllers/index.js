//index.js
var db = require('../lib/updater').Db;

exports.HelloCat = function(req,res){
	var body = "Hello Cat";
	res.writeHead(200, {
  		'Content-Length': body.length,
  		'Content-Type': 'text/plain' });
	db.updateClubStats();
	db.updatePlayerStats();
	res.write(body);
	res.end();
};

//index.js
exports.HelloCatExp = function(req, res){
	res.send("Hello Cat from express");
}

