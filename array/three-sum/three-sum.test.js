import threeSum from "./main";

describe('threeSum', () => {
    it('returns the correct result for [-1, 0, 1, 2, -1, -4]', () => {
      const nums = [-1, 0, 1, 2, -1, -4];
      const expected = [[-1, -1, 2], [-1, 0, 1]];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
    });
  
    it('returns an empty array for [0, 1, 1]', () => {
      const nums = [0, 1, 1];
      const expected = [];
      expect(threeSum(nums)).toEqual(expected);
    });
  
    it('returns the correct result for [0, 0, 0]', () => {
      const nums = [0, 0, 0];
      const expected = [[0, 0, 0]];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
    });
  });
  