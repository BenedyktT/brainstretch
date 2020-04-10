const diagonalDifference = (arr) => {
  const diagonalRight = arr.reduce((acc, curr, i) => {
    return (acc += curr[i]);
  }, 0);
  let arrayLength = [];
  arr.forEach((e) => (arrayLength = [...arrayLength, ...e]));

  const diagonalLeft = arr.reduce((acc, curr, i, a) => {
    return (acc += curr[arr.length - 1 - i]);
  }, 0);
  return Math.abs(diagonalRight - diagonalLeft);
};

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const test = diagonalDifference(arr);
console.log(test);

/* 3, 4, 5 */
/* 6, 10, 8 */
/* 42, 10,11 */

/* 3 */
/* 11 2 4 */
/* 4 5 6 */
/* 10 8 -12 */
