var express = require("express")
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    root = __dirname,
    mongoose = require("mongoose")

app.use(express.static(path.join(root, "client")))
app.use(express.static(path.join(root, "bower_components")))
app.use(bodyParser.json())
require("./server/config/mongoose.js")
var routes = require("./server/config/routes.js")

app.listen(8000, function() {
  console.log("server running on port 8000")
})
