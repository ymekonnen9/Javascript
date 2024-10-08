function isSquareInteger(num){
    let start = 1;
    let end = num;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(mid ** 2 === num){
            return true;
        }else if(mid ** 2 < num){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }



    return false;
}


console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.