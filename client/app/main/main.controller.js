'use strict';

angular.module('jbuilderApp')
  .controller('MainCtrl', function ($scope, $http) {
    var navItems = [];

    navItems.push({label: "Tour", url: "/tour"});
    navItems.push({label: "Create", url: "/create"});
    navItems.push({label: "Manage", url: "/manage"});

    $scope.navItems = navItems;

    $scope.xfShow = false;

    $scope.toggleXF = function(){
      $scope.xfShow = !$scope.xfShow;
    }
  });
