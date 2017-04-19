app.controller("showController", function($scope, friendsFactory, $routeParams) {
  $scope.friends = {}

  $scope.show = function() {
    friendsFactory.show($routeParams.id, function(data) {
      // console.log("reached controller's show")
      // console.log("In the show controller, data is", data)
      if (data.message == "Error") {
        //Do something here
      }
      else if (data.message == "Success") {
        $scope.friends = data.objects[0]
      }
    })
  }
  $scope.show()

  // $scope.update = function()

  /*
  OUR $scope.update function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).  Want to see
  all of the friends when we get back including the updated on??
  See Index in the previous controller.
  */
})
