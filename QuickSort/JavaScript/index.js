const quickSort = array => {
  const partition = (start, end) => {
    const pivot = array[start];
    let boundary = start;

    for (let i = start + 1; i < end; i++) {
      const currentValue = array[i];

      if (currentValue < pivot) {
        array[i] = array[boundary + 1];
        array[boundary + 1] = currentValue;
        boundary++;
      }
    }

    array[start] = array[boundary];
    array[boundary] = pivot;

    return boundary;
  };

  const choosePivot = (start, end) => {
    const middle = start + Math.floor((end - start - 1) / 2);

    const pivot = [start, middle, end - 1]
      .map(p => [p, array[p]])
      .sort(([a, A], [b, B]) => A - B)[1][0];

    const temp = array[pivot];
    array[pivot] = array[start];
    array[start] = temp;
  };

  const divideRecusive = (start, end) => {
    if (start >= end) {
      return;
    }

    choosePivot(start, end);
    const boundary = partition(start, end);

    divideRecusive(start, boundary);
    divideRecusive(boundary + 1, end);
  };

  divideRecusive(0, array.length);

  return array;
};

console.log(quickSort([8, 9, 5, 3, 4, 1]));
