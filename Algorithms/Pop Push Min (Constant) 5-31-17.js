var MinList = function(){
  this.minStack = [];
  this.numStack = [];
}

MinList.prototype.min = function(){
  return this.minStack[this.minStack.length-1]
}

MinList.prototype.push = function(val){
  if(this.min() === undefined){
    this.minStack.push(val)
  }
  else if(val <= this.min()){
    this.minStack.push(val)
  }
  this.numStack.push(val)
}

MinList.prototype.pop = function(){
  var holder = this.numStack.pop()
  var minest = this.min()
  if(minest !== undefined){
    if(minest === holder){
      this.minStack.pop()
    }
  }
  return holder
}

// myList = new MinList()
// console.log(myList.min())
//
// myList.push(2)
// myList.push(5)
// myList.push(3)
// myList.push(1)
//
// console.log(myList)
//
// myList.pop()
// console.log(myList)
//
// myList.pop()
// console.log(myList)
//
// myList.pop()
// console.log(myList)
//
// myList.pop()
// console.log(myList)
