const topologicalSort = graph => {
  const orderedNodes = [];
  const visited = new Set();

  const subroutine = root => {
    if (visited.has(root)) {
      return;
    }

    visited.add(root);

    graph.edges
      .filter(([head, _]) => head === root)
      .forEach(([_, tail]) => {
        subroutine(tail);
      });

    orderedNodes.unshift(graph.nodes[root]);
  };

  let index = 0;
  while (index < graph.nodes.length) {
    subroutine(index);
    index++;
  }

  return orderedNodes;
};

const graph = {
  nodes: ["A", "B", "C", "D"],
  edges: [[1, 0], [1, 2], [2, 3]]
};

console.log(topologicalSort(graph));
