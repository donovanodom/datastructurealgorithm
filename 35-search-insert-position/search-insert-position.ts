function searchInsert(nums: number[], target: number): number {
    let l = 0
    while(l < nums.length && nums[l] != target) {
        if(nums[l] === target || nums[l] > target) return l
        if(nums[l] < target) l++
    }
    return l
};