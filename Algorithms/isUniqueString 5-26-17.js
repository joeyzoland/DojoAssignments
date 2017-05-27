function isUnique(str){
  //Flash exit case: As there are only 128 characters, a string that is longer than that must have at least one duplicate
  if (str.length > 128){
    return false
  }
  for(var i = 1; i < str.length; i++){
    for(var x = i - 1; x >= 0; x--){
      if(str[x] == str[i]){
        return false
      }
    }
  }
  return true
}

console.log(isUnique("daaeb"))
