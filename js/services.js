'use strict';
app.factory('books',  function ($http) {
  var service = {};

  service.getBooks = function () {
    $http.get('server/goosebumps.json')
      .success(function(data, status, headers, config) {
        console.log(data, status, headers, config);
        service.books = data;
      })
      .error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
  };

  return service;

});