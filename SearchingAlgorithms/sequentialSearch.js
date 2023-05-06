function sequentialSearch(arr, x) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
const arr = [3, 6, 1, 7, 8, 4, -5];
const x = 8;
const index = sequentialSearch(arr, x);
if (index !== -1) {
    console.log(`${x} is found at index ${index}`);
} else {
    console.log(`${x} is not found in the array`);
}
