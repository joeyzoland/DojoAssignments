function brackets(arr){
  var newarr = [];
  if(arr[0] == "]" || arr[0] == ")" || arr[0] == "}") {
    console.log("early exit recognized")
    return false
  }
  else{
    newarr.push(arr[0])
  }
  for(var i = 1; i < arr.length; i++) {
    console.log("on iteration " + i + ", newarr is " + newarr)
    if(arr[i] == "]" || arr[i] == ")" || arr[i] == "}") {
      if(
        (newarr[newarr.length-1] == "[" && arr[i] == "]") ||
        (newarr[newarr.length-1] == "(" && arr[i] == ")") ||
        (newarr[newarr.length-1] == "{" && arr[i] == "}")
      ){
        newarr.pop()
        continue
      }
      else{
        console.log("returned false in for loop")
        console.log("newarr[newarr.length-1] = " + newarr[newarr.length-1])
        console.log("arr[i] = " + arr[i])
        return false
      }
    }
    newarr.push(arr[i])
  }
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
console.log(brackets(["[", "(", ")", "]", "(", ")", "["]))
