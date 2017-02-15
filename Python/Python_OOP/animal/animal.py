#Collaborators: Jonathan Lee, Joseph Zoland

class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name: " + self.name
        print "Health: " + str(self.health)
        return self

animal = Animal("Animal Jebediah", 100)
animal.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name):
        self.name = name
        super(Dog, self).__init__(self.name, 150)
    def pet(self):
        self.health+=5
        return self

dog = Dog("Dog Bob")
dog.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        self.name = name
        super(Dragon, self).__init__(self.name, 170)
    def fly(self):
        self.health-=10
        return self
    def displayHealth(self):
        print "This is a dragon"
        super(Dragon, self).displayHealth()

dragon = Dragon("Albi the Racist Dragon")
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
