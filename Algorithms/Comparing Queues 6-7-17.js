var SLLchecker = function(SLL) {
  if (SLL.head == null){
    console.log("This SLL has no nodes (i.e., is empty)");
    return false;
  }
  else{
    runner = SLL.head;
    counter = 1;
    while (runner != null){
      console.log("For node " + counter + ", value is " + runner.val);
      runner = runner.next;
      counter += 1;
    }
  }
}

function SLQueue(){
  this.head = null;
  this.tail = null;
}
function Node(val){
  this.val = val;
  this.next = null;
}
SLQueue.prototype.enqueue = function(val){
  if (!this.head){
    this.head = new Node(val);
    this.tail = this.head;
    return this.tail;
  }
  this.tail.next = new Node(val);
  this.tail = this.tail.next;
  return this.tail;
}
SLQueue.prototype.dequeue = function(){
  var removed = this.head;
  this.head = this.head.next;
  return removed;
}

function compare(Q1, Q2){
  var runner1 = Q1.head;
  var runner2 = Q2.head;
  if(runner1 == null && runner2 || runner2 == null && runner1){
    return false;
  }
  if(runner1 == null && runner2 == null){
    return true;
  }
  while(runner1 || runner2){
    if(runner1.val != runner2.val){
      return false;
    }
    runner1 = runner1.next;
    runner2 = runner2.next;
  }
  return true;
}

myQueue = new SLQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);

myQueue2 = new SLQueue();
myQueue2.enqueue(1);
myQueue2.enqueue(2);
myQueue2.dequeue();


console.log(compare(myQueue, myQueue2))
