function oddLengths(array){
    let arrayLength = [];
    array.map(arr=>{
       arrayLength.push(arr.length);
    })

    let finArray = arrayLength.filter(arr=> arr%2 !==0)

   return finArray;
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];





console.log(oddLengths(arr));