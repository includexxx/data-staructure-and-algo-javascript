class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let node = new Node(value)
        if (this.root === null) {
            this.root = node;
            return;
        }
        this._insert(node, this.root)
    }

    _insert(node, current) {
        if (node.data <= current.data) {
            if (current.left === null) {
                current.left = node;
                return;
            }
            this._insert(node, current.left);
        } else {
            if (current.right === null) {
                current.right = node;
                return;
            }
            this._insert(node, current.right);
        }
    }

    print(curr) {
        if (curr === null) return
        this.print(curr.left)
        console.log(curr.data)
        this.print(curr.right)
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
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


tree.print(tree.root)

console.log(JSON.stringify(tree.root))