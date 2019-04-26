const findStronglyConnectedComponents = graph => {
  const nodes = graph.nodes.map(node => ({ node, visited: false }));

  let order = 1;
  let root = nodes[0];

  while (root) {
    const reverseDepthFirstSearch = root => {
      if (root.visited) {
        return;
      }

      root.visited = true;
      root.order = order++;
      const rootIndex = graph.nodes.indexOf(root.node);

      graph.edges
        .filter(([_, head]) => head === rootIndex)
        .map(([tail, _]) => tail)
        .map(nodeIndex => nodes[nodeIndex])
        .forEach(reverseDepthFirstSearch);
    };

    reverseDepthFirstSearch(root);

    root = nodes.find(({ visited }) => !visited);
  }

  nodes.forEach(node => (node.visited = false));

  const components = [];
  root = nodes.find(({ order }) => order === nodes.length);
  while (root) {
    const component = [];

    const depthFirstSearch = root => {
      if (root.visited) {
        return;
      }

      root.visited = true;
      const nodeIndex = graph.nodes.indexOf(root.node);
      component.push(root.node);

      graph.edges
        .filter(([head, _]) => head == nodeIndex)
        .map(([_, tail]) => tail)
        .map(nodeIndex => nodes[nodeIndex])
        .forEach(depthFirstSearch);
    };

    depthFirstSearch(root);

    components.push(component);

    root = nodes
      .filter(({ visited }) => !visited)
      .sort((A, B) => A.order - B.order)
      .pop();
  }

  return components;
};

const graph = {
  nodes: ["A", "B", "C", "D"],
  edges: [[0, 1], [1, 2], [2, 0], [0, 3], [2, 3]]
};

console.log(findStronglyConnectedComponents(graph));
