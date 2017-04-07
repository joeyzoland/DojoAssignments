var express = require("express")
var app = express()
var path = require("path")
var bodyParser = require("body-parser")

var bodyHolder = {}

// app.use(express.static(__dirname + "/static"))

app.use(bodyParser.urlencoded({ extended: true}))

//This line below seems to be unnecessary
// app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("index")
})

app.post("/result", function (req, res) {
  console.log("POST DATA", req.body)
  bodyHolder = req.body
  res.redirect("/results")
})

app.get("/results", function (req, res) {
  console.log("Got to results")
  res.render("result", bodyHolder)
})

app.listen(8000, function() {
  console.log("Server is listening on port 8000")
})
