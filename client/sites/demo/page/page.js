'use strict';

angular.module('demoSite')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.page', {
        url: ':pageId',
        templateUrl: 'page/page.html',
        controller: 'PageController'
      });
  });
