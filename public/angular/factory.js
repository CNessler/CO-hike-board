app.factory("HikeService", ['$http', function ($http) {
  return {
    getAllHikes: function(){
      return $http.get('/api/hikes').then(function (data) {
        console.log(data, "THIS IS THE DATA");
        return data.data;
      })
    }
  }
}])
