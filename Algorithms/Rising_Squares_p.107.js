function risingSquare(n, counter){
  if (counter == undefined){
    if (n >= 1){
      counter = 1
    }
    else {
      console.log("improper input")
      return
    }
  }
  else if (counter > n){
    // If n is even, that means the algorithm will print the last odd before u-turning, but we still have to print n
    if (n % 2 == 0){
      counter = n
    }
    // If n is odd, that means we have already printed the highest square when we were ascending through odds, so we have to go 1 down to highest even
    else{
      counter = n - 1
    }
  }
  //True base case: The function should stop once counter descends to 0
  if (counter == 0){
    return
  }
  console.log(counter * counter)
  //If counter is even, that means we haven't u-turned yet and are going up
  if (counter % 2 == 1){
    return risingSquare(n, counter + 2)
  }
  //Otherwise, we're heading down towards our base case of 0
  else{
    return risingSquare(n, counter - 2)
  }
}

risingSquare(5)
