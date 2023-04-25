import maxArea from "./main";

describe('maxArea', () => {
    it('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
      const height = [1,8,6,2,5,4,8,3,7];
      const result = maxArea(height);
      expect(result).toBe(49);
    });
  
    it('should return 1 for [1,1]', () => {
      const height = [1,1];
      const result = maxArea(height);
      expect(result).toBe(1);
    });
  
    it('should return 0 for []', () => {
      const height = [];
      const result = maxArea(height);
      expect(result).toBe(0);
    });
  });