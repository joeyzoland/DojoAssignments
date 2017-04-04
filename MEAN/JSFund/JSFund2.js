//The three functions described on the platform
function sumMer (x, y) {
  var min;
  var max;
  var sum = 0;
  if (x < y) {
    min = x
    max = y
  }
  else {
    min = y
    max = x
  }
  for (var i = min; i <= max; i++) {
    sum += i
  }
  console.log(sum)
}
// sumMer(6, 4)

function minFinder (array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}
// console.log(minFinder ([24, 77, 20]))

function aveFinder (array) {
  var sum = array[0];
  for (var i = 1; i < array.length; i++) {
    sum += array[i]
  }
  return (sum / array.length)
}
// console.log(aveFinder ([2, 4, 9]))



//The three functions written above, but as anonymous functions assigned to variables
var firstFunction = function(x, y) {
  var min;
  var max;
  var sum = 0;
  if (x < y) {
    min = x
    max = y
  }
  else {
    min = y
    max = x
  }
  for (var i = min; i <= max; i++) {
    sum += i
  }
  console.log(sum)
}

var secondFunction = function(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}
var thirdFunction = function(array) {
  var sum = array[0];
  for (var i = 1; i < array.length; i++) {
    sum += array[i]
  }
  return (sum / array.length)
}

// firstFunction(5, 7)
// console.log(secondFunction([7, 5, 6]))
// console.log(thirdFunction([7, 9, 5, 3]))



//The three functions at the top, assigned as methods instead
var jsObject = {
  sumMer : function(x, y) {
    var min;
    var max;
    var sum = 0;
    if (x < y) {
      min = x;
      max = y;
    }
    else {
      min = y;
      max = x;
    }
    for (var i = min; i <= max; i++) {
      sum += i;
    }
    console.log(sum);
  },
  minFinder : function(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },
  aveFinder : function(array) {
    var sum = array[0];
    for (var i = 1; i < array.length; i++) {
      sum += array[i]
    }
    return (sum / array.length)
  }
}

// jsObject.sumMer(5, 7)
// console.log(jsObject.minFinder([7, 5, 6]))
// console.log(jsObject.aveFinder([7, 9, 5, 3]))



var person = {
  name : "Joey",
  distance_traveled: 0,
  say_name: function() {
    console.log(this.name)
  },
  say_something: function(x) {
    console.log(this.name + " says " + String(x))
  },
  walk: function() {
    console.log(this.name + " is walking")
    this.distance_traveled += 3
  },
  run: function() {
    console.log(this.name + " is running")
    this.distance_traveled += 10
  },
  crawl: function() {
    console.log(this.name + " is crawling")
    this.distance_traveled += 1
  },
}

person.say_name()
person.say_something(5)
person.walk()
console.log(person.distance_traveled)
person.run()
console.log(person.distance_traveled)
person.crawl()
console.log(person.distance_traveled)
