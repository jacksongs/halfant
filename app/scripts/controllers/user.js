'use strict';

app.controller('UserCtrl', function ($scope, $http) {
	$http.jsonp('/data/users/?callback=JSON_CALLBACK')
	   .success(function (data) {
	      $scope.users = data;
	      console.log(data);
	   })
	   .error(function (data,status,headers) {
	      $scope.users = data;
	      console.log(status);
	   });
})