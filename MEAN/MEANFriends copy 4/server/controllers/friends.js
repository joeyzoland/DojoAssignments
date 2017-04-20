console.log("reached friends controller")

var mongoose = require("mongoose")

//Gets our model
var Friend = mongoose.model("Friend")

module.exports = {
  index: function(req, res) {
    Friend.find({}, function(err, friends) {
      if(err) {
        // Amy's recommendation is to render a json object with
        // standardized keys so it's easy to see if there was an
        // error on the client side
        res.json({message: "Error", error: "Could not find any friends."})
        // Recommended to use this on the success side also
      }
      else {
        // console.log("reached friends controller index route")
        // console.log(friends)
        res.json({message: "Success", objects: friends})
        // res.json({message: "Error", error: "Could not find any friends."})
      }
    })
  },
  create: function(req, res) {
    // console.log("req.body in friends.js is", req.body)
    var friend = new Friend(req.body)
    friend.save(function (err) {
      if(err) {
          // console.log("err", err)
          res.json({message: "Error", error: "Could not make friend."})
      } else {
          //Don't have to res.json here because index will do it
          module.exports.index(req, res)
          // res.json({message: "Error", error: "Could not make friend."})
      }
    })
  },
  update: function(req, res) {
    Friend.findOne({_id: req.params.id}, function(err, friend) {
      if (err) {
        res.json({message: "Error", error: "Error: Could not find friend for updating."})
      }
      else {
        // console.log("Found friend", friend)
        if (req.body.firstName) {
          friend.firstName = req.body.firstName
          // console.log("reached friend.firstName editing")
        }
        if (req.body.lastName) {
          friend.lastName = req.body.lastName
          // console.log("reached friend.lastName editing")
        }
        if (req.body.birthday) {
          friend.birthday = req.body.birthday
          // console.log("reached friend.birthday editing")
        }
        // console.log("Friend after update", friend)
        friend.save(function(err) {
          if(err) {
            // console.log(err)
            res.json({message: "Error", error: "Error: Could not save updates to friend."})
          }
          else {
            module.exports.index(req, res)
            // res.json({message: "Error", error: "Error: Could not save updates to friend."})
          }
        })
      }
    })
  },
  delete: function(req, res) {
    // console.log("req.params._id is", req.params.id)
    // console.log("req is", req)
    Friend.remove({_id: req.params.id}, function (err) {
      if (err) {
          // console.log("wtf @ not deleting");
          res.json({message: "Error", error: "Error: Could not delete friend."})
      } else {
          // console.log("deleting");
          //Note: I don't have to res.json because index will do it

          module.exports.index(req, res)
          // res.json({message: "Error", error: "Error: Could not delete friend."})
      }
    })
  },
  show: function(req, res) {
    // console.log("reached show")
    //Note: Passing in name now for the purposes of testing
    //Id is just what's put in the url

    // Friend.find({first: req.params.id}, function(err, friend) {
    Friend.find({_id: req.params.id}, function(err, friend) {
      if(err) {
        // console.log(err)
        res.json({message: "Error", error: "Error: Could not find friend."})
      }
      else {
        // console.log("reached friends controller show route")

        res.json({message: "Success", objects: friend})
        // res.json({message: "Error", error: "Error: Could not find friend."})
      }
    })
  }
}
