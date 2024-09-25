function fibb(num){
    if(num < 2){
        return 1;
    }else{
       return fibb(num - 2) + fibb(num - 1);
    }
}

for(let i = 0; i <10; i++){
    console.log(fibb(i));
}