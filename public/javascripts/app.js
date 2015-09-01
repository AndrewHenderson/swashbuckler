'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'phonecatFilters',
  'userControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/user-list.html',
        controller: "UserListCtrl"
      }).
      when('/users/:id', {
        templateUrl: 'partials/user-details.html',
        controller: "UserDetailCtrl"
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
