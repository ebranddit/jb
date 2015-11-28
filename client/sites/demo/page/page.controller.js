'use strict';

angular.module('demoSite')
  .controller('PageController', function ($scope, $http, $stateParams) {
      $scope.pageId = $stateParams.pageId;
  });
