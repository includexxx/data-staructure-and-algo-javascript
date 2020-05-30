class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
    }
}

class Stack {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        let new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.prev = this.tail;
            this.tail = new_node;
        }
        this.size++;
    }

    pop() {
        if (this.tail === null) return null;
        this.tail = this.tail.prev;
        this.size--;

    }

    peak() {
        return this.tail === null ? null : this.tail.data
    }
}


const s = new Stack() ;
s.push(122);
s.push(33)
s.push(1)
console.log(s)