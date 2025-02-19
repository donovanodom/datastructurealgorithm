const removeElement = function(nums, val) {
    let i = 0, k = 0
    while(i < nums.length){
        if(nums[i] == val){
            nums.splice(i, 1)
        } else {
            k++
            i++
        }
    }
    return k
};