angular.module("Angulargram", ['ngRoute', 'ngMessages'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        tempateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        tempateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        tempateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        tempateUrl: 'views/details.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');
  });
