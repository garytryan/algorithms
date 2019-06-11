const sort = (a, predicate) => a.slice().sort(predicate)
const increasing = (a, get) => sort(a, (A, B) => get(A) - get(B))

const getHead = edge => edge[0]
const getTail = edge => edge[1]
const getWeight = edge => edge[2]

const edgeHasVertex = (e, v) => getHead(e) === v || getTail(e) === v

const isCycle = (tree, edge) => {
  let index = 0;

  let head = false;
  let tail = false;

  while (!(head && tail) && index < tree.length) {
    const e = tree[index]

    head = head ? head : edgeHasVertex(e, getHead(edge))
    tail = tail ? tail : edgeHasVertex(e, getTail(edge))

    index++
  }

  return head && tail;
}


const minimalSpanningTree = graph =>
  increasing(graph, getWeight)
    .reduce((tree, edge) => {
      !isCycle(tree, edge) && tree.push(edge)
      return tree
    }, [])

graph = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 1],
]

const MST = minimalSpanningTree(graph)

console.log(MST)