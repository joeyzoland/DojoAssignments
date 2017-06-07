function sort(stk){
  var tStack = [];
  var temp = "";
  var sorted = false;
  if(stk.isEmpty()){
    sorted = true;
  }
  while (sorted == false){
    temp = stk.pop();
    while(stk.isEmpty()){
      sorted = true;
      if(stk.peek() < temp){
        tStack.push(stk.pop());
        sorted = false;
      }
      else{
        tStack.push(temp);
        temp = stk.pop();
      }
    }
    stk.push(temp);
    while(!tStack.isEmpty()){
      stk.push(tStack.pop());
    }
  }
}
