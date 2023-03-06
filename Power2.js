const powersOfTwo = (n) => new Array(n+1).fill(n).reduce((acc,e,i) => [...acc, 2**i],[]);
