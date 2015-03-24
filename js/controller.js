'use strict';
app.controller('BooksCtrl', ['books', function (books) {
    var main = this;
    console.log('go');
    books.getBooks();
    main.books = books.books;
    console.log(main);
  }]
);

//app.controller('PostCtrl', ['posts', '$route', '$routeParams', function (posts, $route, $routeParams) {
//    var post = this;
//    post.id = parseInt($routeParams.postId, 10);
//    post.contents = posts.getPost(post.id);
//    post.addComment = posts.addComment;
//
//    post.comments = posts.getPost(post.id).comments;
//
//    post.submitComment = function () {
//      console.log(post.comments);
//      post.addComment(this.comment, post.id);
//      return false;
//    };
//  }]
//);