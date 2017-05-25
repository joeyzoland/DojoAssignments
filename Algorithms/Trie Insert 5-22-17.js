function trieset() {
  this.root = null
}
function trienode(val){
  this.value = val
  this.pointers = []
}

trieset.prototype.insertNode = function(string){
  if (this.root == null){
    this.root = new trienode("")
  }
  return this.root.insertNode(string)
}
trienode.prototype.insertNode = function(string, currPos){
  if (typeof(currPos) == "undefined"){
    currPos = 0
  }
  console.log("currPos is " + currPos)
  if (currPos == string.length){
    console.log("reached true case, string.length is", string.length + ", currPos = " + currPos)
    console.log("this.value is " + this.value)
    return true
  }
  //Iterate through all of the pointers of the node; if a pointer ever matches the string exactly, the string was already there so return false
  for (var i = 0; i < this.pointers.length; i++){
    if(string == this.pointers[i].value){
      return false
    }
    //If the substring is already there, make a recursive call on the preexisting node and keep going
    if(string.slice(0, currPos + 1) == this.pointers[i].value){
      console.log("making recursive call (node already there)")
      return this.pointers[i].insertNode(string, currPos + 1)
    }
  }
  //Else, if the substring isn't already there, make a new node and make a recursive call on it
  console.log("adding new node")
  var newnode = new trienode(string.slice(0, currPos + 1))
  this.pointers.push(newnode)
  return newnode.insertNode(string, currPos + 1)
}

sampleTrieset = new trieset()
console.log(sampleTrieset.insertNode("cheese"))
console.log(sampleTrieset.insertNode("cheesy"))
console.log(sampleTrieset.insertNode("cheese"))
