'use strict';

/* Directives */

angular.module('components', ['phonecatControllers'])

    .directive('users', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: 'PhoneListCtrl',
            template:
                '<ul class="phones">' +
                '<li ng-repeat="phone in phones | filter:query | orderBy:orderProp" class="thumbnail">' +
                '<a href="#/users/{{phone._id}}" class="thumb"><img ng-src="{{phone.imageUrl}}"></a>' +
                '<a href="#/users/{{phone._id}}">{{phone.name}}</a>' +
                '<p>{{phone.snippet}}</p>' +
                '</li>' +
                '</ul>',
            replace: true
        };
    })


    .directive('phoneDetail', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: 'PhoneDetailCtrl',
            template: '<h1>{{phone.name}}</h1>',
            replace: true
        }
    });

    //});    .directive('tabs', function() {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        controller: function($scope, $element) {
    //            var panes = $scope.panes = [];
    //
    //            $scope.select = function(pane) {
    //                angular.forEach(panes, function(pane) {
    //                    pane.selected = false;
    //                });
    //                pane.selected = true;
    //            }
    //
    //            this.addPane = function(pane) {
    //                if (panes.length == 0) $scope.select(pane);
    //                panes.push(pane);
    //            }
    //        },
    //        template:
    //            '<div class="tabbable">' +
    //            '<ul class="nav nav-tabs">' +
    //            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
    //            '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
    //            '</li>' +
    //            '</ul>' +
    //            '<div class="tab-content" ng-transclude></div>' +
    //            '</div>',
    //        replace: true
    //    };
    //})
    //
    //.directive('pane', function() {
    //    return {
    //        require: '^tabs',
    //        restrict: 'E',
    //        transclude: true,
    //        scope: { title: '@' },
    //        link: function(scope, element, attrs, tabsController) {
    //            tabsController.addPane(scope);
    //        },
    //        template:
    //            '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
    //            '</div>',
    //        replace: true
    //    };
    //});