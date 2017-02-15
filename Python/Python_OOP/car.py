class Car (object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all(self.price, self.speed, self.fuel, self.mileage, self.tax)
    def display_all(self, price, speed, fuel, mileage, tax):
        print "Price: " + str(self.price)
        print "Speed: " + self.speed
        print "Fuel: " + self.fuel
        print "Mileage: " + self.mileage
        print "Tax: " + str(self.tax)

car1 = Car(2000, "35mph", "Full", "15mpg")
car2 = Car(3000, "50mph", "Full", "15mpg")
car3 = Car(4000, "55mph", "Full", "15mpg")
car4 = Car(2500, "35mph", "Empty", "15mpg")
car5 = Car(2000, "35mph", "Full", "15mpg")
car6 = Car(1000, "1000mph", "Empty", "15mpg")
