'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
    $scope.post = {title: '', text: '', player: ''};

    $scope.submitPost = function () {
      Post.create($scope.post).then(function (ref) {
        $location.path('/posts/' + ref.name());
        $scope.post = {title: '', text: '', player: ''};
      });
    };

    $scope.logout = function () {
	  Auth.logout();
	};
  });