import containsDuplicate from "./main";

describe("containsDuplicate", () => {
    it("Should return true if there is a duplicated number in the array", () => {
      const nums = [1, 2, 3, 1];
      expect(containsDuplicate(nums)).toBe(true);
    });
  
    it("Should return true if there are multiple duplicated numbers in the array", () => {
      const nums = [1, 2, 3, 1, 4, 5, 3];
      expect(containsDuplicate(nums)).toBe(true);
    });
  
    it("Should return false if there are no duplicated numbers in the array", () => {
      const nums = [1, 2, 3, 4, 5];
      expect(containsDuplicate(nums)).toBe(false);
    });
  
    it("Should return false if the array is empty", () => {
      const nums = [];
      expect(containsDuplicate(nums)).toBe(false);
    });
  });
  