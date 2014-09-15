'use strict';

app.controller('FeedCtrl', function ($scope, Post) {
	  $scope.posts = Post.all;

	  $scope.post = {title: '', player: '', text: ''};

      $scope.deletePost = function (post) {
		  Post.delete(post);
  		};
});