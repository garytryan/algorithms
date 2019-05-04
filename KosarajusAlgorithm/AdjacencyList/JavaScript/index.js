const findStronglyConnectedComponents = edges => {
  /*
    COMPUTE NODES

    Since we are given an adjacency list representation of a graph,
    it is faster to do this pre-processing step where we compute
    each node's adjacent nodes.

    This gets us contant time look up of a nodes adjacent nodes duing the
    depth first trversals.
  */
  const nodes = []

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    const [head, tail] = edge

    // Adjacent nodes for the forward graph
    if (nodes[head]) {
      nodes[head][0].push(tail)
    } else {
      nodes[head] = [[tail], []]
    }

    // Adjacent nodes for the reverse graph
    if (nodes[tail]) {
      nodes[tail][1].push(head)
    } else {
      nodes[tail] = [[], [head]]
    }
  }

  const sortedNodes = []
  let visited = []

  /*
    First depth first search to sorts the nodes topologically.

    An iterative depth first search is used so as to avoid stack
    overflows when analysing large graphs
  */
  for (let i = nodes.length - 1; 1 < i; i--) {
    const stack = [i]

    while (stack.length) {
      const node = stack[stack.length - 1]

      if (visited[node] === 2) {
        stack.pop()
        continue
      }

      if (visited[node] === 1) {
        visited[node] = 2
        sortedNodes.push(stack.pop())
        continue
      }

      visited[node] = 1

      const adjacent = nodes[node][1]
        .filter(adjacent => !visited[adjacent])

      if (adjacent.length) {
        adjacent.forEach(node => stack.push(node))
      } else {
        visited[node] = 2
        sortedNodes.push(stack.pop())
      }
    }
  }

  visited = []
  const components = []

  /*
    Second depth first search to compute the components.

    Again, an iterative DFS is used to avoid stack overflow
    when analyzing large graphs.
  */
  while (sortedNodes.length) {
    const stack = [sortedNodes.pop()]
    let component = []

    while (stack.length) {
      const node = stack[stack.length - 1]

      if (visited[node]) {
        stack.pop()
        continue
      }

      visited[node] = true
      component.push(node)

      nodes[node][0]
        .filter(adjacent => !visited[adjacent])
        .forEach(node => stack.push(node))
    }

    if (component.length) {
      components.push(component)
    }
    component = []
  }

  return components
}

const graph = [
  [0, 1],
  [0, 2],
  [1, 3],
  [3, 2],
  [3, 0]
]

console.log(findStronglyConnectedComponents(graph))