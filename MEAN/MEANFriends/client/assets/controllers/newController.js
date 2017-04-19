app.controller("newController", function($scope, friendsFactory, $location) {
  $scope.friends=[]

  $scope.index  = function() {
    friendsFactory.index(function(data) {
      // console.log("reached controller's index")
      $scope.friends = data
    })
  }
  $scope.index()
  $scope.show = function() {
    friendsFactory.show(function(data) {
      // console.log("reached controller's show")
      $scope.friends = data
    })
  }
  $scope.create = function() {
    var firstName = $scope.firstModel
    var lastName = $scope.lastModel
    var birthday = $scope.birthdayModel
    var newFriend = {firstName: firstName, lastName: lastName, birthday: birthday}
    // console.log("newFriend is", newFriend)

    friendsFactory.create(newFriend, function(data) {
      // console.log("$scope.newFriend is", $scope.newFriend)
      //Not sure if we need this, as arrays are passed by reference
      //and index() has already been invoked
      $location.url("/list")
      // $scope.friends = data
    })
  }
})
