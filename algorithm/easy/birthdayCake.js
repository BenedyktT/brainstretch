function birthdayCakeCandles(ar) {
  const max = Math.max(...arr);
  const duplicate = ar.indexOf(max);
  if (duplicate === -1) {
    return 1;
  }

  return ar.filter((e) => e === max).length;
}

const arr = [1, 3, 4, 4, 5, 5, 5, 1];

console.log(birthdayCakeCandles(arr));
