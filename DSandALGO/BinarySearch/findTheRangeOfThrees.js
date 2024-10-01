function leftMostIndex(sortedArray){
    let start = 0;
    let end = sortedArray.length -1;
    let leftIndex = -1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(sortedArray[mid] === 3){
            leftIndex = mid;
            end = mid -1;
        }else if(sortedArray[mid] < 3){
            start = mid  + 1;
        }else{
            end = mid - 1;
        }
    }
    return leftIndex;
}



function rightMostIndex(sortedArray){
    let start = 0;
    let end = sortedArray.length - 1;
    let rightIndex = -1;

    while(start < end){
        let mid = Math.floor((start + end) / 2);

        if(sortedArray[mid] === 3){
            rightIndex = mid;
            start = mid + 1;
        }else if(sortedArray[mid] < 3){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return rightIndex;
}




function findRangeOfThrees(sortedArray){
    return [rightMostIndex(sortedArray), leftMostIndex(sortedArray)];
}


console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));