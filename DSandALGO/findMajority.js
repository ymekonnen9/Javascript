function findMajority(array){
    let highestCount = 1;
    let highestValue = array[0];

    for(let i =0; i< array.length; i++){
        let currentMax = 1;
        for(let j = i+1; j< array.length; j++){
            if(array[i] === array[j]){
                currentMax++;
            }
        }

        if(currentMax > highestCount){
            highestCount = currentMax;
            highestValue = array[i]; 
        }
    }

    return highestValue;
}

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);