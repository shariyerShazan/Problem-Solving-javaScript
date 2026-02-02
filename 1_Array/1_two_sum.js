const twoSum = (numberArr, target) => {
  for (let i = 0; i < numberArr.length - 1; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] + numberArr[j] == target) {
        return [i, j];
      }
    }
  }
  return null
};
console.log(twoSum([2, 7, 11, 15], 18));
