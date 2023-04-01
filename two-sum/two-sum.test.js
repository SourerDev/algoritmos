import twoSum from "./main";

describe('twoSum()', () => {
    it('should return an empty array if the input array is empty', () => {
      const nums = [];
      const target = 10;
      expect(twoSum(nums, target)).toEqual([]);
    });
  
    it('should return an empty array if no two numbers in the input array add up to the target', () => {
      const nums = [1, 2, 3, 4];
      const target = 10;
      expect(twoSum(nums, target)).toEqual([]);
    });
  
    it('should return an array with the indices of the two numbers that add up to the target', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      expect(twoSum(nums, target)).toEqual([0, 1]);
    });
  
    it('should work correctly with negative numbers', () => {
      const nums = [-3, 4, 3, 90];
      const target = 0;
      expect(twoSum(nums, target)).toEqual([0, 2]);
    });
  });
  
