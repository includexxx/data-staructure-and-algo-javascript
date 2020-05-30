class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        let new_node = new Node(data);
        if (this.first === null) {
            this.first = this.last = new_node;
        } else {
            this.last.next = new_node;
            this.last = new_node;
        }
    }
    dequeue() {
        if (this.first === null) return null;
        let temp = this.first.data ;
        this.first = this.first.next;
        return temp ;
    }
    peek() {
        return this.first === null ? null : this.first.data;
    }
}

const queue = new Queue()

queue.enqueue(100)
console.log(queue.dequeue())