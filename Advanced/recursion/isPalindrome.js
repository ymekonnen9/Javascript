function isValidPalindrome(str){

    if(str.length < 2){
        return true;
    }

    return str[0] === str[str.length - 1] && isValidPalindrome(str.slice(0, str.length - 1));
}