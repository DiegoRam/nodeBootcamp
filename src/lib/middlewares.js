//middlewares.js
function bodyBeatifier(req, res, next){
	console.log('Hey, we need some cool stuffs here!');
	next("I did a cool stuff");
}

function authenticated(req, res, next){
	if(service.db.isValidToken(req.params.token)){
		next("we are fine");
	} else {
		console.log('there was an error in here');
	}
}

//we need to dig deeper the proper error handling.


//clientcode.js

connect = require('connect');
myCoolServer = connect.createServer();

myCoolServer.use(bodyBeatifier);
myCoolServer.use(authenticated);