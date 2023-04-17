import containsDuplicate from "./main";

describe("containsDuplicate", () => {
    it("Debería devolver true si hay un número duplicado en la matriz", () => {
      const nums = [1, 2, 3, 1];
      expect(containsDuplicate(nums)).toBe(true);
    });
  
    it("Debería devolver true si hay varios números duplicados en la matriz", () => {
      const nums = [1, 2, 3, 1, 4, 5, 3];
      expect(containsDuplicate(nums)).toBe(true);
    });
  
    it("Debería devolver false si no hay números duplicados en la matriz", () => {
      const nums = [1, 2, 3, 4, 5];
      expect(containsDuplicate(nums)).toBe(false);
    });
  
    it("Debería devolver false si la matriz está vacía", () => {
      const nums = [];
      expect(containsDuplicate(nums)).toBe(false);
    });
  });
  