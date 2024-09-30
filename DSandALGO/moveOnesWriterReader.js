function moveOnes(array){
    let reader = 0;
    let writer = 0;

    while(reader < array.length){
        if(array[reader] !== 1){
            array[writer] = array[reader];
            writer++;
        }

        reader++;
    }

    while(writer < array.length){
        array[writer] = 1;
        writer++;
    }

    return array;
}