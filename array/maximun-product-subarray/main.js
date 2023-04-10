/**
 * @param {number[]} nums
 * @return {number}
 */
export default function maxProduct(nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let maxSubarrayProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let tempMaxProduct = Math.max(curr, maxProduct * curr, minProduct * curr);
    minProduct = Math.min(curr, maxProduct * curr, minProduct * curr);
    maxProduct = tempMaxProduct;
    maxSubarrayProduct = Math.max(maxSubarrayProduct, maxProduct);
  }

  return maxSubarrayProduct;
}
