'use strict';

angular.module('demoSite')
  .controller('MainController', function ($scope, $http, $location) {
    var pages = [];

    pages.push({title: "Home", id: "home", icon: "building-o"});
    pages.push({title: "Teachers", id: "teachers", icon: "building-o"});
    pages.push({title: "About Us", id: "about", icon: "gear"});

    $scope.pages = pages;

    $location.path('/home');
  });
