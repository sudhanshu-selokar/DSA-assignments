var removeDuplicates = function(nums) {
    let k = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i + 1];
            k++;
        }
    }
    return k;
};

// Example usage
let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5];
let k = removeDuplicates(nums);
console.log('k:', k); 
console.log('Updated array:', nums.slice(0, k)); 