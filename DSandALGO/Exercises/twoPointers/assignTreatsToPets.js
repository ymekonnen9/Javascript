function assignTreats(appetite, treats){
    appetite.sort();
    treats.sort();

    let appt = 0;
    let tret = 0;
    let satissfied = 0;
    while(appt < appetite.length && tret < treats.length){
        if(appetite[appt] <= treats[tret]){
            appt++;
            satissfied++;
        }
        tret++;
    }

    return satissfied;

}




console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);