function findNextLetter(chars, key) {
    let low = 0;
    let high = chars.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (chars[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return chars[low % chars.length];
}





console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
