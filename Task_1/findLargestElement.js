
function findLargestElement(array, index, tmp) {
    if (index < array.length) {
        if (array[index] > tmp) {
            tmp = array[index];
        }
        return findLargestElement(arr, ++index, tmp)
    }
    return tmp;
}
const arr = [2, 1, 4, 5, 8];
console.log(findLargestElement(arr, 0, arr[0]));
