var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/basic_mongoose")
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model("User", UserSchema)
var User = mongoose.model("User")
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true}))

var path = require("path")
app.use(express.static(path.join(__dirname, "./static")))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  User.find({}, function(err, users) {
    if(err) {
      console.log("Got an error on retrieval :(")
    }
    else {
      console.log("Successfully retrieved all users!!!")
      var wrappedUsers = {"users": users}
      console.log(wrappedUsers)
      res.render("index", wrappedUsers)
    }
  })
})

app.post("/users", function(req, res) {
  console.log("POST DATA: ", req.body)
  var user = new User({name: req.body.username, age: req.body.age})
  user.save(function(err) {
    if(err) {
      console.log("Got an error on user addition :(")
    }
    else {
      console.log("Successfully added a user!!!")
      res.redirect("/")
    }
  })
})

app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
