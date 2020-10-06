
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  if (matrix.length === 0) return [];
  let res = matrix[0];
  for (var i = 1; i<matrix.length; i++) {
    if (i % 2 !== 0)  {
      res = res.concat(matrix[i].reverse())
    } else res = res.concat(matrix[i]);
  };
  return res;
};
