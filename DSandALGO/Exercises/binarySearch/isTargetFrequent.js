function isTargetFrequent(sortedArray, target){

    function leftMostIndex(sortedArray, target){
        let start = 0;
        let end = sortedArray.length - 1;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);

            if(sortedArray[mid] < target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }

        return start;
    }


    function rigthMostIndex(sortedArray, target){
        let start = 0;
        let end = sortedArray.length - 1;

        while(start <= end){
            let mid = Math.floor((start + end) / 2);

            if(sortedArray[mid] > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }

        return end;
    }

    let rightMost = rigthMostIndex(sortedArray, target);
    let leftMost = leftMostIndex(sortedArray, target);

    if (rightMost - leftMost + 1 >= 4) {
        return true;
    }

    return false;
}



console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);
