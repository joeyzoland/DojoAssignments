var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mongooseDashboard")
var TurtleSchema = new mongoose.Schema({
  name: String,
  hobby: String
})

mongoose.model("Turtle", TurtleSchema)
var Turtle = mongoose.model("Turtle")
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true}))

var path = require("path")
app.use(express.static(path.join(__dirname, "./static")))

app.set("view engine", "ejs")

//This loads the main page with all turtles
app.get("/", function (req, res) {
  Turtle.find({}, function(err, turtles) {
    if(err) {
      console.log("Got an error on retrieval :(")
    }
    else {
      console.log("got to rendering of index route")
      //Adding a "view" key to differentiate between displays in templates
      wrappedTurtleList = {"turtleList": turtles, "view": "all"}
      res.render("index", wrappedTurtleList)
    }
  })
})

//This loads the "create turtle" page
app.get("/turtles/new", function (req, res) {
  res.render("create")
})

//This loads the main page (i.e., uneditable) with the one specified turtle
app.get("/turtles/:id", function (req, res) {
  Turtle.find({_id: req.params.id}, function(err, turtles) {
    if(err) {
      console.log("Got an error on retrieval :(")
    }
    else {
      console.log("got to rendering of index route")
      //Adding a "view" key to differentiate between displays in templates
      wrappedTurtleList = {"turtleList": turtles, "view": "one"}
      res.render("index", wrappedTurtleList)
    }
  })
})

//This route loads the edit page for the specified turtle
app.get("/turtles/edit/:id", function (req, res) {
  Turtle.find({_id: req.params.id}, function(err, turtles) {
    if(err) {
      console.log("Got an error on retrieval for editing :(")
    }
    else {
      console.log("Got to rendering of edit route")
      //Adding a "view" key to differentiate between routes
      wrappedTurtleList = {"turtleList": turtles, "view": "edit"}
      res.render("index", wrappedTurtleList)
    }
  })
})

//This route handles the actual editing of the turtle, and then redirects to the index
app.post("/turtles/:id", function (req, res) {
  Turtle.findOne({_id: req.params.id}, function (err, turtle) {
    turtle.name = req.body.name;
    turtle.hobby = req.body.hobby
    turtle.save(function(err) {
      if(err) {
        console.log("Got an error on turtle edit saving")
      }
      else {
        console.log("Successfully saved edits to a turtle!!!")
        res.redirect("/")
      }
    })
  })
})

//This route handles the deleting of the turtle, and then redirects to the index
app.post("/turtles/destroy/:id", function (req, res) {
  Turtle.remove({_id: req.params.id}, function (err) {
    if(err) {
      console.log("Got an error while trying to delete the turtle")
    }
    else {
      console.log("Successfully deleted a turtle!!!")
      res.redirect("/")
    }
  })
})

//This route actually creates the new turtle
app.post("/turtles", function (req, res) {
  var turtle = new Turtle({
    name: req.body.name,
    hobby: req.body.hobby
  })
  turtle.save(function(err) {
    if(err) {
      console.log("Got an error on turtle addition")
    }
    else {
      console.log("Successfully added a turtle!!!")
      res.redirect("/")
    }
  })
})



app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
