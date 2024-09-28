function optimizedFindMajority(array){
    const pairMap = new Map();
    let maxCount = Math.ceil(array.length / 2);;

    for(let num of array){
        if(pairMap.has(num)){
            let newCount = pairMap.get(num) + 1;
            pairMap.set(num, newCount);
        }else{
            pairMap.set(num, 1);
        }   
        if(pairMap.get(num) >= maxCount){
            return num;
        }
        

    }  

}

console.log(optimizedFindMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(optimizedFindMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(optimizedFindMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(optimizedFindMajority([5, 5, 5]) === 5);