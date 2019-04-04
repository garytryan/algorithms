const findTwoRodsToFit = (rods, size) => {
  const visitedRods = {};

  for (let index = 0; index < rods.length; index++) {
    const currentRod = rods[index];
    const remainingSpace = size - currentRod;
    const complementaryRod = visitedRods[remainingSpace];

    if (complementaryRod) {
      return [complementaryRod, currentRod];
    }

    visitedRods[currentRod] = currentRod;
  }
};

console.log(findTwoRodsToFit([1.5, 2.3, 3, 3.2], 5.5));
