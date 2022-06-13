
/**
 * @param {number[]} nums
 * @param {number} targetSum
 * @return {number}
 */
var minOperations = function (nums, targetSum) {
    const NOT_POSSIBLE = -1;
    let totalSum = nums.reduce((x, y) => x + y);
    let minOperations = Number.MAX_SAFE_INTEGER;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; ++right) {
        currentSum += nums[right];
        while (left <= right && totalSum - currentSum < targetSum) {
            currentSum -= nums[left];
            ++left;
        }
        if (totalSum - currentSum === targetSum) {
            minOperations = Math.min(minOperations, left + nums.length - right - 1);
        }
    }
    return minOperations !== Number.MAX_SAFE_INTEGER ? minOperations : NOT_POSSIBLE;
};
