//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

class Animal {
    var name = String()
    var health = Int()
//        get {
//            return self.health
//        }
//        set {
//            self.health = 100
//        }
//    }
    init(name: String?) {
        if let unwrappedName = name {
            self.name = unwrappedName
        }
        else {
            self.name = "Anonymous"
        }
        self.health = 100
    }
    func displayHealth() -> Animal {
        print ("\(self.name)'s health is \(self.health)")
        return self
    }
}

class Cat: Animal {
    override init(name: String?) {
        super.init(name: name)
        self.health = 150
    }
    func growl() -> Cat {
        print ("Rawr")
        return self
    }
    func run() -> Cat {
        print ("Running")
        self.health -= 10
        return self
    }
}

class Cheetah: Cat {
    override func run() -> Cheetah {
        if self.health >= 50 {
            self.health -= 50
            print ("Running Fast")
        }
        else {
            print ("\(self.name) is too exhausted to run!")
        }
        return self
    }
    func sleep() {
        if self.health >= 150 {
            self.health = 200
        }
        else {
            self.health += 50
        }
    }
}

class Lion: Cat {
    override func growl() -> Lion {
        print ("ROAR!!! I am the King of the Jungle")
        return self
    }
    override init(name: String?) {
        super.init(name: name)
        self.health = 200
    }
}


//var Bobby = Cat(name: "Bobby")

//var Fido = Cat(name: "Fido")
//Fido.run()
//Fido.displayHealth()

//var lione = Lion(name: "Lione")
//print (lione.name)
//lione.growl()

var Cheeto = Cheetah (name: "Cheeto")
Cheeto.run().run().run().run().displayHealth()

print()

var Lione = Lion(name: "Lione")
Lione.run().run().run().growl()
