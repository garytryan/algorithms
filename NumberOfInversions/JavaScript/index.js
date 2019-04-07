const numberOfInversions = values => {
  const mergeAndCount = ([left, leftCount], [right, rightCount]) => {
    let count = leftCount + rightCount;
    let leftPointer = 0;
    let rightPointer = 0;

    const mergedValues = [];

    while (leftPointer < left.length || rightPointer < right.length) {
      const leftValue = left[leftPointer] || Infinity;
      const rightValue = right[rightPointer] || Infinity;

      if (leftValue <= rightValue) {
        mergedValues.push(leftValue);
        leftPointer++;
      } else {
        mergedValues.push(rightValue);
        rightPointer++;
        count += left.length - leftPointer;
      }
    }

    return [mergedValues, count];
  };

  const divideAndMergeCount = values => {
    if (values.length == 1) {
      return [values, 0];
    }

    const midPoint = Math.ceil(values.length / 2);

    const left = divideAndMergeCount(values.slice(0, midPoint));
    const right = divideAndMergeCount(values.slice(midPoint));

    return mergeAndCount(left, right);
  };

  return divideAndMergeCount(values)[1];
};

console.log(numberOfInversions([3, 2, 5, 4, 1]));
