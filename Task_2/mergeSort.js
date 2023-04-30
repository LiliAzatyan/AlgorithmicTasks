function merge(left, right) {
    let array = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())  
        } else {
            array.push(right.shift()) 
        }
    }
    return [ ...array, ...left, ...right ]
}

function mergeSort(array) {
  const mid = array.length / 2
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, mid)
  return merge(mergeSort(left),mergeSort(array))
}

array = [3, 5, 1, 6, 9, 8, 2];
console.log(mergeSort(array));
