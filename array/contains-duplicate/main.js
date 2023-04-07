/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default function  containsDuplicate(nums) {
    return nums.length !== Array.from(new Set(nums)).length
};