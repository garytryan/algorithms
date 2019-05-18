const twoSum = (target, numbers) => {
  const tableOfNumbers = numbers.reduce((table, num) => {
    table[num] = true
    return table
  }, {})

  return !!numbers.find(num => tableOfNumbers[target - num])
}

console.log('twoSum(4, [1, 2, 3] should equal true: ', twoSum(4, [1, 2, 3]) === true)
console.log('twoSum(1, [1, 2, 3] should equal false: ', twoSum(1, [1, 2, 3]) === false)
