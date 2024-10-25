const minRemoveToMakeValid = function(s) {
  
  // intialize stacks for open and closed parentheses
  const open = [], closed = []
  
  // iterate through string and store open and closed
  // parentheses, whenever you encounter a closed
  // parentheses with an open one existing in the open
  // stack, remove the last element from the stack and
  // do not store the closed parenteses
  for(i = 0; i < s.length; i++){
    if(s[i] == '('){
      open.push(s[i])
    }else if(s[i] == ')' && open.length){
      open.pop()
    }else if(s[i] == ')'){
      closed.push(s[i])
    }
  }
  
  // if open and closed stacks are empty there are
  // no parentheses to remove so return s
  if(!open.length && !closed.length) return s
  
  // if the string length equals all stored parentheses you
  // must remove all ie "))((" and return an empty string
  if(open.length + closed.length == s.length) return ""
  
  // as long as the stacks have values, iterate through
  // string from left to remove the first closed
  // parentheses you encounter and from the right to 
  // remove the first open parentheses you encounter
  let start = 0, end = s.length - 1
  while(closed.length){
    if(s[start] == ')'){
      closed.pop()
      s = s.slice(0, start) + s.slice(start + 1)
    }else{
      start++
    }
  }
  while(open.length){
    if(s[end] == '('){
      open.pop()    
      s = s.slice(0, end) + s.slice(end + 1)
    }else{
      end--
    }
  }   
  return s
}