class Bike (object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.distance = 0
    def displayInfo(self):
        print self.price, self.max_speed, self.distance
        return self
    def ride (self):
        print "Riding"
        self.distance += 10
        return self
    def reverse(self):
        print "Reversing"
        self.distance -= 5
        return self

bike1 = Bike(200, "25mph")
superBike = Bike(500, "50mph")
stupidBike = Bike(20, "10mph")

bike1.ride().ride().ride().reverse().displayInfo()
