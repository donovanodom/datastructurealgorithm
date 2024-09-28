const minRemoveToMakeValid = function(s) {
    const open = [], closed = []
    for(i = 0; i < s.length; i++){
        let char = open[open.length - 1]
        if(s[i] != '(' && s[i] != ')') continue
        if(s[i] == '('){
            open.push(s[i])
        }else if(s[i] = ')' && char == '('){
            open.pop()
        }else{
            closed.push(s[i])
        }
        
    }
    if(!open.length && !closed.length) return s
    if(open.length + closed.length == s.length) return ""
    let start = 0, end = s.length - 1
    while(open.length || closed.length){
        if(s[start] != ')' && closed.length){
            start++
        }else if(closed.length){
            closed.pop()
            s = s.slice(0, start) + s.slice(start + 1)
        }
        if(s[end] != '(' && open.length){
            end--
        }else if(open.length){
            open.pop()    
            s = s.slice(0, end) + s.slice(end + 1)
            end--
        }
    }   
    return s
}