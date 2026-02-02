const threeSum = (nums) => {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length -1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          return [nums[i] , nums[j] , nums[k]];
        }
      }
    }
  }
  return null
};
console.log(threeSum([-1,0,1,2,-1,-4]))

// Time: O(n3)
// Space: O(1)