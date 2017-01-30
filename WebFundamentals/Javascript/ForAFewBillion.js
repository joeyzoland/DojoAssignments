function ForAFewBillion(days){
  var bread = 0.5;
  for(var i = 1; i <= days; i++){
    bread *= 2
  }
  console.log("After " + days + " days, he will have made " + bread/100 + " dollars!")
}

ForAFewBillion(4);
