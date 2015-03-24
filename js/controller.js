'use strict';
app.controller('BooksCtrl', ['Goosebumps', function (Goosebumps) {
    var main = this;
    main.books = Goosebumps.query();
  }]
);