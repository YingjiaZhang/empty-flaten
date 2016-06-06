'use strict';

function remove_repetition(one_array){
	for(var i=0; i<one_array.length; i++){
		for(var j=0; j<one_array.length; j++){
			if ( i != j && one_array[i] === one_array[j]){
				one_array.splice(j,1);
			}
		}
	}
	return one_array;
}

function double_to_one(collection) {

 	var one_array = [];
	for( var i=0; i<collection.length; i++ ){
		one_array = one_array.concat(collection[i]);
	}
	return remove_repetition(one_array);
}

module.exports = double_to_one;
