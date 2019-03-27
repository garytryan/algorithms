def depthFirstSearch(root, id):
  if root['id'] == id:
    return root

  index = 0
  found = None
  while index < len(root['children']) and found is None:
    node = depthFirstSearch(root['children'][index], id)

    if node is not None:
      return node

    index += 1


root = {
  "id": "A",
  "value": 1,
  "children": [
    {
      "id": "B",
      "value": 2,
      "children": [
        {
          "id": "C",
          "value": 4,
          "children": []
        },
        {
          "id": "D",
          "value": 5,
          "children": []
        }
      ]
    },
    {
      "id": "E",
      "value": 3,
      "children": [
        {
          "id": "F",
          "value": 6,
          "children": []
        },
        {
          "id": "G",
          "value": 7,
          "children": []
        }
      ]
    }
  ]
}

print(depthFirstSearch(root, "C"))