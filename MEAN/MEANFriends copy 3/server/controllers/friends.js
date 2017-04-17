console.log("reached friends controller")

var mongoose = require("mongoose")
var Friend = mongoose.model("Friend")

module.exports = {
  index: function(req, res) {
    Friend.find({}, function(err, friends) {
      if(err) {
        console.log("got an error on index method")
      }
      else {
        res.json({placeholder:friends})
      }
    })
  },
  create: function(req, res) {
    res.json({placeholder:"create"})
  },
  update: function(req, res) {
    res.json({placeholder:"update"})
  },
  delete: function(req, res) {
    res.json({placeholder:"delete"})
  },
  show: function(req, res) {
    //Note: Passing in name now for the purposes of testing
    //Id is just what's put in the url
    Friend.find({name: req.params.id}, function(err, friends) {
      if(err) {
        console.log("got an error on index method")
      }
      else {
        res.json({placeholder:friends})
      }
    })
  }

}
