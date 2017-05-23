function LongPalin (str){
  var longest = 0
  for (var i = 0; i < str.length; i++){
    currDist = 0
    //This checks whether the selected character has exactly one matching character after it; if it does, then it uses a slightly different while loop centered on the middle of the two matching characters
    if((str[i] == str[i + 1]) && (str[i] != str[i-1])){
      while((str[i - (currDist + 1)] == str[i + (currDist + 2)]) && (str[i - (currDist + 1)] != " ") && (str[i - (currDist + 1)] != undefined)){
        currDist += 1
      }
      //Updates longest to the length of the current palindrome if it's longer
      if(currDist * 2 + 2 > longest){
        longest = currDist * 2 + 2
      }
    }
    //Otherwise, this loop simply adds onto currDist whenever the character before the selected index matches the character after the matching index, at the distance specified by currDist
    else{
      while((str[i - (currDist + 1)] == str[i + (currDist + 1)]) && (str[i - (currDist + 1)] != " ") && (str[i - (currDist + 1)] != undefined)){
        currDist += 1
      }
      //Updates longest to the length of the current palindrome if it's longer
      if(currDist * 2 + 1 > longest){
        longest = currDist * 2 + 1
      }
    }
  }
  return ("longest palindrome is " + longest)
}

// var sampleString = "racecar is a boboobob that has a level"
// console.log(LongPalin(sampleString))

console.log(LongPalin("racecar"))
