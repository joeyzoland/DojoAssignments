function rotatedMatrix(arr){
  var newArr = [];
  for (var i = arr[0].length-1; i >= 0; i--){
    var newRow = [];
    for(var x = 0; x < arr.length; x++){
      newRow.push(arr[x][i])
    }
    newArr.push(newRow)
  }
  return newArr
}

console.log(rotatedMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
