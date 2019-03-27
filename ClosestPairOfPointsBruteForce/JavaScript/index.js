const closestPair = points => {
  let pointA = points[0];
  let pointB = points[1];

  const computeDistance = (pointA, pointB) =>
    Math.sqrt(
      Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2)
    );

  let closestDistance = computeDistance(pointA, pointB);

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = Math.max(i + 1, 1); j < points.length; j++) {
        for (let j = Math.max(i + 1, 1); j < points.length; j++) {
      const distance = computeDistance(points[i], points[j]);

      if (distance < closestDistance) {
        closestDistance = distance;
        pointA = points[i];
        pointB = points[j];
      }
    }
  }

  return [pointA, pointB];
};

console.log(closestPair([[0, 0], [1, 1], [3, 3], [3, 4]]));
