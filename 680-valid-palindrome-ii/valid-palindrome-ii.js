const validPalindrome = function(s) {
    let i = 0, j = s.length - 1
    while(i < j){
        if(s[i] == s[j]){
            i++
            j--
        }else{
            let left = s.split(''), right = s.split('') 
            left.splice(i,1)
            right.splice(j,1)
            return left.join('') == left.reverse().join('') || right.join('') == right.reverse().join('')
        }
    }
    return true
}