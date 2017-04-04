function personConstructor(name) {
  function person() {
    this.name = "Anonymous";
    this.distance_traveled = 0;
    this.say_name = function() {
      console.log(this.name)
    };
    this.say_something = function(x) {
      console.log(this.name + " says " + String(x))
    };
    this.walk = function() {
      console.log(this.name + " is walking")
      this.distance_traveled += 3
    };
    this.run = function() {
      console.log(this.name + " is running")
      this.distance_traveled += 10
    };
    this.crawl = function() {
      console.log(this.name + " is crawling")
      this.distance_traveled += 1
    };
  }
  var newPerson = new person();
  newPerson.name = name
  return newPerson
}

// var personJoey = personConstructor("Joey")
// console.log(personJoey.name)
// personJoey.say_name()
// personJoey.say_something("I am cool")
// personJoey.walk()
// personJoey.run()
// personJoey.crawl()
// console.log(personJoey.distance_traveled)



function personConstructor(name) {
    var person = {
      name : name,
      distance_traveled : 0,
      say_name : function() {
        console.log(name)
      },
      say_something : function(x) {
        console.log(name + " says " + String(x))
      },
      walk : function() {
        console.log(name + " is walking")
        person.distance_traveled += 3
      },
      run : function() {
        console.log(name + " is running")
        person.distance_traveled += 10
      },
      crawl : function() {
        console.log(name + " is crawling")
        person.distance_traveled += 1
      }
    }
  return person
}

// var personJoey = personConstructor("Joey")
// console.log(personJoey.distance_traveled)
// personJoey.say_name()
// personJoey.say_something("I am cool")
// personJoey.walk()
// personJoey.run()
// personJoey.crawl()
// console.log(personJoey.distance_traveled)



function ninjaConstructor (name, cohort) {
  var ninja = {
    name : name,
    cohort : cohort,
    belt_level: "yellow",
    levelUp: function() {
      if (ninja.belt_level === "yellow") {
        ninja.belt_level = "red"
      }
      else if (ninja.belt_level === "red") {
        ninja.belt_level = "black"
      }
    }
  }
  return ninja
}

var ninjaJoey = ninjaConstructor("Joey", "January")
console.log(ninjaJoey.name)
console.log(ninjaJoey.cohort)
console.log(ninjaJoey.belt_level)
ninjaJoey.levelUp()
console.log(ninjaJoey.belt_level)
ninjaJoey.levelUp()
console.log(ninjaJoey.belt_level)
