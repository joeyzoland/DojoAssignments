//Global helper function for checking correctness of singly-linked lists
var SLLchecker = function(SLL) {
  if (SLL.head == null){
    console.log("This SLL has no nodes (i.e., is empty)")
    return false
  }
  else{
    runner = SLL.head
    counter = 1
    while (runner != null){
      console.log("For node " + counter + ", value is " + runner.val)
      runner = runner.next
      counter += 1
    }
  }
}



function SLQueue(){
  this.head = null;
  this.tail = null;
}

function Node(value){
  this.val = value;
  this.next = null;
}

SLQueue.prototype.enqueue = function(value) {
  if (this.head == null){
    this.head = new Node(value)
    this.tail = this.head
    return this.tail
  }
  this.tail = this.head.enqueue(value)
  return this.tail
}

//Recursive version (checked and it's fine)
// Node.prototype.enqueue = function(value) {
//   if(this.next == null){
//     this.next = new Node(value)
//     return this.next
//   }
//   return this.next.enqueue(value)
// }

//Iterative version (checked and it's fine)
Node.prototype.enqueue = function(value) {
  var runner = this
  while(runner.next != null){
    runner = runner.next
  }
  runner.next = new Node(value)
  return runner.next
}

//Creating sample SLQueue
var newSLQueue = new SLQueue()
newSLQueue.enqueue(2)
newSLQueue.enqueue(4)
newSLQueue.enqueue(6)
newSLQueue.enqueue(8)
// console.log(newSLQueue)
// SLLchecker(newSLQueue)





// //Actually, this is more like a stack, as enqueue has the newest node at the back, and this dequeue is popping from the back (it's first-in last-out like a stack, rather than first-in first-out like a queue).  Regardless, saving here for reference.
// SLQueue.prototype.dequeue = function(){
//   if(this.head == null){
//     console.log("This SLQueue has no nodes; nothing to dequeue")
//     return false
//   }
//   if(this.head == this.tail){
//     var selected = this.head
//     this.head = null
//     this.tail = null
//     console.log("The only node was removed; now SLQueue is empty")
//     return selected
//   }
//   var result = this.head.dequeue(this.tail)
//   this.tail = result[1]
//   return result[0]
// }
//
// //Recursive dequeue solution
// Node.prototype.dequeue = function(tail){
//   if(this.next == tail){
//     var selected = this.next
//     this.next = null
//     return [selected, this]
//
//     //For some reason, the below code didn't work when the result was returned as a tuple as shown below; why is that?
//     // return (selected, this)
//   }
//   return this.next.dequeue(tail)
// }
//
// SLLchecker(newSLQueue)
// console.log(newSLQueue.dequeue())
// console.log()
// SLLchecker(newSLQueue)
// console.log(newSLQueue.dequeue())
// console.log()
// SLLchecker(newSLQueue)
// console.log(newSLQueue.dequeue())
// console.log()
// SLLchecker(newSLQueue)
// console.log(newSLQueue.dequeue())
// SLLchecker(newSLQueue)
// console.log()



//This pops from the front because the enqueue adds each new node to the back, so it's first-in first-out by popping from the front, which is what a queue should be
SLQueue.prototype.dequeue = function(){
  if(this.head == null){
    console.log("This SLQueue has no nodes; nothing to dequeue")
    return false
  }
  if(this.head == this.tail){
    var selected = this.head
    this.head = null
    this.tail = null
    console.log("The only node was removed; now SLQueue is empty")
    return selected
  }
  var selected = this.head
  this.head = this.head.next
  return selected
}

SLLchecker(newSLQueue)
console.log(newSLQueue.dequeue())
console.log()
SLLchecker(newSLQueue)
console.log(newSLQueue.dequeue())
console.log()
SLLchecker(newSLQueue)
console.log(newSLQueue.dequeue())
console.log()
SLLchecker(newSLQueue)
console.log(newSLQueue.dequeue())
SLLchecker(newSLQueue)
console.log()
console.log(newSLQueue.dequeue())
SLLchecker(newSLQueue)
console.log()
