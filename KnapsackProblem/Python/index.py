def knapsack(items, capacity):
    matrix = [
        [0 for _ in range(capacity + 1)]
    ]

    def computeBestValue(item, capacity):
        previousBest = matrix[index][capacity]

        if item["weight"] <= capacity:
            return max(
                previousBest,
                item["value"] + matrix[index][max(capacity - item["weight"], 0)]
            )

        return previousBest

    for index, item in enumerate(items):
        matrix.append([
            computeBestValue(item, c)
            for c
            in range(capacity + 1)
        ])

    knapsack = []
    row = len(matrix) - 1

    while capacity > 0:
        if matrix[row][capacity] != matrix[row - 1][capacity]:
            capacity -= items[row - 1]["weight"]
            knapsack.append(items[row - 1])
        row -= 1

    return knapsack


items = [
  {"weight": 3, "value": 2},
  {"weight": 1, "value": 2},
  {"weight": 3, "value": 4},
  {"weight": 4, "value": 5},
  {"weight": 2, "value": 3},
]

print(knapsack(items, 7))
