'use strict';

/* Services */

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('Users', ['$resource',
  function($resource){
    return $resource('api/persons', {}, {
      query: {method:'GET', params:$resource.params, isArray:true}
    });
  }
]);

userServices.factory('User', ['$resource',
  function($resource){
    return $resource('/api/persons/:id', {}, {
      update: {method:'PUT'}
    });
  }
]);