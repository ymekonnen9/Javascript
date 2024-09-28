function binarySearch(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(sortedArray[mid] === target){
            return mid;
        }else if(sortedArray[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }

    }
    return -1;

}