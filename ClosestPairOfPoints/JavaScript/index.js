const closestPair = points => {
  const computeDistance = (pointA, pointB) =>
    Math.sqrt(
      Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2)
    );

  const searchClosestPair = points => {
    let pointA,
      pointB,
      closestDistance = null;

    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance =
          computeDistance(points[i], points[j]) < closestDistance;

        if (closestDistance == null || distance < closestDistance) {
          closestDistance = distance;
          pointA = points[i];
          pointB = points[j];
        }
      }
    }

    return [pointA, pointB];
  };

  const closestPairRecursive = points => {
    if (points.length <= 3) {
      return points;
    }

    const middle = Math.floor(points.length / 2);

    const left = searchClosestPair(
      closestPairRecursive(points.slice(0, middle))
    );

    const right = searchClosestPair(closestPairRecursive(points.slice(middle)));

    const leftDistance = computeDistance(left[0], left[1]);
    const rightDistance = computeDistance(right[0], right[1]);

    return leftDistance < rightDistance ? left : right;
  };

  points = points.slice().sort((a, b) => a[0] - b[0]);

  return closestPairRecursive(points);
};

console.log(closestPair([[0, 0], [4, 3], [1, 1], [3, 3], [6, 6], [9, 9]]));
