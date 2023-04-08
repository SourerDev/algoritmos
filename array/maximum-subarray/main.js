/**
 * @param {number[]} nums
 * @return {number}
 */
export default function maximumSubarray(nums) {
    let maxSum = nums[0]
    let curSum = 0

    for( i in nums){
        if(curSum < 0) curSum = 0
        curSum += nums[i];
        maxSum = Math.max(maxSum,curSum)
    }

    return maxSum
};