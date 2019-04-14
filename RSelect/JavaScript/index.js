const rSelect = (array, index) => {
  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const partition = (start, end) => {
    const pivot = array[start];
    let boundary = start + 1;

    for (let index = boundary; index < end; index++) {
      if (array[index] < pivot) {
        swap(boundary, index);
        boundary++;
      }
    }

    swap(start, boundary - 1);

    return boundary - 1;
  };

  const recursiveSubroutine = (start, end) => {
    const pivot = start + Math.round(Math.random() * (end - start - 1));
    swap(pivot, start);

    const position = partition(start, end);

    if (position === index) {
      return array[position];
    } else if (position > index) {
      return recursiveSubroutine(start, position);
    } else {
      return recursiveSubroutine(position + 1, end);
    }
  };

  return recursiveSubroutine(0, array.length);
};

console.log("Answer[0]: ", rSelect([8, 9, 5, 3, 4, 1], 0));
console.log("Answer[1]: ", rSelect([8, 9, 5, 3, 4, 1], 1));
console.log("Answer[2]: ", rSelect([8, 9, 5, 3, 4, 1], 2));
console.log("Answer[3]: ", rSelect([8, 9, 5, 3, 4, 1], 3));
console.log("Answer[4]: ", rSelect([8, 9, 5, 3, 4, 1], 4));
console.log("Answer[5]: ", rSelect([8, 9, 5, 3, 4, 1], 5));
