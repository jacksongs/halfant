'use strict';

/**
 * @ngdoc function
 * @name angfanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angfanApp
 */
angular.module('angfanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
