# Kosarajus Algorithm

Implement Kosaraju's algorithm to find the strongly connected components in a directed graph.

- in O(1) space
- in O(n + m) time complexity

# Example
```
  graph = {
    node: ['A', 'B', 'C', 'D'],
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [3, 2],
      [3, 0]
    ]
  }

  findStronglyConnectedComponents(graph) = [[ 'A', 'B', 'D' ], ['C']]
```