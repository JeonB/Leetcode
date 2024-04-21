/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
        const graph = new Map();
        for (const [u, v] of edges) {
            if (!graph.has(u)) graph.set(u, []);
            if (!graph.has(v)) graph.set(v, []);
            graph.get(u).push(v);
            graph.get(v).push(u);
        }

        function dfs(node, visited) {
            if (node === destination) {
                return true;
            }
            visited.add(node);
            for (const neighbor of graph.get(node)) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, visited)) {
                        return true;
                    }
                }
            }
            return false;
        }

        const visited = new Set();
        return dfs(source, visited);
    }