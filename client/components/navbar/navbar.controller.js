'use strict';

angular.module('jbuilderApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    var navItems = [];

    navItems.push({label: "Tour", url: "/tour"});
    navItems.push({label: "Create", url: "/create"});
    navItems.push({label: "Manage", url: "/manage"});

    $scope.navItems = navItems;

    $scope.xfShow = false;

    $scope.toggleXF = function(){
      $scope.xfShow = !$scope.xfShow;
    }
    
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
