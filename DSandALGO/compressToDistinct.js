function compressToDistinct(array){
    let reader = 1;
    let writer = 0;
    let counter = 0;
    if(array.length === 1){
        return 1;
    }
    while(writer < array.length && reader < array.length){
        if(array[reader] !== array[writer]){
            array[reader] = array[writer];
            reader++;
        }else if(array[reader] === array[writer]){
            writer--;
        }
    }

    while(reader < array.length){
        array[reader] = "_";
        reader++;
    }

    return array.indexOf("_");

}


function testCompressToDistinct(array, expectedLength) {
    const originalReference = array;
    const resultLength = compressToDistinct(array);
    const isSameObject = originalReference === array;
    const isLengthCorrect = resultLength === expectedLength;
    const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);
  
    return isSameObject && isLengthCorrect && isModifiedCorrectly;
  }
  
  console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
  console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
  console.log(testCompressToDistinct([0], 1));
  console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
  console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));
  
