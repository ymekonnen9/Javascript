function checkTripleMatch(sortedArray){
    let mySet = new Set();

    for(let ele of sortedArray){
        
        if(mySet.has(ele*3 ) || (ele % 3 === 0 && mySet.has(ele / 3))){
            return true;
        }

        mySet.add(ele);
    }

    return false;
}



console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);