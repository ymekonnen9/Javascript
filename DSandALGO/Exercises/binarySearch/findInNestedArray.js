function findInNestedArray(arrArr, target){

    let start = 0;
    let end = arrArr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arrArr[mid][0] <= target){
            for(let i = 0; i < arrArr[mid].length; i++){
                if(arrArr[mid][i] === target){
                    return true;
                }else{
                    start = mid + 1;
                }
            }
        }else{
            end = mid - 1;
        }
    }


}



console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.