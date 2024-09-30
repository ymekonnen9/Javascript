function findPair(nums, targe){
    const numMap = new Map();
    const target = targe;

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];

        if(numMap.has(complement)){
            return [complement, nums[i]];
        }

        numMap.set(nums[i], i);
    }

    return null;
}