function twoSum(nums: number[], target: number): number[] {
    const memo = new Map();
    let i = 0;
    while(i < nums.length){
      let difference = target - nums[i];
      if(memo.has(difference)) return [memo.get(difference),i]
      memo.set(nums[i], i)
      i++
    }
};