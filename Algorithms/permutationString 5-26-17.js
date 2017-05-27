function permutationString(str1, str2){
  if(str1.length != str2.length){
    return false
  }
  var object = {}
  for(var x = 0; x < str1.length; x++){
    if(!object[str1[x]]){
      object[str1[x]] = 1
    }
    else{
      object[str1[x]] += 1
    }
  }
  for(var y = 0; y < str2.length; y++){
    if(!object[str2[y]]){
      return false
    }
    if(object[str2[y]] == 0){
      return false
    }
    object[str2[y]]-=1
  }
  return true
}

console.log(permutationString("ada", "da"))
