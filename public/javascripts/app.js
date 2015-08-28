'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'components'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/users/:id', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/beers', {
        templateUrl: 'partials/beer-list.html',
        controller: 'BeerCounterCtrl'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
