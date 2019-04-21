findShortestPath = (graph, start, end) => {
  const nodes = graph.nodes.map(node => ({
    node,
    visited: node === start,
    distance: node === start ? 0 : Infinity,
    path: []
  }));

  let currentNodeIndex = nodes.findIndex(({ node }) => node === start);

  while (graph.nodes[currentNodeIndex] !== end) {
    graph.edges
      .filter(({ head }) => head === currentNodeIndex)
      .forEach(({ head, tail, weight }, index) => {
        const distance = nodes[head].distance + weight;

        if (distance < nodes[tail].distance) {
          nodes[tail].distance = distance;
          nodes[tail].path = nodes[head].path.concat(nodes[head].node);
        }
      });

    const smallest = nodes
      .filter(({ visited }) => !visited)
      .sort((A, B) => B.distance - A.distance)
      .pop();

    smallest.visited = true;
    currentNodeIndex = nodes.findIndex(node => node === smallest);
  }

  return nodes[currentNodeIndex].path.concat(end);
};

const graph = {
  nodes: ["A", "B", "C", "D", "E", "F", "G"],
  edges: [
    { head: 0, tail: 1, weight: 4 },
    { head: 0, tail: 2, weight: 3 },
    { head: 0, tail: 4, weight: 7 },
    { head: 1, tail: 3, weight: 5 },
    { head: 2, tail: 1, weight: 6 },
    { head: 2, tail: 3, weight: 11 },
    { head: 2, tail: 4, weight: 8 },
    { head: 3, tail: 4, weight: 2 },
    { head: 3, tail: 5, weight: 2 },
    { head: 3, tail: 6, weight: 10 },
    { head: 4, tail: 6, weight: 5 },
    { head: 5, tail: 6, weight: 3 }
  ]
};

console.log(findShortestPath(graph, "A", "F"));
