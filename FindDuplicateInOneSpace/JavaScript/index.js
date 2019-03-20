const findDuplicate = a => {
  const findDuplicateRecursive = (start, end) => {
    if (end - start == 0) return start;

    const range = Math.ceil((end - start) / 2);
    const middle = Math.floor((end - start) / 2) + start;

    const count = a.reduce((count, item) => {
      if (item >= start && item <= middle) {
        count++;
      }

      return count;
    }, 0);

    return count > range
      ? findDuplicateRecursive(start, middle)
      : findDuplicateRecursive(middle + 1, end);
  };

  return findDuplicateRecursive(1, a.length);
};

// TESTS

console.log("[1, 2, 3, 1]: ", findDuplicate([1, 2, 3, 1]) === 1);
console.log("[1, 1, 1, 1]: ", findDuplicate([1, 1, 1, 1]) === 1);
console.log("[1, 1, 2, 3]: ", findDuplicate([1, 1, 2, 3]) === 1);
console.log("[1, 3, 3]: ", findDuplicate([1, 3, 3]) === 3);
console.log("[3, 3, 3]: ", findDuplicate([3, 3, 3]) === 3);
console.log("[3, 3, 1]: ", findDuplicate([3, 3, 1]) === 3);
