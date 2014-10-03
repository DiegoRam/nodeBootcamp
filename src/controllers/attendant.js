//attendant.js
module.exports = function(services){
	return new AttendantController(services);
}

function AttendantController(services){
	this.services = services;
}

AttendantController.prototype.getByName = function(){
	var me = this;
	return function(req, res){		
		me.services.db.getByName('lautaro', function(err, data){
			if(err){
				res.send(err);
			} else {
				res.send(data);	
			}		
		});
	}
};

AttendantController.prototype.listByName = function() {
	var me = this;
	return function(req, res){
		me.services.db.getByName('lautaro', function(err, data){
			if (err) {
				res.send(err);
			} else {
				res.render('listbyuser', {entries: data});
			}
		});
	}
};
