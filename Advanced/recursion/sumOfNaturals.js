function sumOfnumbers(num){
    if(num <= 0){
        return 0;
    }

    return num + sumOfnumbers(num - 1);

}