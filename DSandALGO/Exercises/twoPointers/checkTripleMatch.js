function checkTripleMatch(sortedArray){
    let anchor = 0;
    let found = false;

    while(anchor < sortedArray.length - 1){
        let runner = 1;
        while(runner < sortedArray.length){
            if(sortedArray[runner] === sortedArray[anchor] * 3){
                found = true;
            }

            if(sortedArray[anchor] % 3 ===0 && sortedArray[runner] === sortedArray[anchor] / 3){
                found = true;
            }

            runner++;
        }
        anchor++;
    }

    return found;
}





console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);