/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let num = 0;
  for (let index = 0; index < matrix.length; index++) {
    for (let ind = 0; ind < matrix[index].length; ind++) {
      if (index === 0) num += matrix[index][ind];
      else if (matrix[index - 1][ind] !== 0) num += matrix[index][ind];
    }
  }
  return num;
}

module.exports = getMatrixElementsSum;
