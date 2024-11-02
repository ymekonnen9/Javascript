function isValidPalindrome(str){
    return isValidPalindromeHelper(str, 0, str.length - 1);
}

function isValidPalindromeHelper(str, start, end){
    if(start <= end){
        return true;
    }

    return str[start] === str[end] && isValidPalindromeHelper(str, start + 1, end - 1);
}