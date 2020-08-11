class graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!(this.adjacencyList[vertex])) 
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            this.removeVertex(vertex, this.adjacencyList[vertex].pop());
        }
        delete this.adjacencyList[vertex];
    }
}