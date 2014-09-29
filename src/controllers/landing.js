function LandingController(){
	this.path = "landingPath";
};

LandingController.prototype.wellcome = function(req, res){
	var self = this;
	return function(req, res){
		res.send('hello Cat');
	}
}();

LandingController.prototype.mypage = function(req, res){
	res.render('mypage');
}

//to add instance to available modules
module.exports = new LandingController();