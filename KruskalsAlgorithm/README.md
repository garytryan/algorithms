# Kruskals Minimum Spanning Tree

Given a graph find the a subset of edges which connect all vertices, without cycles and with minimum edge weight.
Implement Prim's minimum spanning tree algortithm to find the solution.

- in O(1) space
- in O(m+n) time complexity

# Example

```
  graph = [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 1],
  ]

  minimalSpanningTree(graph) == [[0, 1, 1], [1, 2, 1]]
```