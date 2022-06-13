
import java.util.Arrays;

public class Solution {

    private static final int NOT_POSSIBLE = -1;

    public int minOperations(int[] nums, int targetSum) {
        int totalSum = Arrays.stream(nums).sum();
        int minOperations = Integer.MAX_VALUE;
        int currentSum = 0;
        int left = 0;

        for (int right = 0; right < nums.length; ++right) {
            currentSum += nums[right];
            while (left <= right && totalSum - currentSum < targetSum) {
                currentSum -= nums[left];
                ++left;
            }
            if (totalSum - currentSum == targetSum) {
                minOperations = Math.min(minOperations, left + nums.length - right - 1);
            }
        }
        return minOperations != Integer.MAX_VALUE ? minOperations : NOT_POSSIBLE;
    }
}
