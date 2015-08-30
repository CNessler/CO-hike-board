app.factory("HikeService", ['$http', function ($http) {
  return {
    all: function(){
      return $http.get('/api/hikes').then(function (data) {
        return data.data;
      })
    },
    create: function (post) {
      $http.post('/api/hikes', post);
    },
    update: function (comment) {
      $http.post('/api/comment', comment);
    }
  }
}])
