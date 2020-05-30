function binary_search(arr, item, low, high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) return mid + 1;
    if (low >= high) return -1;
    if (item <= arr[mid]) {
        return binary_search(arr, item, low, mid - 1) ;
    } else {
        return binary_search(arr, item, mid + 1, high) ;
    }

}

let arr = [2, 3, 44, 55, 66, 88, 909, 1000];
console.log(binary_search(arr, 1, 0, arr.length - 1))

