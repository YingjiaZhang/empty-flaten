'use strict';

function double_to_one(collection) {

	var one_array = [];
	for( var i=0; i<collection.length; i++ ){
		one_array = one_array.concat(collection[i]);
	}
	return one_array; 
  
}

module.exports = double_to_one;
