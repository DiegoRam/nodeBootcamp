var vows = require('vows'),
	assert = require('assert');

var cassandra = require('../../src/services/cassandra');

vows.describe('Cassandra module').addBatch({
	'handler': {
		topic: function(){return cassandra},
		'has a client': function(cassandra){
			assert.isNotNull(cassandra.DB.client);
		},
	},
	'handler async': {
		topic: function(){return cassandra},
		'should retrieve a list of element for user lautaro': {
			topic: function(cassandra){
				cassandra.DB.getByName('lautaro', this.callback);	
			},
			'results': function(err, data){
				assert.isNotNull(data);
				assert.equal(data.length, 2);
				assert.equal(data[0].name, 'lautaro');
			}
		}
	}
}).export(module);

