const isValid = (s) => {
    let stack = [], i = 0
    while(i<s.length){
        let char = stack[stack.length-1]
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }else if(char == '(' && s[i] ==')' || char == '{' && s[i] =='}' || char == '[' && s[i] ==']'){
            stack.pop()
        }else{
            return false
        }
        i++
    }
    return !stack.length
}