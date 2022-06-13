
#include <vector>
using namespace std;

class Solution {
    
    inline static const int NOT_POSSIBLE = -1;

public:
    int minOperations(vector<int>& nums, int targetSum) {
        int totalSum = accumulate(nums.begin(), nums.end(), 0);
        int minOperations = INT_MAX;
        int numberOfElements = nums.size();
        int currentSum = 0;
        int left = 0;

        for (int right = 0; right < numberOfElements; ++right) {
            currentSum += nums[right];
            while (left <= right && totalSum - currentSum < targetSum) {
                currentSum -= nums[left];
                ++left;
            }
            if (totalSum - currentSum == targetSum) {
                minOperations = min(minOperations, left + numberOfElements - right - 1);
            }
        }
        return minOperations != INT_MAX ? minOperations : NOT_POSSIBLE;
    }
};
