var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var dateFormat = require("dateformat")

mongoose.connect("mongodb://localhost/quoting_dojo_redux")
var UserSchema = new mongoose.Schema({
  name: String,
  quote: String,
  created_at: Date
  //Try using timestamps instead...
})

mongoose.model("User", UserSchema)
var User = mongoose.model("User")
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true}))

var path = require("path")
app.use(express.static(path.join(__dirname, "./static")))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index")
})

app.post("/process", function (req, res) {
  console.log("POST DATA: ", req.body)
  var user = new User({
    name: req.body.name,
    quote: req.body.quote,
    date: new Date()
  })
  user.save(function(err) {
    if(err) {
      console.log("Got an error on user addition :(")
    }
    else {
      console.log("Successfully added a user!!!")
      res.redirect("/results")
    }
  })
})

app.get("/results", function (req, res) {
  User.find({}, function(err, users) {
    if(err) {
      console.log("Got an error on retrieval :(")
    }
    else {
      console.log("got to rendering of index route")
      var userList = []
      for (i in users) {
        userList.push({
          "name": users[i].name,
          "quote": users[i].quote,
          "date": dateFormat(users[i].date, "h:MMTT mmmm d yyyy")
        })
        console.log(userList[i]["date"])
        console.log(typeof(userList[i]["date"]))
      }
      wrappedUserList = {"userList": userList}
      console.log(wrappedUserList)
      res.render("results", wrappedUserList)

      // console.log("Successfully retrieved all users!!!")
      // var wrappedUsers = {"users": users}
      // console.log(wrappedUsers)
      // res.render("index", wrappedUsers)
    }
  })
})

app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
