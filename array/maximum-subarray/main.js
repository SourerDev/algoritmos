/**
 * @param {number[]} nums
 * @return {number}
 */
export default function maximumSubarray(nums) {
    if(!nums?.length) return 0

    let maxSum = nums[0]
    let curSum = 0

    for(let i in nums){
        if(curSum < 0) curSum = 0
        curSum += nums[i];
        maxSum = Math.max(maxSum,curSum)
    }

    return maxSum
};