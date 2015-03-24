'use strict';
app.factory('Goosebumps', function ($resource) {
  var service = $resource;
  return service('divshot/server/:title.json', {}, {
    query: {
      method: 'GET',
      params: {
        title: 'goosebumps'
      },
      isArray: true
    }
  });
});