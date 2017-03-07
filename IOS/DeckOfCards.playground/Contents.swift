//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
}

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let numerical_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

class Deck {
    var cards: [Card] = [Card]()
    func reset() {
        cards = [Card]()
        for suit in suits{
            for index in 0...12{
                let myCard = Card(value: values[index], suit: suit, numerical_value: numerical_values[index])
                cards.append(myCard)
            }
        }
    }
    
    init() {
        self.reset()
    }
    func deal() -> Card {
        return self.cards.remove(at: 0)
    }
    func shuffle(){
        for _ in 1...1000{
            let first = arc4random_uniform(UInt32(cards.count))
            let first2 = Int(first)
            let second = arc4random_uniform(UInt32(cards.count))
            let second2 = Int(second)
            
            let temp = cards[first2]
            cards[first2] = cards[second2]
            cards[second2] = temp
        }
        print (cards)
    }
}

class Player {
    var name: String?
    var hand: [Card] = [Card]()
    init(name: String?) {
        if name != nil {
            self.name = name
        }
        else {
            self.name = "Anonymous"
        }
    }
    func drawWithDeck(deck: Deck) -> Card {
        let card = deck.deal()
        hand.append(card)
        return card
    }
    func discard(card: Card) -> Bool{
        for i in 0..<hand.count{
            if hand[i].value == card.value && hand[i].suit == card.suit {
                hand.remove(at: i)
                return true
            }
        }
        return false
    }
}

//var myDeck: Deck = Deck()
//myDeck.shuffle()
