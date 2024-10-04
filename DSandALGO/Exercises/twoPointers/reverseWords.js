function reverseWords(str){
    let arrStr = str.split(" ");
    let start = 0;
    let end = arrStr.length - 1;

    while(start <= end){
        arrStr[start] = arrStr[start].split("");
        arrStr[start].reverse();
        arrStr[start] = arrStr[start].join().replace(/,/g, "");
        start++;
    };

    return arrStr.join(" ");

    
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");