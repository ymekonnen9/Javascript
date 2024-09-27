function substrings(str){
    //since a palindrome atleast has two characters, we need to check and slice the string up until 2 characters upto the end.
    let startIndex = 0;
    let result = [];
    while(startIndex <= str.length-2){
        let endIndex = startIndex + 2;
        while(endIndex <=str.length-2){
            result.push(str.slice(startIndex, endIndex));
            endIndex++;
        }
        startIndex++;
    }

    return result;

}

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}




function palindromeSubstrings(str){
    let returnPalidrome = [];
    // let's get all the substrings first
    let subStrings = substrings(str);

    //iterate thorugh all the subStrings and check if they're palindromes.
    subStrings.forEach(value =>{
        if(isPalindrome(value)){
            returnPalidrome.push(value);
        }
    });

    return returnPalidrome;
}








console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));


console.log(palindromeSubstrings("abcDDcbA"));


console.log(palindromeSubstrings("palindrome"));


console.log(palindromeSubstrings(""));
