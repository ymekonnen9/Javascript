function oddLengths(array){
    let result = array.reduce((a, b)=>
    {
            if(b.length%2 !== 0){
                a.push(b.length);    
            }

            return a;
    }
        ,[])
        
    return result;
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));