function removeElement(nums: number[], val: number): number {
    let i = 0, k = 0
    while(i < nums.length){
        if(nums[i] === val){
            nums.splice(i, 1)
            i--
        } else {
            k++
        }
        i++
    }
    return k
};