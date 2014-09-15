'use strict';

/**
 * @ngdoc function
 * @name angfanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angfanApp
 */
angular.module('angfanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
