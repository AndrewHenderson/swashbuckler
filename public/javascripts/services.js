'use strict';

/* Services */

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('Users', ['$resource',
  function($resource){
    return $resource('json/persons', {}, {
      query: {method:'GET', params:$resource.params, isArray:true},
      foo: {method:'POST', params:$resource.params}
    });
  }
]);

userServices.factory('User', ['$resource',
  function($resource){
    return $resource('/json/persons/:id');
  }
]);