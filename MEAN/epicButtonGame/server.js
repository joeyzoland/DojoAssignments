var express = require("express")
var app = express()
var count = 0

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index")
})

var server = app.listen(8000, function() {
  console.log("This server is listening on port 8000")
})

var io = require("socket.io").listen(server)

io.sockets.on("connection", function(socket) {
  console.log("Sockets have started!!!")

  socket.on("epic_button_clicked", function() {
    console.log("Someone clicked the epic button; this is the server!")
    count += 1
    io.emit("server_response", count)
  })

  socket.on("reset_button_clicked", function() {
    console.log("Someone clicked the reset button; this is the server!")
    count = 0
    io.emit("server_response", count)
  })

})
