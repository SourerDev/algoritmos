import findMin from './main';

describe('findMin', () => {
  test('should return the minimum element in a rotated sorted array', () => {
    expect(findMin([3,4,5,1,2])).toBe(1);
    expect(findMin([4,5,6,7,0,1,2])).toBe(0);
    expect(findMin([11,13,15,17])).toBe(11);
  });

  test('should return the only element in a single-element array', () => {
    expect(findMin([5])).toBe(5);
  });

  test('should return the first element in an already sorted array', () => {
    expect(findMin([1,2,3,4,5])).toBe(1);
  });
});
