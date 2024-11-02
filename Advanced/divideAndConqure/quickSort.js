function quickSort(arra){
    let pivot = arra[0];
    let left = 1;
    let right = arra.length - 1;

    while(left <= right){

        while(left <= right && arra[right] > pivot){
            right--;
        }

        while(left <= right && arra[left] < pivot){
            left ++;
        }

        while(left < right){
            [arra[left], arra[right]] = [arra[right], arra[left]];
        }
    }

    [arra[0], arra[right]] = [arra[right], arra[0]];

    return arra;
}

//not completed tho