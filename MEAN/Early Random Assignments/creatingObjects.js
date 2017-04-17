function VehicleConstructor(name, numberWheels, numberPassengers) {
  this.name = name;
  this.numberWheels = numberWheels;
  this.numberPassengers = numberPassengers;
  this.makeNoise = function() {
    console.log("Beeeeeeep!!!")
  }
}

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

var bus = new VehicleConstructor("bus", 4, 30)
bus.pickUp = function(number) {
  this.numberPassengers += number
}
console.log(bus.numberPassengers)
bus.pickUp(2)
console.log(bus.numberPassengers)
