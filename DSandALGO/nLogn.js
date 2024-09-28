function binarySearch(sortedarray, target){
    let start = 0;
    let end = sortedarray.length - 1;

    while(start <= end){
        let mid = Math.floor((strat + end) / 2);

        if(sortedarray[mid] === target){
            return mid;
        }else if(sortedarray[mid] < target){
            start = mid + 1;
        }else{
            end = mid -1;
        }
    }

    return -1;
}

function serachMultipleArrays(listOfarrays, target){
    for(let i = 0; i < listOfarrays.length; i++){
        if(binarySearch(listOfarrays[i], target)){
            console.log("Target found");
            return -1;
        }else{
            console.log("Target not found");
        }
    }
}