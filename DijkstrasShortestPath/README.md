# Dijkstra's Shortest Path

Given a weighted graph, find the shortest path from a starting node to an end node.

- in O(n) space
- in O(m log n) time complexity

# Example

```
  graph = {
    nodes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
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
      { head: 5, tail: 6, weight: 3 },x
    ]
  }

  findShortestPath(graph, 'A', 'F') == ['A', 'B', 'D', 'F']
```