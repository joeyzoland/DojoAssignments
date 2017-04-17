function VehicleConstructor(name, numberWheels, numberPassengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, numberWheels, numberPassengers, speed);
  }
  this.name = name;
  this.numberWheels = numberWheels;
  this.numberPassengers = numberPassengers;
  this.speed = speed;
  this.makeNoise = function() {
    console.log("Beeeeeeep!!!")
  };

  var distance_traveled = 0;
  function updateDistanceTravelled() {
    //Note: I'm referring to the speed passed in as a parameter
    //I can't refer to "this.speed" without saving this to a private variable, e.g., self, and then calling self.speed
    distance_traveled += speed;
  };
  this.move = function() {
    updateDistanceTravelled()
    this.makeNoise()
  };
  this.checkMiles = function() {
    console.log(distance_traveled)
  };
}



var car = new VehicleConstructor("minivan", 4, 7, 20)
car.move()
car.checkMiles()
car.move()
car.checkMiles()




// Code before additions:
// var bike = new VehicleConstructor("bike", 2, 1)
// bike.makeNoise()
//
// bike.makeNoise = function() {
//   console.log("ring ring!")
// }
// bike.makeNoise()

// var sedan = new VehicleConstructor("sedan", 4, 5)
// sedan.makeNoise()
// sedan.makeNoise = function() {
//   console.log("Honk Honk!")
// }
// sedan.makeNoise()

// var bus = new VehicleConstructor("bus", 4, 30)
// bus.pickUp = function(number) {
//   this.numberPassengers += number
// }
// console.log(bus.numberPassengers)
// bus.pickUp(2)
// console.log(bus.numberPassengers)
