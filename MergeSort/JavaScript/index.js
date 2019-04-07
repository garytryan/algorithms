const mergeSort = values => {
  const merge = (left, right) => {
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
      }
    }

    return mergedValues;
  };

  const divideAndMerge = values => {
    if (values.length == 1) {
      return values;
    }

    const midPoint = Math.ceil(values.length / 2);

    const left = divideAndMerge(values.slice(0, midPoint));
    const right = divideAndMerge(values.slice(midPoint));

    return merge(left, right);
  };

  return divideAndMerge(values);
};

console.log(mergeSort([2, 4, 5, 3, 1]));
