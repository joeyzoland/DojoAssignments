console.log("future routes")

var friends = require("../controllers/friends.js")

module.exports = function(app){
  app.get("/friends", function(req, res) {
    console.log("reached friends.index")
    friends.index(req, res)
  })
  app.get("/friends/:id", function(req, res) {
    console.log("reached friends.show")
    friends.show(req, res)
  })
  app.post("/friends", function(req, res) {
    console.log("req.body", req.body)
    friends.create(req, res)
  })
  app.put("/friends/:id", function(req, res) {
    friends.update(req, res)
  })
  app.delete("/friends/:id", function(req, res) {
    console.log("id at app.delete is", req.params.id)
    friends.delete(req, res)
  })
}
