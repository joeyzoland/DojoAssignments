function gambling(quarters){
  var winnings = 0;
  for(var i = quarters - 1; i >= 0; i--){
  //We loop by quarters - 1, as our gambler's first attempt uses a quarter and ends when he has used his last quarter, when the number of remaining quarters = 0
    var winner = Math.floor(Math.random() * 100);
    if (winner === 0){
    //The odds of winning are 1%, so we take a random number between 0 and 99 and say they won if winner === 0
      var winnings = Math.floor(Math.random() * 51)+50;
      //Calculaes how many coins they won; they can win between 50 and 100
      console.log("You win " + winnings + " quarters and you had " + i + " quarters left! You now have " + (i + winnings) + " quarters!");
      //Prints the number of quarters they have left (i.e., how many gambling loops they had left), + their winnings
      break;
    }
  }
  if (winnings === 0){
  console.log("Sorry! You have run out of quarters (you have 0 left). Please come back to the casino when you have more money to lose... I mean, to gamble with! :)")
  }
}

gambling(100)
