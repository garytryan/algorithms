# TopologicalSort

Given a directed graph. Sort the nodes topologically.

- in O(1) space
- in O(m+n) time complexity

# Example

```
  graph = {
    nodes: ['A', 'B', 'C', 'D'],
    edges: [[1, 0], [1, 2], [2, 3]]
  }

  sortTopologically(graph) == ['B', 'A', 'C', 'D']
```