app.controller("showController", function($scope, friendsFactory, $routeParams) {
  $scope.friends = {}

  $scope.show = function() {
    friendsFactory.show($routeParams.id, function(data) {
      // console.log("reached controller's show")
      // console.log("In the show controller, data is", data)
      if (data.message == "Error") {
        $scope.message = data.error
      }
      else if (data.message == "Success") {
        $scope.friends = data.objects[0]
      }
    })
  }
  $scope.show()
})
