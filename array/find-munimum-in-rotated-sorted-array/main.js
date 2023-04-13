/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[right] > nums[0] || nums.length === 1) return nums[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];

    if (nums[mid] < nums[mid - 1]) return nums[mid];

    if (nums[mid] > nums[0]) left = mid + 1;
    else right = mid - 1;
  }
}
