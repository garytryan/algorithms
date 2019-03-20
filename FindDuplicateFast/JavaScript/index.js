const findDuplicate = a => {
  let isCounting = false;
  let count = 0;
  let firstPointer = a[a.length - 1];
  let secondPointer = a[a.length - 1];
  secondPointer = a[secondPointer - 1];

  while (true) {
    if (firstPointer === secondPointer && isCounting) {
      break;
    }

    if (firstPointer === secondPointer && !isCounting) {
      isCounting = true;
    }

    if (isCounting) {
      count++;
    }

    firstPointer = a[firstPointer - 1];
    secondPointer = a[secondPointer - 1];
    secondPointer = a[secondPointer - 1];
  }

  let links = a.length - count;
  let pointer = a[a.length - 1];
  for (; links > 1; links--) {
    pointer = a[pointer - 1];
  }

  return pointer;
};

// TESTS
console.log("[4, 3, 1, 1, 4]: ", findDuplicate([4, 3, 1, 1, 4]) === 4);
console.log("[3, 4, 2, 3, 1, 5]: ", findDuplicate([3, 4, 2, 3, 1, 5]) === 3);
console.log("[3, 1, 2, 2]: ", findDuplicate([3, 1, 2, 2]) === 2);
