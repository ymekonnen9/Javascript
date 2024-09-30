const isConsonant = (char)=>{
    return "bcdfghjklmnpqrstvwxyz".includes(char.toLowerCase());
}

function reverseConsonants(str){
    let start = 0;
    let end = str.length - 1;
    let strarr = str.split("");


    while(start < end){
        if(!isConsonant(strarr[start])){
            start++;
            continue;
        }else if(!isConsonant(strarr[end])){
            end--;
            continue;
        }

        [strarr[start], strarr[end]] = [strarr[end], strarr[start]];
        start++;
        end--;
    }

    return strarr.join("");

}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");