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
AnimalQ.prototype.dequeue = function(){
  var adopted = this.head;
  this.head = this.head.next;
  return adopted;
}



function Shelter(){
  this.dogQ = new AnimalQ();
  this.catQ = new AnimalQ();
}

Shelter.prototype.enqueue = function(species, val){
  if (species == "dog"){
    this.dogQ.enqueue(val);
  }
  else if (species == "cat"){
    this.catQ.enqueue(val);
  }
}

//This dequeueAny function assumes that multiple animals cannot be enqueued with the same timestamp(val)
Shelter.prototype.dequeueAny = function(){
  if (this.dogQ.head.val < this.catQ.head.val){
    this.dogQ.dequeue();
  }
  else if(this.CatQ.head.val < this.dogQ.head.val){
    this.cat.dequeue();
  }
}

Shelter.prototype.dequeueCat = function(){
  this.catQ.dequeue();
}

Shelter.prototype.dequeueDog = function(){
  this.dogQ.dequeue();
}

var myShelter = new Shelter();
myShelter.enqueue("dog", 2)
myShelter.enqueue("cat", 3)
myShelter.enqueue("dog", 4)
myShelter.dequeueAny()
console.log("dogQ is")
SLLchecker(myShelter.dogQ)
console.log("catQ is")
SLLchecker(myShelter.catQ)
