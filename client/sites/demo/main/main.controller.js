'use strict';

angular.module('demoSite')
  .controller('MainController', function ($scope, Pages, $location) {
    $scope.pages = Pages.query(function(pages){
      $location.path(pages[0].url);
    });
  });
