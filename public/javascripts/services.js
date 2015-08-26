'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phones', ['$resource',
  function($resource){
    return $resource('phones', {}, {
      query: {method:'GET', params:$resource.params, isArray:true}
    });
  }
]);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('/phones/:id', {id:'@id'});
  }
]);