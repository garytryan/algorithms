# Dijkstra's Shortest Path

Given a weighted graph, find the shortest path from a starting node to an end node.

- in O(n) space
- in O(m log n) time complexity

# Example

```
  graph = [
    [0, 1, 4],
    [0, 2, 3],
    [0, 4, 7],
    [1, 3, 5],
    [2, 1, 6],
    [2, 3, 11],
    [2, 4, 8],
    [3, 4, 2],
    [3, 5, 2],
    [3, 6, 10],
    [4, 6, 5],
    [5, 6, 3],
  ]

  findShortestPath(graph, 0, 5) == [0, 1, 3, 5]
```