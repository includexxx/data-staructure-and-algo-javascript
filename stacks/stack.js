class Node {
    constructor(data) {
        this.data = data
        this.prev = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(data) {
        let new_node = new Node(data)
        new_node.prev = this.top
        this.top = new_node
        this.size++
    }

    pop() {
        if (this.top === null) {
            return null
        } else {
            let cur_data = this.top.data
            this.top = this.top.prev
            this.size--
            return cur_data

        }
    }
    peek() {
        return this.top === null ? null : this.top.data
    }
}

let stack = new Stack()

stack.push(11)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(JSON.stringify(stack))
console.log(stack.pop())
console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())

