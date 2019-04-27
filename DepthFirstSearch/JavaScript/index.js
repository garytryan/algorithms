const flatten = array => array.reduce((a, e) => a.concat(e), []);

const depthFirstSearch = (graph, target) => {
  const visited = [];
  const nodes = Array.from(new Set(flatten(graph.edges))).reverse();

  while (nodes.length) {
    const node = nodes.pop();

    if (visited[node]) {
      continue;
    }

    if (node === target) {
      return node;
    }

    visited[node] = true;

    graph.edges
      .filter(([head, _]) => head === node)
      .forEach(([_, tail]) => nodes.push(tail));
  }
};

const graph = {
  edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]
};

console.log(depthFirstSearch(graph, 4));
