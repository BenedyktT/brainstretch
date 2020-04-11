const sockMerchant = (arr) => {
  let count = 0;
  let duplicates = [];
  arr.forEach((e) => {
    const findIndex = duplicates.indexOf(e);
    if (findIndex !== -1) {
      count++;
      duplicates.splice(findIndex, 1);
    } else {
      duplicates.push(e);
    }
  });
  return count;
};

const arr = [10, 20, 20, 10, 50, 10, 50, 10, 50, 50];

console.log(sockMerchant(arr));
