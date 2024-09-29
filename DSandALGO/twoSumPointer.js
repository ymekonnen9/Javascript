function twoSumPointer(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;
    
    while(start < end){
        const currentSum = sortedArray[start] + sortedArray[end];
        if(currentSum === target){
            return [sortedArray[start], sortedArray[end]];
        }else if(currentSum < target){
            start++;
        }else{
            end--;
        }
    }

    return null;
}

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(twoSumPointer(nums1, target1)); 

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(twoSumPointer(nums2, target2));