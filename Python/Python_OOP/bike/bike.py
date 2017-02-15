class Bike (object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.distance = 0
    def displayInfo(self):
        print self.price, self.max_speed, self.distance
    def ride (self):
        print "Riding"
        self.distance += 10
    def reverse(self):
        print "Reversing"
        self.distance -= 5

bike1 = Bike(200, "25mph")
superBike = Bike(500, "50mph")
stupidBike = Bike(20, "10mph")

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

superBike.ride()
superBike.ride()
superBike.reverse()
superBike.reverse()
superBike.displayInfo()

stupidBike.reverse()
stupidBike.reverse()
stupidBike.reverse()
stupidBike.displayInfo()
#Answer to last question about stopping bike from having negative miles:
#I could make self-distance only decrease by 5 if distance is 5 or greater with a conditional, thus stopping reverse from reducing distance any lower than 0
