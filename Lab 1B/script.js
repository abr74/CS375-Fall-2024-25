// function sumDiagonals (arr, row, column){
//     let sum = 0;

//     let diagonals = []
//     let topLeft = (typeof(arr[row - 1][column - 1]) === undefined ? 0 : arr[row - 1][column - 1]);
//     let topRight = (typeof(arr[row - 1][column + 1]) === 'undefined' ? 0 : arr[row - 1][column + 1]);
//     let bottomLeft = (typeof(arr[row + 1][column - 1]) === 'undefined' ? 0 : arr[row + 1][column - 1]);
//     let bottomRight = (typeof(arr[row + 1][column + 1]) === 'undefined' ? 0 : arr[row + 1][column + 1]);
    
//     sum = topLeft + topRight + bottomLeft + bottomRight;
//     return topLeft;
// }

// arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

// console.log(sumDiagonals(arr, 0, 0));

let x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < x[i].length; j++) {
    console.log(x[i][j] + 1); 
  }
    console.log(x); 
 }
