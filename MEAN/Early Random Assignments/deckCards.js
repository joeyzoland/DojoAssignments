function DeckConstructor () {
  var suits = ["Clubs", "Hearts", "Spades", "Diamonds"]
  var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

  //Kept these as methods within the deck function, as you probably won't have
  //multiple instantiations of DeckConstructor at the same time
  this.reset = function() {
    this.cardsInDeck = [];
    for (var i in suits) {
      for (var j in cards) {
        this.cardsInDeck.push(cards[j] + " of " + suits[i])
      }
    }
  }
  //Invoke the reset function on instantiation to initialize the deck with all 52 cards
  this.reset()

  this.shuffle = function() {
    for (var k = 0; k < 1000; k++) {
      var indexCardToSwitch = Math.floor(Math.random() * this.cardsInDeck.length)
      var cardToSwitch = this.cardsInDeck[indexCardToSwitch]
      var secondIndexCardToSwitch = Math.floor(Math.random() * this.cardsInDeck.length)
      var secondCardToSwitch = this.cardsInDeck[secondIndexCardToSwitch]

      var tempCard = cardToSwitch
      this.cardsInDeck[indexCardToSwitch] = secondCardToSwitch
      this.cardsInDeck[secondIndexCardToSwitch] = tempCard
    }
  }

  //Note: This function deals a random card, shifts it all the way to the back, and then pops it
  //I guess you don't need this and could just draw a random card off the top
  //But where's the fun in that...
  this.draw = function() {
    var indexCardToRemove = Math.floor(Math.random() * this.cardsInDeck.length)
    var cardToRemove = this.cardsInDeck[indexCardToRemove]
    // console.log(cardToRemove)

    for (var i = indexCardToRemove; i < this.cardsInDeck.length - 1; i++) {
      temp = this.cardsInDeck[i]
      this.cardsInDeck[i] = this.cardsInDeck[i + 1]
      this.cardsInDeck[i + 1] = temp
    }
    // console.log(this.cardsInDeck.pop())
    return this.cardsInDeck.pop()
  }

}





function PlayerConstructor(name) {
  this.name = name
  this.hand = []
}

PlayerConstructor.prototype.takeACard = function(deck) {
  this.hand.push(deck.draw())
}
PlayerConstructor.prototype.discard = function(indexCard) {
  //If the hand isn't empty
  if (this.hand.length > 0) {
    //If the indexCard entry is valid, removes that card
    //Otherwise, just pops the last card
    if (indexCard < this.hand.length - 1) {
      //This swaps the indexCard to the back so that it can be popped
      while (indexCard < this.hand.length - 1) {
        var temp = this.hand[indexCard]
        this.hand[indexCard] = this.hand[indexCard + 1]
        this.hand[indexCard + 1] = temp
        indexCard += 1
      }
    }
    this.hand.pop()
  }
}



var deck = new DeckConstructor()
// console.log(deck.cardsInDeck)

var Joey = new PlayerConstructor("Joey")
Joey.takeACard(deck)
Joey.takeACard(deck)
Joey.takeACard(deck)
console.log(Joey.hand)
Joey.discard(1)
console.log(Joey.hand)
