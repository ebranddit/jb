'use strict';

angular.module('demoSite')
.factory('Pages', ['$resource',
function($resource){
  return $resource('api/page/:id', {});
}]);
