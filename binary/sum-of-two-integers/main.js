/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
}

  return a;
}

console.log(getSum(7, 3));
module.exports = {
  getSum,
};
