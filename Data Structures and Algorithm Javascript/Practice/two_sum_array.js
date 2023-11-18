const twoSum = function (nums, target) {
    const objTemp = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (objTemp[target - num] != null) {
        return [objTemp[target - num], i];
      }
      objTemp[num] = i;
    }
  };

  
console.log(twoSum([2,7,11,15,-2],22));