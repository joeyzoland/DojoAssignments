console.log("friends model")
var mongoose = require("mongoose")

//Creates schema
var FriendSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  birthday: {type: Date, required: true}
})

//Sets our model
var Friend = mongoose.model("Friend", FriendSchema)
