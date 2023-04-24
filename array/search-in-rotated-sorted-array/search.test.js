import search from "./main";

describe("search", () => {
    it("should return the index of the target element if it exists in the sorted array", () => {
      expect(search([1, 3, 5, 7, 9], 5)).toEqual(2);
      expect(search([1, 3, 5, 7, 9], 1)).toEqual(0);
      expect(search([1, 3, 5, 7, 9], 9)).toEqual(4);
    });
  
    it("should return -1 if the target element does not exist in the sorted array", () => {
      expect(search([1, 3, 5, 7, 9], 2)).toEqual(-1);
      expect(search([1, 3, 5, 7, 9], 6)).toEqual(-1);
      expect(search([1, 3, 5, 7, 9], 10)).toEqual(-1);
    });
  
    it("should work correctly with a sorted but rotated array", () => {
      expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
      expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toEqual(0);
      expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toEqual(6);
    });
  });
  