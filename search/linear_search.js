let linear_srarch = function(arr, item){
    for(let i =0 ;i<arr.length;i++){
        if(arr[i] === item) return i+1 ;
    }
    return -1 ;
}


console.log(linear_srarch([2,3,22,11,445,1,3], 3))