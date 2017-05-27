function urlify(str){
  newStr = "";
  newArr = str.split(" ");
  newStr = newArr[0];
  for(var i = 1; i < newArr.length; i++){
    newStr += "%20" + newArr[i];
  }
  return newStr;
}

console.log(urlify("Please Excuse My Dear Aunt Sally"))
