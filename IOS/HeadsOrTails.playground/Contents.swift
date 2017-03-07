//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

func tossCoin() -> String {
    print ("Tossing a coin")
    let random = arc4random_uniform(2)
    let randomInt: Int = Int(random)
    // Note to self: Must initialize variable outside of conditional, or it throws an error
    // i.e., Can't omit "var result = ..." and later use "let result = ..." in conditionals
    var result = String()
    if randomInt == 0{
        result = "Heads"
    }
    if randomInt == 1{
        result = "Tails"
    }
    print (result)
    return result
}

func tossMultipleCoinsWithNumberCoins(n: Int) -> Double {
    var heads = 0
    var tails = 0
    for _ in 1...n{
        if tossCoin() == "Heads"{
            heads += 1
        }
        else{
            tails += 1
        }
    }
    print ("Out of all tosses, the proportion of coins that were heads was...")
    return (Double(heads) / Double(heads + tails))
}

print(tossMultipleCoinsWithNumberCoins(n: 4))