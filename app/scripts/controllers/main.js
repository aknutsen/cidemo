'use strict';

/**
 * @ngdoc function
 * @name cidemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cidemoApp
 */
angular.module('cidemoApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.name = '';
    $scope.firstName = function() {
    	return $scope.name.split(' ')[0];
    };
  });
