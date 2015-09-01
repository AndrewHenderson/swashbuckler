'use strict';

/* Controllers */

var userControllers = angular.module('userControllers', ['userServices']);

userControllers.controller('UserListCtrl', ['$scope', '$routeParams', 'Users',
  function($scope, $routeParams, Users) {
    $scope.users = Users.query($routeParams);
    $scope.orderProp = 'age';
  }]);

userControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
  function($scope, $routeParams, User) {
    $scope.user = User.get({id:$routeParams.id}, function(user) {
      $scope.mainImageUrl = user.images ? user.images[0] : null;
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    User.save({name: 'George Costanza'});
  }]);