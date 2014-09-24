//boiler.js

var keyword= 'whatever',
	url = "http://google.com.ar",
	http = require('http');


var response = http.get(url + "?query=" + keyword);


if(reponse){
	console.log('there is a bunch of stuffs');
} else {
	console.log('meehh, nothing');
}