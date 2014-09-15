'use strict';
/* global app:true */


/**
 * @ngdoc overview
 * @name angfanApp
 * @description
 * # angfanApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angfanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
.constant('FIREBASE_URL', 'https://scorching-inferno-6510.firebaseio.com/');


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/postview.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
