const multiplyMatrix = (matrixA, matrixB) => {
  let product = [];

  for (let i = 0; i < matrixA.length; i++) {
    product.push([]);

    for (let j = 0; j < matrixA[i].length; j++) {
      for (let k = 0; k < matrixA[i].length; k++) {
        if (!product[i][j]) {
          product[i][j] = 0;
        }

        product[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return product;
};

matrixA = [[1, 2], [3, 4]];
matrixB = [[5, 6], [7, 8]];

console.log(multiplyMatrix(matrixA, matrixB));
