'use strict';

angular.module('jbuilderApp')
  .controller('MainCtrl', function ($scope, $http) {
    var navItems = [];

    navItems.push({label: "Tour", url: "/tour"});
    navItems.push({label: "Create", url: "/create"});
    navItems.push({label: "Manage", url: "/manage"});
    navItems.push({label: "Testimonials", url: "/testimonials"});

    $scope.navItems = navItems;

    console.log($scope.navItems);
  });
