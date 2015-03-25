'use strict';
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'books.html',
      controllerAs: 'main',
      controller: 'BooksCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
});