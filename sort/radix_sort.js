
function getDigit(num, pos) {
    num = Math.abs(num)
    pos--;
    while (pos>=0) {
        num = parseInt(num / 10);
        pos--;
    }
    return num % 10;
}

function countDigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigit(num) {
    let maxDigit = -1;
    for (let i = 0; i < num.length; i++) {
        maxDigit = Math.max(maxDigit, countDigit(Math.abs(num[i])));
    }
    return maxDigit;
}

function radix_sort(num) {
    let maxDigit = mostDigit(num);
    console.log(maxDigit);
    for (let k = 0; k < maxDigit; k++) {
        let bucket = [];
        for (let j = 0; j < 10; j++) bucket.push([]);
        for (let i = 0; i < num.length; i++) {
            let index = getDigit(num[i], k) ;
            bucket[index].push(num[i])
        }
        console.log(bucket)
        num = [].concat(...bucket) ;
    }

    return num ;
}

console.log(radix_sort([1234, 19345, 33, 22, 5,1]))