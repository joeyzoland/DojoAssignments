function NumbersOnly (arr){
  var newarr = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof(arr[i]) === "number"){
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

console.log(NumbersOnly([1, "apple", -3, "orange", 0.5]))

console.log(Math && console)
