function merge_two_array(arr1, arr2) {
    let i = 0;
    let j = 0;
    let new_arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            new_arr.push(arr1[i]);
            i++;
        } else {
            new_arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        new_arr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        new_arr.push(arr2[j]);
        j++;
    }
    return new_arr;

}


function merge_sort(arr){
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left_arr = merge_sort(arr.slice(0, mid));
    let right_arr = merge_sort(arr.slice(mid));
    return merge_two_array(left_arr, right_arr) ;
}

console.log(merge_sort([3,1,33,5,37,100,0,2,11,2,9]))