var express = require("express")
var app = express()
var users = []
var dict = {}
var messages = []

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index")
})

var server = app.listen(8000, function() {
  console.log("This server is listening on port 8000")
})

var io = require("socket.io").listen(server)

io.sockets.on("connection", function(socket) {
  console.log("sockets have started")
  //Put other socket methods here
  socket.on("new_user", function(person) {
    person["id"] = socket.id
    users.push(person)
    dict[socket.id] = person.name
    // console.log({messages})
    socket.emit("all_messages", {messages})
  })
  socket.on("new_message", function(message) {
    var new_message = dict[socket.id] + ": " + message.content
    messages.push(new_message)
    // console.log(new_message)
    io.emit("new_message", new_message)
  })
})
