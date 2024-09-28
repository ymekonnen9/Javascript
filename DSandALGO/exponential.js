function fibbonaci(num){
    
    if(num <= 1){
        return 1;
    }else{
        return fibbonaci(num-2) + fibbonaci(num -1);
    }
}