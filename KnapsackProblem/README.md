# Knapsack Problem

Given a knapsack of capacity C, and a set of item with weight W and value V.
Choose a subset of items which sum to the highest value, where the combined
weight does not exceed the capacity of the knapsack.

- in O(cn) space
- in O(cn) time complexity

# Example

```
  items = [
    { weight: 3, value: 2 },
    { weight: 1, value: 2 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 },
    { weight: 2, value: 3 }
  ]

  capacity = 10

  knapsack(items, capacity) == [
    { weight: 1, value: 2 },
    { weight: 4, value: 5 },
    { weight: 2, value: 3 }
  ]
```