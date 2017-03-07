//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var arr = [Int]()
for number in 1...255 {
    arr.append(number)
}
//print (arr)

let first = arc4random_uniform(255)
let first2: Int = Int(first)
let second = arc4random_uniform(255)
let second2: Int = Int(second)
let temp = arr[first2]
arr[first2] = arr[second2]
arr[second2] = temp

for i in 1...100{
    let first = arc4random_uniform(255)
    let first2: Int = Int(first)
    let second = arc4random_uniform(255)
    let second2: Int = Int(second)
//    print ("arrfirst is " + ("\(arr[first2])"))
//    print ("arrsecond is " + ("\(arr[second2])"))
    let temp = arr[first2]
    arr[first2] = arr[second2]
    arr[second2] = temp
//    print ("arrfirst is now " + "\(arr[first2])")
//    print ("arrsecond is now " + "\(arr[second2])")
//    print ("arrtemp is now " + "\(arr[temp])")
}

for index in 0..<arr.count{
    if arr[index] == 42{
        arr.remove(at: index)
        print ("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index " + "\(index)")
        break
    }
}
print (arr)