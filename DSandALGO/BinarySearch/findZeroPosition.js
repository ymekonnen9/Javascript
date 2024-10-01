function findZeroPosition(sortedArray){
    let start = 0;
    let end = sortedArray.length - 1;
    let target = 0;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(sortedArray[mid] === target){
            return mid;
        }else if(sortedArray[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return start;
}

console.log(findZeroPosition([-7, -5, -3, 0, 2])); 
console.log(findZeroPosition([3, 5, 7, 9, 11])); 
console.log(findZeroPosition([-8, -7, -5, -2, -1]))