var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            var twoSum = Number(nums[i]) + Number(nums[j]);
            if (twoSum === target) {
                return [i, j];
            }
        }
    }
};

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); 