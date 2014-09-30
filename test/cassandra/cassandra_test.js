var vows = require('vows'),
	assert = require('assert');

var cassandra = require('../../src/services/cassandra');

vows.describe('Cassandra module').addBatch({
	'handler': {
		topic: function(){return cassandra},
		'has a client': function(cassandra){
			assert.isNotNull(cassandra.client);
		}
	}
}).export(module);

