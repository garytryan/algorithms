const degreesOfSeperation = (graph, from, to) => {
  const connections = [from];
  const visited = new Set();

  const pathGraph = {};

  while (connections.length) {
    const connection = connections.shift();

    if (connection === to) {
      isFound = true;
      break;
    }

    visited.add(connection);

    graph[connection].forEach(adjacent => {
      if (!visited.has(adjacent)) {
        connections.push(adjacent);

        pathGraph[adjacent] = connection;
      }
    });
  }

  let currentConnection = pathGraph[to];
  let count = 0;

  while (currentConnection !== from) {
    count++;
    currentConnection = pathGraph[currentConnection];
  }

  return count;
};

const network = {
  Min: ["William", "Jayden", "Omar"],
  William: ["Min", "Noam"],
  Jayden: ["Min", "Amelia", "Ren", "Noam"],
  Ren: ["Jayden", "Omar"],
  Amelia: ["Jayden", "Adam", "Miguel"],
  Adam: ["Amelia", "Miguel"],
  Miguel: ["Amelia", "Adam", "Nathan"],
  Noam: ["Nathan", "Jayden", "William"],
  Omar: ["Ren", "Min"],
  Nathan: ["Omar"]
};

console.log(degreesOfSeperation(network, "Min", "Nathan"));
