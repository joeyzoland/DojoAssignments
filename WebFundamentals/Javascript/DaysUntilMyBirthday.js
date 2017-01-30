function daysUntilMyBirthday(num){
  if (num === 0){
    console.log("!!!HAPPY BIRTHDAY!!!!!")
  }
  else if (num <= 5){
    console.log(num + " DAYS UNTIL MY BIRTHDAY!!!")
  }
  else{
    console.log(num + " days until my birthday. ")
    if (num <= 30){
      console.log("Getting closer!")
    }
    if (num > 30){
      console.log("I can't wait that long...")
    }
  }
}

daysUntilMyBirthday(0);
