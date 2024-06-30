class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }

    return true;
  }
}

var maxNumEdgesToRemove = function(n, edges) {
  // Initialize Union-Find structures for Alice and Bob
  let ufAlice = new UnionFind(n + 1);
  let ufBob = new UnionFind(n + 1);

  let edgesUsed = 0;

  // Type 3 edges first
  for (let [type, u, v] of edges) {
    if (type === 3) {
      if (ufAlice.union(u, v)) {
        ufBob.union(u, v);
        edgesUsed++;
      }
    }
  }

  // Type 1 edges for Alice
  for (let [type, u, v] of edges) {
    if (type === 1) {
      if (ufAlice.union(u, v)) {
        edgesUsed++;
      }
    }
  }

  // Type 2 edges for Bob
  for (let [type, u, v] of edges) {
    if (type === 2) {
      if (ufBob.union(u, v)) {
        edgesUsed++;
      }
    }
  }

    // Check if both Alice and Bob can traverse the entire graph
  const canTraverse = (uf, n) => {
    let root = uf.find(1);
    for (let i = 2; i <= n; i++) {
      if (uf.find(i) !== root) return false;
    }
    return true;
  };

  if (canTraverse(ufAlice, n) && canTraverse(ufBob, n)) {
    return edges.length - edgesUsed;
  } else {
    return -1;
  }
};
