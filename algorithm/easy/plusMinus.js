function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach((e) => {
    if (Math.sign(e) === 1) {
      positive++;
      return;
    }
    if (Math.sign(e) === -1) {
      negative++;
      return;
    } else {
      zero++;
      return;
    }
  });
  positive = (positive / arr.length).toFixed(5);
  negative = (negative / arr.length).toFixed(5);
  zero = (zero / arr.length).toFixed(5);
  return [positive, negative, zero];
}

const arr = [-4, 3, -9, 0, 4, 1];
const test = plusMinus(arr);
console.log(test);
