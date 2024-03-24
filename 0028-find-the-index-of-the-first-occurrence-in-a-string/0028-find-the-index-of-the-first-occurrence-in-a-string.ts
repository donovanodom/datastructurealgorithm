function strStr(haystack: string, needle: string): number {
    let l = 0, r = needle.length
    while(r <= haystack.length){
        console.log(haystack.substring(l, r))
        if(haystack.substring(l, r) === needle) return l
        l++
        r++
    }
    return -1
};