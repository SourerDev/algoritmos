/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const solutions = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const total = nums[i] + nums[j] + nums[k];
        if (total === 0) {
          solutions.add([nums[i], nums[j], nums[k]].toString());
          j++;
          k--;
        } else if (total > 0) {
          k--;
        } else {
          j++;
        }
      }
    }
    return Array.from(solutions, (s) => s.split(",").map((n) => parseInt(n)));
  };