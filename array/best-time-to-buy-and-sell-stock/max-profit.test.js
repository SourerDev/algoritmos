import maxProfit from "./main";

describe('maxProfit()',()=>{
    it('should return 0 if the input array is empty', () => {
        const prices = []
        expect(maxProfit(prices)).toEqual(0)
    });
    it('should return the corrext output', () => {
        const prices = [7,1,5,3,6,4]
        expect(maxProfit(prices)).toEqual(5)
    });
    it("should ruturn 0 when no transactions are done",()=>{
        const prices = [7,6,4,3,1]
        expect(maxProfit(prices)).toEqual(0)
    })
})