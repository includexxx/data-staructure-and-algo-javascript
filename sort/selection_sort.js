function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    console.log(arr);
}

selection_sort([111, 22, 3, 44, 42, 0])