let flatten = (arrays) => arrays.reduce((a, b) => a.concat(b));
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
