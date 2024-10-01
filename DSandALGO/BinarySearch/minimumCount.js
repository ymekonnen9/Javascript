function negativeCount(sortedArray){
    let start = 0;
    let end = sortedArray.length - 1;
    let rightMostNegativeIndex = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(sortedArray[mid]<0){
            rightMostNegativeIndex = mid;
            start = mid + 1;
        }else if(sortedArray[mid] >= 0){
            end = mid -1;
        }
    }
    return rightMostNegativeIndex+1;
}

function positiveCount(sortedArray){
    let start = 0;
    let end = sortedArray.length - 1;
    let leftMostPositiveIndex = sortedArray.length;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(sortedArray[mid] > 0){
            leftMostPositiveIndex = mid;
            end = mid - 1;
        }else if(sortedArray[mid] <= 0){
            start = mid + 1;
        }
    }
    return sortedArray.length - leftMostPositiveIndex;
}


function minimumCount(sortedArray){
    return Math.min(negativeCount(sortedArray), positiveCount(sortedArray));
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);