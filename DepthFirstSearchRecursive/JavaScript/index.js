const depthFirstSearch = (root, id) => {
  if (root.id === id) {
    return root;
  }

  let index = 0;
  let found = null;
  while (index < root.children.length && found === null) {
    const node = depthFirstSearch(root.children[index], id);

    if (node) {
      return node;
    }

    index++;
  }
};

const root = {
  id: "A",
  value: 1,
  children: [
    {
      id: "B",
      value: 2,
      children: [
        {
          id: "C",
          value: 4,
          children: []
        },
        {
          id: "D",
          value: 5,
          children: []
        }
      ]
    },
    {
      id: "E",
      value: 3,
      children: [
        {
          id: "F",
          value: 6,
          children: []
        },
        {
          id: "G",
          value: 7,
          children: []
        }
      ]
    }
  ]
};

console.log(depthFirstSearch(root, "C"));
