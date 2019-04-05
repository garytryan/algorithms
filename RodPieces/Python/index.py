def findTwoRodsToFit(rods, size):
  visitedRods = {}

  for rod in rods:
    remainingSpace = size - rod

    if visitedRods.get(remainingSpace, None) is not None:
      return [rod, visitedRods[remainingSpace]]

    visitedRods[rod] = rod

print(findTwoRodsToFit([1.5, 2.3, 3, 3.2], 5.5))
