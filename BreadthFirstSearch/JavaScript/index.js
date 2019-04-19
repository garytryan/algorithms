const graph = {
  vertices: ["A", "B", "C", "D"],

  edges: [[1, 2], [2], [3]]
};

const breadthFirstSearch = (graph, value, startVertex = 0) => {
  let verticesToVisit = [graph.vertices[startVertex]];

  const verticesVisited = new Set();

  let isFound = false;

  while (verticesToVisit.length) {
    const foundVertex = verticesToVisit.find(vertex => vertex === value);

    if (foundVertex) {
      isFound = true;
      break;
    }

    verticesToVisit.forEach(vertex => verticesVisited.add(vertex));

    verticesToVisit = verticesToVisit
      .reduce(
        (verticesToVisit, vertex) =>
          verticesToVisit.concat(
            graph.edges[graph.vertices.indexOf(vertex)].map(
              edge => graph.vertices[edge]
            )
          ),
        []
      )
      .filter(vertex => !verticesVisited.has(vertex));
  }

  return isFound;
};

console.log(breadthFirstSearch(graph, "D"));
