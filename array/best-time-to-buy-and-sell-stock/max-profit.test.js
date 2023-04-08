import maxProfit from "./main";

describe("maxProfit()", () => {
  it("should return 0 if the input array is empty", () => {
    const prices = [];
    expect(maxProfit(prices)).toBe(0);
  });
  it("should return 5 for [7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("should return 2 for [2,4,1]", () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  it("should ruturn 0 when no transactions are done", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});
