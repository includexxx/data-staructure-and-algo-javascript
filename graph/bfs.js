class Graph {
    constructor() {
        this.al = {};
    }
    addVertex(v) {
        if (!this.al[v]) this.al[v] = [];
    }
    addEdge(v1, v2) {
        this.al[v1].push(v2);
        this.al[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.al[v1] = this.al[v1].filter((v) => v !== v2);
        this.al[v2] = this.al[v2].filter((v) => v !== v1);
    }
    removeVertex(v) {
        while (this.al[v].length) {
            const connected = this.al[v].pop();
            this.removeEdge(v, connected);
        }
        delete this.al[v];
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        let visited = {};
        visited[start] = true;

        while (queue.length) {
            let current = queue.shift();
            result.push(current);

            this.al[current].forEach(element => {
                if (!visited[element]) {
                    queue.push(element);
                    visited[element] = true;
                }
            });

        }
        return result ;

    }

}


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.bfs('A'))
