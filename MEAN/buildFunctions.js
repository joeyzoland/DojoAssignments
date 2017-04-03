//Q1
function runningLogger() {
  console.log("I am running!")
}

//Q2
function multiplyByTen(value) {
  value *= 10
  return value
}

//Q3
function stringReturnOne() {
  return "this one returns ONE!"
}
function stringReturnTwo() {
  return "this one returns TWO!"
}

//Q4
function caller(func) {
  if (typeof(func) === "function") {
    return func()
  }
}

//Q5
function myDoubleConsoleLog(x, y) {
  if (typeof(x) === "function") {
    console.log(x())
  }
  if (typeof(y) === "function") {
    console.log(y())
  }
  // Here is an alternative way I was developing, but it's more lengthy...
  // if (typeof(x) === "function" && typeof(y) != "function") {
  //   console.log(x())
  // }
  // else if (typeof(x) != "function" && typeof(y) === "function") {
  //   console.log(y{})
  // }
  // else if (typeof(x) === "function" && typeof(y) === "function") {
  //   console.log(x())
  //   console.log(y())
  // }
}

//Q6
function caller2(x) {
  function helper() {
    console.log("ending?")
    return "interesting"
  }
  console.log("starting")
  if (typeof(x) === "function") {
    setTimeout(x, 2000)
  //After waiting two seconds, calls on the helper function to print "ending" and return "interesting"
  setTimeout(helper, 2001)
  }
}

//Alternative way to do Q6
function caller2(x) {
  console.log("starting")
  setTimeout(function() {
    if (typeof x === "function") {
      //This part is specifically designed to take in myDoubleConsoleLog and these stringReturn functions
      x(stringReturnOne, stringReturnTwo)
    }
  }, 2000)
  console.log("Ending?")
  return "interesting";
}


// runningLogger()

// console.log(multiplyByTen(5))

// console.log(stringReturnOne())
// console.log(stringReturnTwo())

// console.log(caller(stringReturnOne))
// console.log(caller("5"))

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo)
// myDoubleConsoleLog("5", stringReturnTwo)
// myDoubleConsoleLog(stringReturnOne, 7)

// Note: caller2 running on myDoubleConsoleLog doesn't return anything with setTimeout because no parameters are passed to it
console.log(caller2(myDoubleConsoleLog))
// caller2(runningLogger)
