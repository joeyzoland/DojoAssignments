var mongoose = require('mongoose');
var Person = mongoose.model('person');

module.exports = {
    show: function (req,res) {
        Person.find({}, function (err, persons) {
            if(err) {
                console.log("Error! " + err);
            } else {
                res.json({persons});
            }
        })
    },
    create: function (req,res ) {
        var person = new Person({name: req.params.name});
        person.save(function (err) {
            if(err) {
                console.log("wtf @ not creating");
            } else {
                console.log("not wtf");
                res.redirect('/');
            }
        });
    },
    delete: function (req,res) {
        var name = req.params.name;
        Person.remove({name:name}, function (err) {
            if (err) {
                console.log("wtf @ not deleting");
            } else {
                res.redirect('/');
            }
        })
    },
    showOne: function (req,res) {
        var name = req.params.name;
        Person.find({name:name}, function(err, person) {
            if (err) {
                console.log("wtf @ not finding one");
            } else {
                res.json({person});
            }
        })
    }
}
