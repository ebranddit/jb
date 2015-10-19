'use strict';
angular.module('jbuilderApp')
.factory('Language', function($http, Setup){

var language = {};

// retrieve languages
language.list = function(callback){

	// post to API
	$http.get('data/languages.json', {cache:true})
		.success(callback);
}

return language;

});
