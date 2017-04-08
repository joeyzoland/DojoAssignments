var express = require("express")
var app = express()
var count = 0

var logged = false

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
    console.log(person)
    console.log("The server says that the person who clicked is " + person)
  })
})
