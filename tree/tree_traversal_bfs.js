class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(data) {
        let new_node = new Node(data)
        if (this.root === null) {
            this.root = new_node
            return
        }
        this._insert(this.root, new_node)


    }
    _insert(current, new_node) {
        if (current.data >= new_node.data) {
            if (current.left === null) {
                current.left = new_node
                return
            }
            this._insert(current.left, new_node)
        } else {
            if (current.right === null) {
                current.right = new_node
                return
            }
            this._insert(current.right, new_node)
        }
    }

    print(current) {
        if (current === null) return
        this.print(current.left)
        console.log(current.data)
        this.print(current.right)
    }
    bfs_traversal(current) {
        let queue = []
        let arr = []
        queue.push(current)
        while (queue.length) {
            let front = queue.shift()
            arr.push(front.data)
            if (front.left) queue.push(front.left)
            if (front.right)queue.push(front.right)
        }
        console.log(arr)
    }
}


let tree = new BST()
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);


//tree.print(tree.root)
tree.bfs_traversal(tree.root)

//console.log(JSON.stringify(tree.root))