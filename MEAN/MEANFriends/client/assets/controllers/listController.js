app.controller("listController", function($scope, friendsFactory, $routeParams) {
  $scope.friends=[]

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
        //Do something here!!!
      }
    })
  }
  index()

  $scope.delete = function(id) {
    friendsFactory.delete(id, function(data) {
      // console.log("reached controller's delete")
      if (data.message == "Success") {
        $scope.friends = data.objects
      }
      else if (data.message == "Error") {
        //Do something here!!!
      }
    })
  }

})
