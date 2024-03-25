//soal A, mengurutkan array

function sortArray(arr) {
    return arr.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'number') {
            return -1;
        } else if (typeof a === 'number' && typeof b === 'string') {
            return 1;
        } else {
            if (typeof a === 'string' && typeof b === 'string') {
                return a.localeCompare(b);
            } else {
                return a - b;
            }
        }
    });
}

const arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];
console.log(sortArray(arr));
