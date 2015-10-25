'use strict';

angular.module('jbuilderApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    var menuItems = [];

    menuItems.push({title: "Home", link: "/"});
    menuItems.push({title: "Features", link: "/feature"});
    menuItems.push({title: "Plans", link: "/plan"});
    menuItems.push({title: "Contact", link: "/contact"});


    $scope.menuItems = menuItems;

    $scope.menuCollapsed = true;

    $scope.toggleMenu = function(){
      $scope.menuCollapsed = !$scope.menuCollapsed;
    }

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
