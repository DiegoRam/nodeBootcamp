var grettings = "Hello Cat";
console.log(grettings);


//hellocat.js
module.exports = function(){
	console.log("Hello Cat");
}

//clientcode.js
var hello =  require('./hellocat');
hello();


//hellocat.js
exports.hello = function(){
	console.log("Hello Cat");
}

//clientcode.js
var helloLocal =  require('./hellocat').hello;
helloLocal();


//hellocat.js
module.exports = new Hello();

function Hello(){};

Hello.prototype.cat = function() {
	console.log("hello cat");
};


//clientcode.js
var helloLocal =  require('./hellocat');
helloLocal.cat();


//hellocat.js
exports.Hello = new Hello();

function Hello(){};

Hello.prototype.cat = function() {
	console.log("hello cat");
};


//clientcode.js
var helloLocal =  require('./hellocat').Hello;
helloLocal.cat();

//Anonymous prototype

//byecat.js
module.exports= Bye;

function Bye(){};

Bye.prototype.cat = function() {
	console.log("hello cat");
};


//clientcode.js
var Bye =  require('./byecat');
var bye = new Bye();
bye.cat();




//Named prototype

//helloNurse.js
exports = Nurse;

function Nurse(){};

Nurse.prototype.hello = function() {
	console.log("hello Nurse!");
};


//clientcode.js
var Nurse =  require('./helloNurse').Nurse;
var nurse = new Nurse();
nurse.hello();


