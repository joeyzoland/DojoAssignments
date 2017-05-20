function brackets(arr){
  var newarr = [];
  var symbol_dict = {"{": "}", "[": "]", "(": ")"}

  //Checking the first value of the array separately, as if it's a right bracket, we want to terminate the function immediately
  for (var i in symbol_dict){
    //If the symbol is a value, i.e., a right bracket, then we want to return False because it's first up and therefore isn't closing anything
    if (arr[0] == symbol_dict[i]){
      console.log("early exit recognized")
      return false
    }
    //If the symbol is a key, i.e., a left bracket, then we want to push it to the new array
    else if (arr[0] == i){
      newarr.push(arr[0])
      break
    }
    //Note: The first symbol could be something else, in which case we ignore it
  }

  //Continue iterating through the original array (already checked index 0)
  for(var i = 1; i < arr.length; i++) {
    console.log("on iteration " + i + ", newarr is " + newarr)

    for (var j in symbol_dict){
      //Check if the next value in the array is a value, i.e., right bracket
      if (arr[i] == symbol_dict[j]){
        //If the next arr value is a right, check it against the corresponding left (i.e., the key); if they match, pop it off newarr and keep going
        if (newarr[newarr.length - 1] == j){
          newarr.pop()
          continue
        }
        //Otherwise, the right bracket doesn't correspond to the left, so we know it's invalid and return false
        else{
          return false
        }
      }
      //If the next arr value isn't a right bracket, check if a left bracket; if it is a left, push, otherwise, (e.g., it's a letter), do nothing
      else if (arr[i] == j){
        newarr.push(arr[i])
      }
    }
  }
  //If everything in newarr has been popped, that means every left bracket had a corresponding right, so we return true; otherwise, return false
  if (newarr.length == 0){
    return true
  }
  else{
    console.log("Went through array, and computer thinks it should be false")
    console.log("newarr is " + newarr)
    return false
  }
}

// console.log(brackets(["{", "[", "[", "]", "(", "(", ")", "]", ")", "}"]))
// console.log(brackets(["[", "(", ")", "]", "(", ")", "[", "]"]))
// console.log(brackets(["a", "[", "(", ")", "]", "(", ")", "[", "b", "]"]))
console.log(brackets(["a", "[", "(", ")", "]", "(", ")", "[", "b"]))

// var object = {"one": 1, "two": 2}
// for (i in object) {
//   console.log("key is ", i)
//   console.log("value is ", object[i])
// }
