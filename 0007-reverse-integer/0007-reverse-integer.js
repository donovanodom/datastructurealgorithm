const reverse = function(x) {
    const s = x.toString(), max = 2147483648
    let neg = s[0] == '-' ? true : false
    let c = s.split('').reverse()
    if(neg){
      c.pop()
      c.unshift('-')
    }
    if(Math.abs(c.join('')) > max) return 0
    return c.join('')
};