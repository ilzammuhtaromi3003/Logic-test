//soal C, fungsi yang menghitung banyak nya huruf yang user masukan dalam 1x inputan

function countLetters(input) {
    const count = {};
    for (let char of input) {
        if (/[a-zA-Z]/.test(char)) {
            char = char.toUpperCase();
            count[char] = (count[char] || 0) + 1;
        }
    }
    return Object.fromEntries(Object.entries(count).sort());
}

console.log(countLetters("Hello World")); // Output: { "H": 1, "e": 1, "l": 3, "o": 2, "r": 1, "W": 1 }
console.log(countLetters("Bismillah")); // Output: { "B": 1, "i": 2, "s": 1, "m": 1, "l": 2, "a": 1, "h": 1 }
console.log(countLetters("MasyaAllah")); // Output: { "A": 1, "M": 1, "a": 3, "h": 1, "l": 2, "s": 1, "y": 1 }
