app.config(function ($routeProvider, $locationProvider) {
  console.log($routeProvider);
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
    enabled: true,
    requireBase: false
  });
});