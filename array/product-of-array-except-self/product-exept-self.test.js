import productExceptSelf from "./main";

describe("productExceptSelf", () => {
    it("Should return an empty array if given an empty array", () => {
      expect(productExceptSelf([])).toEqual([]);
    });
  
    it("Should return an array of one element if given an array of one element", () => {
      expect(productExceptSelf([2])).toEqual([1]);
    });
  
    it("Should return an array with correct products of all elements except current index", () => {
      expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
      expect(productExceptSelf([5, 3, 4, 2])).toEqual([24, 40, 30, 60]);
      expect(productExceptSelf([0, 2, 3, 4])).toEqual([24, 0, 0, 0]);
      expect(productExceptSelf([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6]);
    });
  });
  
  