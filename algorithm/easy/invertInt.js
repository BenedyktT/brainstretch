const str = (arr) => {
  return JSON.stringify(arr);
};

const invert = (arr) => {
  if (!arr.length) return [];
  return arr.map((e) => e * -1);
};

console.log(str(invert([1, 20, 3, 4, 5])) === str([-1, -20, -3, -4, -5]));
console.log(str(invert([1, -2, 3, -4, 5])) === str([-1, 2, -3, 4, -5]));
console.log(str(invert([])) === str([]));
