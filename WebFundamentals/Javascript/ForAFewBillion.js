function ForAFewBillion(days){
  var past = 0;
  var bread = 0.5;
  for(var i = 1; i <= days; i++){
    bread = (bread * 2);
    past += bread;
  }
  console.log("After " + days + " days, he will have made " + past/100 + " dollars!")
}

ForAFewBillion(30);
