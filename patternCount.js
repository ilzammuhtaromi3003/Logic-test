//Soal B, pattern count

function pattern_count(text, pattern) {
    if (pattern.length === 0) return 0;
    
    let count = 0;
    let lastIndex = -1;
    while ((lastIndex = text.indexOf(pattern, lastIndex + 1)) !== -1) {
        count++;
    }
    return count;
}

console.log(pattern_count("palindrom", "ind")); // Output: 1
console.log(pattern_count("abakadabra", "ab")); // Output: 2
console.log(pattern_count("hello", "")); // Output: 0
console.log(pattern_count("ababab", "aba")); // Output: 2
console.log(pattern_count("aaaaaa", "aa")); // Output: 5
console.log(pattern_count("hell", "hello")); // Output: 0
