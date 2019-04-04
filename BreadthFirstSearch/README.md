# Given an graph, find a node using breadth first search.
- in O(V) space
- in O(V+E) time complexity

*V = vertices, E = edges*

### Example

```
    graph = {
      vertices: [
        'A',
        'B',
        'C',
        'D'
      ],

      edges: [
        [1, 2],
        [2],
        [3],
      ]
    }

    depthFirstSearch(graph, 'D') == true
```
