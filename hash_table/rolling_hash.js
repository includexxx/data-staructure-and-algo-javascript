let base = 13;
let mod = 131071;

function _hash(str) {
    let len = str.length;
    let hval = 0;
    for (let i = 0; i < len; i++) {
        hval = ((hval * base) + (str.charCodeAt(i)-96));
       
    }
    return hval
}

function findSubStr(str1, str2) {
    const len = str2.length;
    let arr = new Array(len + 10);
    let hval = 0;
    for (let i = 0; i < len; i++) {
        hval = ((hval * base) + (str2.charCodeAt(i)-96));
        arr[i] = hval;
    }
    let bz = 1;
    const len1 = str1.length;
    for (let i = 0; i < len1; i++) bz = bz * base;
    const hstr1 = _hash(str1);
    
    for (let i = 0; i < len; i++) {
        let r = arr[(i + len1) - 1];
        let l = (i === 0 ? 0 : arr[i - 1]);
        if (r - l*bz === hstr1) return i + 1;
    }
    return undefined;
}

let pos = findSubStr("abc", "dbcabcxxxabcxxxx")
console.log(pos)