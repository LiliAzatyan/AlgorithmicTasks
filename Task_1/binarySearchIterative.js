function binarySearch(array, element) {
    let first = 0;
    let last = array.length - 1;
    let mid = 0;
    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (element == array[mid]) {
            return mid;
        } else if (element >= array[mid]) {
            first = mid + 1;
        } else if (element < array[mid]){
            last = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 8, 10], 10));