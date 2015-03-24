'use strict';
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/divshot', {
      templateUrl: '/divshot/books.html',
      controllerAs: 'main',
      controller: 'BooksCtrl'
    })
    .otherwise({
      redirectTo: '/elsewhere'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});