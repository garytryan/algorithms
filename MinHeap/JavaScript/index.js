const createHeap = () => {
  const nodes = []

  const swap = (a, b) => {
    const temp = nodes[a]
    nodes[a] = nodes[b]
    nodes[b] = temp
  }

  const getParent = index => {
    if (index < 1) return 0

    if (index % 2 === 0) return (index / 2) - 1

    return (index - 1) / 2
  }

  const getLeftChild = index => {
    return index * 2 + 1
  }

  const getRightChild = index => {
    return index * 2 + 2
  }

  const bubbleUp = index => {
    let parent = getParent(index)

    while (nodes[parent] > nodes[index]) {
      swap(index, parent)

      index = parent
      parent = getParent(index)
    }
  }

  const bubbleDown = index => {
    let leftChild = getLeftChild(index)
    let rightChild = getRightChild(index)

    let shouldBubbleDown =
      nodes[leftChild] < nodes[index]
      || nodes[rightChild] < nodes[index]

    while (shouldBubbleDown) {
      if (nodes[leftChild] < nodes[index]) {
        swap(leftChild, index)
        index = leftChild
      } else {
        swap(rightChild, index)
        index = rightChild
      }

      leftChild = getLeftChild(index)
      rightChild = getLeftChild(index)

      shouldBubbleDown =
        nodes[leftChild] < nodes[index]
        || nodes[rightChild] < nodes[index]
    }
  }

  return {
    nodes,

    insert: value => {
      nodes.push(value)
      bubbleUp(nodes.length - 1)
    },

    extract: () => {
      swap(0, nodes.length - 1)
      const node = nodes.splice(nodes.length - 1)[0]

      bubbleDown(0)

      return node
    },

    min: () => {
      return nodes[0]
    }
  }
}

const heap = createHeap()
heap.insert(5)
heap.insert(8)
heap.insert(3)
heap.insert(2)
heap.insert(1)

console.log(heap.nodes)


console.log(heap.extract(), heap.nodes)
console.log(heap.extract(), heap.nodes)
console.log(heap.extract(), heap.nodes)
console.log(heap.extract(), heap.nodes)
console.log(heap.extract(), heap.nodes)

