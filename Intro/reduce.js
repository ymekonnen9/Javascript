function sumOfSquares(array){
    let sum = array.reduce((a,b)=>{
        return (b*b + a);
    }, 0)

    return sum;
}


let array = [3, 5, 7];
console.log(sumOfSquares(array));