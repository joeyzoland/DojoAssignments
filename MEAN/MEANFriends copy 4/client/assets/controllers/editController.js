app.controller("editController", function($scope, friendsFactory, $routeParams, $location) {
  $scope.friends = {}

  $scope.show = function() {
    friendsFactory.show($routeParams.id, function(data) {
      if (data.message === "Success") {
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
      }
      else if (data.message === "Error") {
        $scope.message = data.error
      }
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
      console.log("After update, data in editController is ", data)
      // console.log("$scope.newFriend is", $scope.newFriend)
      //Not sure if we need this, as arrays are passed by reference
      //and index() has already been invoked
      // $scope.friends = data.objects
      if (data.message === "Success") {
        $location.url("/list")
      }
      else if (data.message === "Error") {
        $scope.message = data.error
      }
    })
  }
})
