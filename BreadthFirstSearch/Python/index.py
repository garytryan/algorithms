class Graph:
  def __init__(self, nodes = [], edges = []):
    self.nodes = nodes
    self.edges = edges

  def search(self, node):
    queue = [0]
    visited = [0]

    while len(queue) > 0:
      currentEdge = queue.pop()
      currentNode = self.nodes[currentEdge]

      if currentNode == node:
        return currentNode
      else:
        visited.append(currentEdge)

        [
          queue.insert(0, tail)
          for head, tail
          in self.edges
          if head == currentEdge and tail not in visited
        ]

    return None


graph = Graph(
  # nodes
  [
    'A',
    'B',
    'C',
    'D',
    'E'
  ],
  # edges
  [
    (0, 1),
    (1, 0),
    (0, 2),
    (2, 3),
    (3, 4)
  ]
)

print(graph.search('E'))