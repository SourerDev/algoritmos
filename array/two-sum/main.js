/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if(map.has(complement)){
        return [map.get(complement),i]
    }
    map.set(nums[i],i)
  }
  return [];
}

const NUMS = [2, 7, 11, 15]
const TARGET = 9
twoSum(NUMS, TARGET);