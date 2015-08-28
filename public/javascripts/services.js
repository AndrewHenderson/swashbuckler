'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phones', ['$resource',
  function($resource){
    return $resource('json/persons', {}, {
      query: {method:'GET', params:$resource.params, isArray:true}
    });
  }
]);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('/json/persons/:id', {id:'@id'});
  }
]);