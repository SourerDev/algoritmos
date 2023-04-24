import maxProduct from "./main";

describe('maxProduct', () => {
    test('returns the maximum product of a subarray', () => {
      expect(maxProduct([2, 3, -2, 4])).toBe(6);
      expect(maxProduct([-2, 0, -1])).toBe(0);
      expect(maxProduct([-1, -2, -9, -6])).toBe(108);
      expect(maxProduct([0, 1, -2, 3, -4, 5, -6, 7, -8, 9])).toBe(362880);
      expect(maxProduct([-2, 3, -4])).toBe(24);
    });
  
    test('returns the only element if there is only one element in the array', () => {
      expect(maxProduct([4])).toBe(4);
      expect(maxProduct([-2])).toBe(-2);
      expect(maxProduct([0])).toBe(0);
    });
  
    test('works with arrays that contain both positive and negative integers', () => {
      expect(maxProduct([2, -3, 4, -5])).toBe(120);
      expect(maxProduct([-1, 2, -3, 4, -5])).toBe(120);
      expect(maxProduct([-2, 3, -4, 5])).toBe(120);
    });
  
    test('works with arrays that contain only negative integers', () => {
      expect(maxProduct([-2, -3, -4, -5])).toBe(120);
      expect(maxProduct([-1, -2, -9, -6])).toBe(108);
      expect(maxProduct([-1, -2, -3, -4, -5])).toBe(120);
    });
  
    test('works with arrays that contain a mix of positive integers, negative integers, and zeros', () => {
      expect(maxProduct([0, 2, 3, -2, 4, 0])).toBe(6);
      expect(maxProduct([0, -2, 0, -1])).toBe(0);
      expect(maxProduct([0, 1, 0, -2, 3, -4, 5, -6, 7, -8, 9, 0])).toBe(362880);
      expect(maxProduct([0, -2, 3, -4])).toBe(24);
    });
  });
  