'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'phonecatFilters',
  'phonecatControllers',
  'components'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/phone-list.html'
      }).
      when('/users/:id', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
