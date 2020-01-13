const knapsack = (items, capacity) => {
  const memo = []

  items.forEach((item, index) => {
    memo.push([])

    for (let c = 0; c <= capacity; c++) {
      const { weight, value } = item

      if (weight > c) {
        const pv = index === 0
          ? 0
          : memo[index - 1][c]

        memo[index][c] = pv;
        continue;
      }

      const v = index === 0
        ? value
        : memo[index - 1][c - weight] + value

      const pv = index === 0
        ? 0
        : memo[index - 1][c]

      const av = v > pv
        ? v
        : pv

      memo[index][c] = av
    }
  })

  const knapsack = []
  let c = capacity

  for (let i = items.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (memo[i][c] !== 0) {
        knapsack.push(items[i])
      }
      continue;
    }

    if (memo[i][c] !== memo[i - 1][c]) {
      knapsack.push(items[i])
      c -= items[i].weight
    }
  }


  return knapsack
}

const items = [
  { weight: 3, value: 2 },
  { weight: 1, value: 2 },
  { weight: 3, value: 4 },
  { weight: 4, value: 5 },
  { weight: 2, value: 3 }
]

const capacity = 7

console.log(knapsack(items, capacity))