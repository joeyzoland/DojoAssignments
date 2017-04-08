var express = require("express")
var app = express()
// var path = require("path")
// var bodyParser = require("body-parser")

// var bodyHolder = {}

// app.use(express.static(__dirname + "/static"))

// app.use(bodyParser.urlencoded({ extended: true}))

//This line below seems to be unnecessary
// app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index")
})

// app.post("/result", function (req, res) {
//   console.log("POST DATA", req.body)
//   bodyHolder = req.body
//   // res.redirect("/results")
//   res.redirect("/")
// })
//
// app.get("/results", function (req, res) {
//   console.log("Got to results")
//   res.render("result", bodyHolder)
// })

var server = app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})

var io = require("socket.io").listen(server)

io.sockets.on("connection", function(socket) {
  console.log("Sockets have started up successfully!")
  socket.on("button_clicked", function(data) {
    console.log("Someone clicked a button, and this is the server noticing!")
    data["random_number"] = Math.floor(Math.random() * 1000) + 1
    socket.emit("server_response", data)

  })
})
