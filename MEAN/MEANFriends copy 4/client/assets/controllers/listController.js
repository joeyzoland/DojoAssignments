app.controller("listController", function($scope, friendsFactory, $routeParams) {
  $scope.friends=[]
  if (friendsFactory.createMessage){
    $scope.message = friendsFactory.createMessage
    friendsFactory.createMessage = undefined
  }
  if (friendsFactory.updateMessage){
    $scope.message = friendsFactory.updateMessage
    friendsFactory.updateMessage = undefined
  }

  //Note: Better to use ng-bind then {{}} for displaying data, as long
  //as
  var index = function() {
    friendsFactory.index(function(data) {
      //Note: Returned a json object with an "objects" attribute
      //Also need to account for when "message" == "Success"
      //and when "message" == error
      if (data.message == "Success") {
        $scope.friends = data.objects
      }
      else if (data.message == "Error") {
        $scope.message = data.error
      }
    })
  }
  index()

  $scope.delete = function(id) {
    friendsFactory.delete(id, function(data) {
      // console.log("reached controller's delete")
      if (data.message == "Success") {
        $scope.message = "User deleted successfully!"
        $scope.friends = data.objects
      }
      else if (data.message == "Error") {
        $scope.message = data.error
      }
    })
  }

})
