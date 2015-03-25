'use strict';
app.factory('Goosebumps', function ($resource) {
  var service = $resource;
  return service('server/:title.json', {}, {
    query: {
      method: 'GET',
      params: {
        title: 'goosebumps'
      },
      isArray: true
    }
  });
});