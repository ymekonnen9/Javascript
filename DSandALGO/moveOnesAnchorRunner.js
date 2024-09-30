function moveOnes(array){
    let anchor = 0;
    let runner = 0;

    while(runner < array.length){
        if(array[runner] !== 1){
            [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
            anchor++;
        }
        runner++;
    }

    return array;
}