var express = require("express")
var app = express()
var path = require("path")
var port = 8000

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

//This allows you to access all files on local host by just adding / + file name
app.use(express.static(__dirname + "/static"));

//This utilizes a totally separate mechanism than above (does not require it)
//This looks directly into your directly and renders files via file path
//(to the index in this case)
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/static/main.html"))
})

app.get("/users", function (request, response) {
  var users_array = [
    {name: "Joey", email: "joey@codingdojo.com"},
    {name: "bob", email: "bob@codingdojo.com"}
  ]
  //Note: "users" refers to the name of the ejs file
  //In the html, it's iterating through the keys, in this case "superusers"
  response.render("users", {superusers: users_array})
})

app.listen(port, function() {
  console.log("listening on port " + String(port))
  // console.log((path.join(__dirname + "/static/main.html")))
})
