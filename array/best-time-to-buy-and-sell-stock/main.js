/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {
    let profit = 0
    for(let i = 1, buy = prices[0]; i < prices.length; i++){
        if(buy > prices[i]) buy = prices[i]
        else{
            let aux = prices[i] - buy
            if(aux > profit) profit = aux 
        }
    }
    return profit
};