app.controller("RedditController", ['$scope', 'HikeService', function ($scope, HikeService) {
  $scope.posts;
  HikeService.all().then(function (hikes) {
    $scope.posts = hikes
  })
  $scope.addPost = function () {
    $scope.post.date = new Date()
    $scope.post.location = $scope.location
    $scope.post.comment = []
    $scope.post.votes = 0
    $scope.posts.push($scope.post);
    HikeService.create($scope.post);
  }

  $scope.addVote = function (post) {
    post.votes += 1;
  }
  $scope.subtractVote = function (post) {
    post.votes -= 1;
  }

  $scope.addComment = function (post) {
    var comment = {
      post: post._id,
      user: $scope.user,
      comment: $scope.commentText
    }
    $scope.user = "";
    $scope.commentText = "";
    $scope.post.comment.push(comment);
    HikeService.update(comment);
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
