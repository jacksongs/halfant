'use strict';

app.controller('UserCtrl', function ($scope, $http) {
	$http.jsonp('http://127.0.0.1:8001/data/users/?callback=JSON_CALLBACK')
	   .success(function (data) {
	      $scope.users = data;
	      console.log(data);
	   })
	   .error(function (data,status,headers) {
	      $scope.users = data;
	      console.log(status);
	   });
})