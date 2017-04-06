var _ = {
  //  map: function(array, method) {
  //    for (i in array) {
  //      if (typeof(method) === function) {
  //        method(i)
  //      }
  //    }
  //    return array
  //  },
  map: function(array, method) {
    for (i in array) {
      // console.log(array[i])
      array[i] = method(array[i])
    }
    return array
  },
   reduce: function(array, method) {
     var number = 0
     for (i in array) {
       // console.log(array[i])
       number = method(number, array[i])
     }
     return number
   },
   find: function(array, method) {
     for (i in array) {
       if (method(array[i]) == true) {
         return array[i]
       }
     }
   },
   filter: function(array, method) {
     for (var i = array.length - 1; i >= 0; i--) {
       if (method(array[i]) === false) {
         if (i == array.length - 1) {
          //  console.log(array[i])
           array.pop()
           i--
         }
         else {
           while(i != array.length - 1) {
             var temp = array[i]
             array[i] = array[i + 1]
             array[i + 1] = temp
             i++
           }
           array.pop()
         }
       }
     }
    return array
   },
   reject: function(array, method) {
     for (var i = array.length - 1; i >= 0; i--) {
       if (method(array[i]) === true) {
         if (i == array.length - 1) {
          //  console.log(array[i])
           array.pop()
           i--
         }
         else {
           while(i != array.length - 1) {
             var temp = array[i]
             array[i] = array[i + 1]
             array[i + 1] = temp
             i++
           }
           array.pop()
         }
       }
     }
    return array
   }
 }

// console.log(_.map([1,2,3], function(num) {return num * 3}))
// console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }))
// console.log(_.find([1, 2, 4, 5, 6], function(num){ return num % 7 == 0; }))
// console.log(_.filter([7, 8, 9, 10, 11, 12, 14, 15], function(num){ return num % 2 == 0; }))
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
