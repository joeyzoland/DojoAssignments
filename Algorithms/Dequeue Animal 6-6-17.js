//Global helper function for checking correctness of singly-linked lists, copied from past algo assignment
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


// Old Enqueue Code
// function AnimalQ(){
//   this.head = null;
// }
// function AnimalNode(val){
//   this.val = val;
//   this.next = null;
// }
// AnimalQ.prototype.enqueue = function(species){
//   if (!this.head){
//     this.head = new AnimalNode(species);
//     return this.head;
//   }
//   var runner = this.head;
//   while (runner.next){
//     runner = runner.next;
//   }
//   runner.next = new AnimalNode(species);
// }

// New Enqueue Code
function AnimalQ(){
  this.head = null;
  this.tail = null;
}
function AnimalNode(val){
  this.val = val;
  this.next = null;
}
AnimalQ.prototype.enqueue = function(species){
  if (!this.head){
    this.head = new AnimalNode(species);
    this.tail = this.head;
    return this.tail;
  }
  this.tail.next = new AnimalNode(species);
  this.tail = this.tail.next;
  return this.tail;
}

AnimalQ.prototype.dequeueAny = function(){
  var adopted = this.head;
  this.head = this.head.next;
  return adopted;
}
AnimalQ.prototype.dequeueCat = function(){
  if (this.head.val == "cat"){
    return this.dequeueAny();
  }
  var runner = this.head;
  while (runner.next){
    if (runner.next.val == "cat"){
      var adopted = runner.next;
      runner.next = runner.next.next;
      return adopted;
    }
    runner = runner.next;
  }
}
AnimalQ.prototype.dequeueDog = function(){
  if (this.head.val == "dog"){
    return this.dequeueAny();
  }
  var runner = this.head;
  while (runner.next){
    if (runner.next.val == "dog"){
      var adopted = runner.next;
      runner.next = runner.next.next;
      return adopted;
    }
    runner = runner.next;
  }
}

myAnimalQ = new AnimalQ();
myAnimalQ.enqueue("cat");
myAnimalQ.enqueue("dog");
myAnimalQ.enqueue("cat");
myAnimalQ.enqueue("dog");

myAnimalQ.dequeueDog();
myAnimalQ.dequeueCat();
SLLchecker(myAnimalQ);
