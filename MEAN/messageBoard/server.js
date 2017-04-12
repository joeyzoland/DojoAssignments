var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

//This variable keeps track of the error messages
var errors;

mongoose.connect("mongodb://localhost/messageBoard")
var MessageSchema = new mongoose.Schema({
  creator: { type: String, required: true, minlength: 4},
  message_text: { type: String, required: true},
  comments: Array
  //For comments, add a key-value pair, where the key is the user
  //and the text is the value
})

mongoose.model("Message", MessageSchema)
var Message = mongoose.model("Message")
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true}))

var path = require("path")
app.use(express.static(path.join(__dirname, "./static")))

app.set("view engine", "ejs")

app.get("/", function(req, res) {

  // Message.remove({}, (function(err) {}))
  Message.find({}, function(err, messages) {
    if(err) {
      console.log("Got an error on retrieval :(")
    }
    else {
      console.log("got to rendering of index route")
      wrappedMessageList = {"messageList": messages}

      if (errors) {
        wrappedMessageList["errors"] = errors
        errors = null
      }

      console.log(wrappedMessageList)
      res.render("index", wrappedMessageList)
    }
  })
})

app.post("/create_message", function(req, res) {
  var message = new Message({
    creator: req.body.name,
    message_text: req.body.message_text
  })
  message.save(function(err) {
    if(err) {
      console.log("Got an error on message creation")
      errors = ["Please ensure that the name is no shorter than 4 characters and that the message field has been filled out."]
      res.redirect("/")
    }
    else {
      console.log("Successfully created a message!!!")
      res.redirect("/")
    }
  })
})

app.post("/create_post", function(req, res) {
  if (req.body.poster.length == 0 || req.body.comment_text.length == 0) {
    errors = ["Please fill out all fields to continue"]
    res.redirect("/")
    return
  }
  var post = {
    poster: req.body.poster,
    comment_text: req.body.comment_text
  }
  console.log("req.body.message_id is", req.body.message_id)
  Message.findOne({_id: req.body.message_id}, function (err, message) {
    if(err) {
      console.log("Got an error on retrieval for comment saving :(")
      res.redirect("/")
    }
    else {
      console.log("Successfully entered comment saving route")
      console.log("message is", message)
      console.log("post is", post)
      message.comments.push(post)
      console.log("after pushing, message is", message)
      message.save(function(err) {
        if(err) {
          console.log("Got an error on comment saving")
        }
        else {
          console.log("Successfully saved comment!!!")
          res.redirect("/")
        }
      })
    }
  })
})

app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
