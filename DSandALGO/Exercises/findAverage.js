function findAverages(arr, k){

    let anchor = 0;
    let result = [];

    while(anchor <= arr.length-k){
        let runner = anchor;
        let sum = 0;

        while(runner< anchor + k){
            sum += arr[runner];
            runner++;
        }

        result.push(sum/k)

        anchor++;

    }

    return result;

}



console.log(findAverages([1, 2, 3, 4, 5, 6], 3));
console.log(findAverages([1, 2, 3, 4, 5], 2));
console.log(findAverages([10, 20, 30, 40, 50], 4));
console.log(findAverages([5, 5, 5, 5, 5], 1));
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));