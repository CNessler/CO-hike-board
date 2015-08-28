app.controller("RedditController", ['$scope', 'HikeService', function ($scope, HikeService) {
  $scope.posts;
  HikeService.getAllHikes().then(function (hikes) {
    console.log(hikes, "HAVE BEEN FOUND TO USE");
    $scope.posts = hikes
  })

  $scope.addPost = function () {
    $scope.posts.push({
        title: $scope.title,
        author: $scope.author,
        image: $scope.image,
        description: $scope.description,
        date: new Date(),
        location: $scope.location,
        comments: [],
        votes: 0
    });
    $scope.title= "";
    $scope.location="";
    $scope.author="";
    $scope.image="";
    $scope.description="";
  }
  $scope.addVote = function (post) {
    post.votes += 1;
  }
  $scope.subtractVote = function (post) {
    post.votes -= 1;
  }

  $scope.addComment = function (post) {
      console.log($scope.user, "USER");
    post.comments.push({
      user: $scope.user,
      comment: $scope.commentText
    })
    $scope.user="";
    $scope.commentText="";
  }

  $scope.custom = true;
  $scope.comment= true;
  $scope.show= true;
  $scope.showComment = function () {
    $scope.comment = $scope.comment === false ? true: false;
  }
  $scope.toggleCustom = function() {
    $scope.custom = $scope.custom === false ? true: false;
  }
  $scope.commentShow = function() {
    $scope.show = $scope.show === false ? true: false;
  }

}])
