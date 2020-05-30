class HashTable {
    constructor() {
        this.hashTable = new Array(197);
    }
    _hash(key) {
        let base = 997;
        let hash_value = 0;
        for (let i = 0; i < key.length; i++) {
            let ascii = key.charCodeAt(i);
            hash_value = ((hash_value * base) + ascii) % this.hashTable.length;
        }
        return hash_value;
    }
    set(key, value) {
        const hkey = this._hash(key);
        if (!this.hashTable[hkey]) this.hashTable[hkey] = []
        this.hashTable[hkey].push([key, value])
    }
    get(key) {
        const hkey = this._hash(key);
        if (!this.hashTable[hkey]) return undefined;
        for (let i = 0; i < this.hashTable[hkey].length; i++) {
            if (this.hashTable[hkey][i][0] === key) return this.hashTable[hkey][i][1]
        }

        return undefined;
    }
}


const ht = new HashTable()
ht.set("aaa", 1000)
ht.set("ab", 33)
console.log(ht.get("ab"))
console.log(ht.get("aaa"))
console.log(ht.get("abd"))