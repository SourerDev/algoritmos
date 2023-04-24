import  maximumSubarray from "./main";

describe('maximumSubarray', () => {
  test('should return the maximum sum of a subarray', () => {
    const nums = [1, -2, 3, 4, -1, 2, 1, -5, 4];
    const result = maximumSubarray(nums);
    expect(result).toBe(9);
  });

  test('should return the maximum sum when all elements are negative', () => {
    const nums = [-2, -3, -1, -5];
    const result = maximumSubarray(nums);
    expect(result).toBe(-1);
  });

  test('should return the maximum sum when all elements are positive', () => {
    const nums = [2, 3, 1, 5];
    const result = maximumSubarray(nums);
    expect(result).toBe(11);
  });

  test('should return the only element when the array has only one element', () => {
    const nums = [5];
    const result = maximumSubarray(nums);
    expect(result).toBe(5);
  });

  test('should return 0 when the array is empty', () => {
    const nums = [];
    const result = maximumSubarray(nums);
    expect(result).toBe(0);
  });
});
