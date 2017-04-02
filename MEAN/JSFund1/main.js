  // var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
  // for (var y = 0; y < x.length; y++) {
  //   console.log(x[y])
  // }
  // x.push(100)
  // console.log(x)
  // x.push(["hello", "world", "JavaScript is Fun"])
  // console.log(x)

  // var finalSum = 0;
  // for (var i = 1; i <= 500; i++) {
  //   finalSum += i
  // }
  // console.log(finalSum)

  // var y = [1, 5, 90, 25, -3, 0]
  // var min = y[0]
  // var sum = y[0]
  // for (var x = 1; x < y.length; x++) {
  //   if (y[x] < min) {
  //     min = y[x]
  //   }
  //   sum += y[x]
  // }
  // sum = sum / y.length
  // console.log(min)
  // console.log(sum)

  var newNinja = {
   name: 'Jessica',
   profession: 'coder',
   favorite_language: 'JavaScript', //like that's even a question!
   dojo: 'Dallas'
  }

  for (var i in newNinja) {
    console.log(i)
    console.log(newNinja[i])
  }
