//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//let (x, y) = (1, 2)
//print (x)
//print (y)

//Swift is strongly typed, meaning variable types cannot change after creation
//Use constants for everything that doesn't vary, in which case, use variables

//var name = "Anakin"            // Type inferred as String based on the value "Anakin"
//name = 42                      // THIS IS STILL NOT ALLOWED since name is a "String" type

//// Declare name as a constant because we anticipate that it will NOT change.
//let name: String = "Anakin Skywalker"
//// Note that just like variables, constants also have types
//// Now we cannot change the name:
//name = "Darth Vader"        // THIS WON'T WORK because name is a constant so we CANNOT change it.

//print("The maximum value \(Int.max)")
//print("The minimum value \(Int.min)")
//
//print("The maximum value \(Int32.max)")
//print("The minimum value \(Int32.min)")
//
//print("The maximum value \(UInt32.max)")
//print("The minimum value \(UInt32.min)")
//
//var myInt32: Int32 = 3
//var myNormalInt: Int
//// This will not error, because we first convert Int32 to instance of Int Type
//myNormalInt = Int(myInt32)
//print (myNormalInt)

//// loop from 1 to 5 including 5
//for i in 1...5 {
//    print(i)
//}
//// loop from 1 to 5 excluding 5
//for i in 1..<5 {
//    print(i)
//}
//
//var start = 0
//var end = 5
//// loop from start to end including end
//for i in start...end {
//    print(i)
//}
//// loop from start to end excluding end
//for i in start..<end {
//    print(i)
//}
//
//var i = 1
//while i < 6 {
//    print(i)
//    i = i+1
//}
