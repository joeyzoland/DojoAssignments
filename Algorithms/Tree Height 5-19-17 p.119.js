function BST(){
  this.root = null
}

function BTNode(value){
  this.val = value;
  this.left = null;
  this.right = null;
}

function max(a, b){
  if (a > b){
    return a
  }
  else {
    return b
  }
}

BTNode.prototype.height = function(h){
  if (h == undefined){
    var h = 1
  }
  //Base case is if you reach the last node in a branch
  if ((this.left == undefined) && (this.right == undefined)){
    return h
  }
  else{
    //If there is a left and right, return the bigger of the two;
    //Otherwise, return the one that exists, left or right height
    if ((this.left != undefined) && (this.right != undefined)){
      return max(this.left.height(h + 1), this.right.height(h + 1))
    }
    else if (this.left == undefined){
      return this.right.height(h + 1)
    }
    else{
      return this.left.height(h + 1)
    }
  }
}

BST.prototype.height = function(){
  if (this.root == null){
    return 0
  }
  return this.root.height()
}

var myBST = new BST()
myBST.root = new BTNode(3)

myBST.root.left = new BTNode(1)
myBST.root.left.left = new BTNode(0)
myBST.root.left.right = new BTNode(2)

myBST.root.right = new BTNode(5)
myBST.root.right.right = new BTNode(8)
myBST.root.right.right.right = new BTNode(11)



// console.log("myBST is", myBST)
// console.log("myBST.root is", myBST.root)

console.log(myBST.height())
