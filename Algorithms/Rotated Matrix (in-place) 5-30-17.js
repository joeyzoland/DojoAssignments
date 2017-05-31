function rotateMatrix(arr){
  var rotations = Math.floor(arr.length/2)
  for (var x = 0; x < rotations; x++){
    //This swaps the top and right sides, leaving the top correct
    for (var a = 0 + x; a < arr.length - x; a++){
      temp = arr[0 + x][a]
      arr[0 + x][a] = arr[a][arr.length - x - 1]
      arr[a][arr.length - x - 1] = temp
    }
    //This swaps the right and bottom sides, leaving the right correct
    for (var b = 1 + x; b < arr.length - x - 1; b++){
      temp = arr[b][arr.length - x - 1]
      arr[b][arr.length - x - 1] = arr[arr.length - x - 1][arr.length - 1 - b]
      arr[arr.length - x - 1][arr.length - 1 - b] = temp
    }
    //This swaps the bottom and left, leaving those two correct
    for (var c = 1 + x; c < arr.length - x; c++){
      temp = arr[c][0 + x]
      arr[c][0 + x] = arr[arr.length - 1 - x][c]
      arr[arr.length - 1 - x][c] = temp
    }
  }
  //Just printing the array so you can see the changes
  console.log(arr)
}

// rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
// rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
rotateMatrix([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]])
