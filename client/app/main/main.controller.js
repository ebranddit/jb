'use strict';

angular.module('jbuilderApp')
  .controller('MainCtrl', function ($scope, $http) {
    var tiles = [];

    tiles.push({title: "Create", link: "/create", icon: "building-o"});
    tiles.push({title: "Manage", link: "/login", icon: "gear"});

    $scope.tiles = tiles;
  });
