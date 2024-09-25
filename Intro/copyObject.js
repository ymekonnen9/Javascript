function copyObj(obj, arr){
    let keys = Object.keys(obj);
    let newObj = {};

    if(arr){
        arr.forEach(element => {
            newObj[element] = obj[element];
        });
    }else{
        Object.assign(newObj, obj);
    }
  
    return newObj;
}



let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);      
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);      