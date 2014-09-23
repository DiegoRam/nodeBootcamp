function LandingController(){
	this.path = "landingPath";
};

LandingController.prototype.wellcome = function(req, res){
	var self = this;
	return function(req, res){
		res.render('wellcome');
	}
}();

//to add instance to available modules
module.exports = new LandingController();