app.controller("editController", function($scope, friendsFactory, $routeParams, $location) {
  $scope.friends = {}

  $scope.show = function() {
    friendsFactory.show($routeParams.id, function(data) {
      // console.log("reached controller's show")
      // console.log("data is", data)
      //I use data.objects[0] because my data.objects is a list,
      //even though it only returned one object, still have to dig it out
      data.objects[0].birthday = new Date(data.objects[0].birthday)

      // var newDate = $filter("date")(new Date(data[0].birthday),"yyyy-MM-dd")
      // console.log("newDate is", newDate)
      // console.log("in the edit controller, data is", data)
      $scope.friends = data.objects[0]
      // console.log($scope.friends)
    })
  }
  $scope.show()

  $scope.update = function() {
    var firstName = $scope.firstModel
    var lastName = $scope.lastModel
    var birthday = $scope.birthdayModel
    var id = $routeParams.id
    var fullFriendObject = {
      id: id,
      object:{firstName: firstName, lastName: lastName, birthday: birthday}
    }
    // console.log("newFriend is", newFriend)

    friendsFactory.update(fullFriendObject, function(data) {
      // console.log("$scope.newFriend is", $scope.newFriend)
      //Not sure if we need this, as arrays are passed by reference
      //and index() has already been invoked
      $location.url("/list")
      // $scope.friends = data.objects
    })
  }

  /*
  OUR $scope.update function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).  Want to see
  all of the friends when we get back including the updated on??
  See Index in the previous controller.
  */
})
