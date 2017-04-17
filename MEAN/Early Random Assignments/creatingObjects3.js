function VehicleConstructor(name, numberWheels, numberPassengers, speed) {
  if (!(this instanceof VehicleConstructor)) {
    return new VehicleConstructor(name, numberWheels, numberPassengers, speed);
  }
  this.name = name;
  this.numberWheels = numberWheels;
  this.numberPassengers = numberPassengers;
  this.speed = speed;
  this.distance_traveled = 0;
  this.vin = "";
  var letterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  for (var i = 0; i < 17; i++) {
    //Each iteration generates a random number between 0 inclusive and 9.99... (10 not inclusive)
    //Then, it floors the number for each iteration and concatenates the 17 numbers onto this.vin
    this.vin += letterString[Math.floor(Math.random() * 36)]
  }
}

//Prototype methods
VehicleConstructor.prototype.updateDistanceTravelled = function() {
  this.distance_traveled += this.speed;
};
VehicleConstructor.prototype.makeNoise = function() {
  console.log("Beeeeeeep!!!")
}
VehicleConstructor.prototype.move = function() {
  this.updateDistanceTravelled()
  this.makeNoise()
}
VehicleConstructor.prototype.checkMiles = function() {
  console.log(this.distance_traveled)
}



var car = new VehicleConstructor("minivan", 4, 7, 20)
car.move()
car.checkMiles()
car.move()
car.checkMiles()
console.log(car.vin)




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
