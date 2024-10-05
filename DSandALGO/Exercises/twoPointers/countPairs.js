function countPairs(sortedArray, target){

    let anchor = 0;
    let result = [];
    while(anchor < sortedArray.length - 1){
        let runner = anchor + 1;

        while(runner < sortedArray.length){
            let sum = sortedArray[anchor] + sortedArray[runner];
            if(sum > target){
                result.push((sortedArray[anchor], sortedArray[runner]));
              }
        runner++;
    }
    anchor++;
    }

    return result.length;
}


console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs