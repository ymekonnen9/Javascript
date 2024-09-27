// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

function findPair(arra){
    let resultNumbers = [];

    for(let i=0; i< arra.length; i++){
        for(let j= i+1; j< arra.length; j++){
            if(arra[i]+arra[j] === 10){
                resultNumbers.push(arra[i]);
                resultNumbers.push(arra[j]);
            }
        }
    }

    return resultNumbers;
}

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]