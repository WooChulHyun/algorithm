var twoSum = function(nums, target) {
    for (var i = 0; i <= nums.length - 2; i++) {
        var firstNum = nums[i];
        for (var j = i + 1; j <= nums.length - 1; j++) {
            var secondNum = nums[j];
            if (firstNum + secondNum === target) {
                return [i, j];
            }
        }
    }
};
