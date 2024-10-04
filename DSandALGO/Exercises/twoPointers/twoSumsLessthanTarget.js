function twoSumLessThanTarget(arr, target){
    let anchor = 0;

    let max = 0;
    let sum;

    while(anchor < arr.length - 1){
        let runner = anchor + 1;
        while(runner < arr.length){
            sum = arr[anchor] + arr[runner];
            if(sum > max && sum < target){
                max = sum;
            }
            runner++;
        }
        anchor++;
    }

    if(max){
        return max;
    }else{
        return -1;
    }
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
