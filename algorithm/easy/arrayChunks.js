const getChunks = (chunk, a) => {
  let results = [];
  while (a.length) {
    results.push(a.splice(0, chunk));
  }
  return results;
};
