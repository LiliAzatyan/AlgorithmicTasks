function findSmallest_k_Number(arr, k, i = 0) {
    if (i < arr.length - 1) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] < arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
        return findSmallest_k_Number(arr, k, ++i)
    }
    return arr[k - 1];
}
console.log(findSmallest_k_Number([5, 2, 4], 3));
