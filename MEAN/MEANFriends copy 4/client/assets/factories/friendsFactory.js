console.log("Friends Factory")

app.factory("friendsFactory", function($http) {
  //Need a private variable here to keep track?
  var factory = {}
  factory.index = function(callback) {
    $http.get("/friends").then(function(returned_data) {
      // console.log("reached factory.index")
      // console.log(returned_data.data)
      // Make sure this callback is inside the promise!!!
      callback(returned_data.data)
    })
  }
  factory.show = function(id, callback) {
    // console.log("reached factory.show")
    $http.get("/friends/" + id).then(function(returned_data) {
      // console.log(returned_data.data)
      // console.log("after the promise, returned_data.data is", returned_data.data)
      callback(returned_data.data)
    })
  }
  factory.create = function(newFriend, callback) {
    $http.post("/friends", newFriend).then(function(returned_data) {
      // console.log("returned_data.data is", returned_data.data)
      // console.log("reached factory.create")
      //Hmm, I think these callbacks are pertaining to the scope?
      if (typeof(callback) == "function") {
        // console.log("callback recognized")
        if (returned_data.data.message === "Success") {
          factory.createMessage = "User created successfully!"
          console.log("factory.createMessage is", factory.createMessage)
        }
        callback(returned_data.data)
      }
    })
  }
  factory.update = function(fullFriendObject, callback) {
    // console.log("In the factory, fullFriendObject is", fullFriendObject)
    $http.put("/friends/" + fullFriendObject.id, fullFriendObject.object).then(function(returned_data) {
      // console.log(returned_data.data)
      if (typeof(callback) == "function") {
        if (returned_data.data.message === "Success") {
          factory.updateMessage = "User updated successfully!"
          console.log("factory.updateMessage is", factory.updateMessage)
        }
        callback(returned_data.data)
      }
    })
  }
  factory.delete = function(id, callback) {
    // console.log("factory says id is", id)
    $http.delete("/friends/" + id).then(function(returned_data) {
      // console.log("reached factory.delete")
      callback(returned_data.data)
      // console.log(returned_data.data)
      // callback(returned_data.data)
    })
  }
  return factory
})
