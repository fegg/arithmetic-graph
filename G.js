class G {
    constructor(V) {
        this.V = V;
        this.T = [];
        this.E = 0;
        this.visited = [];

        for (let v = 0; v < this.V; ++v) {
            this.T[v] = [];
            this.T[v].push(-1);
        }

        this.defined = s => s !== void 0;
    }
    input(v, w) {
        this.T[v].push(w);
        this.T[w].push(v);

        this.E++;

        return this;
    }
    output() {
        console.table(this.T);
    }
    dfs(v) {
        this.visited[v] = true;

        if (this.defined( this.T[v] )) {
            console.log('老孙到此一游：' + v);
        }

        this.T[v].forEach(t => {
            if (t !== -1 && !this.visited[t]) {
                this.dfs(t);
            }
        });
    }
    bfs(node) {
        this.visited[node] = true;

        var queue = [];
        queue.push(node);
        while(queue.length > 0) {
            var v = queue.shift();
            if(this.defined( this.T[v] )) {
                console.log('老孙到此一游：' + v);
            }

            this.T[v].forEach(t => {
                if(t !== -1 && !this.visited[t]) {
                    this.visited[t] = true;
                    queue.push(t);
                }
            });
        }
    }
}








