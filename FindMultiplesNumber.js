
const findMultiples = (integer, limit) => new Array(Math.floor(limit / integer)).fill(integer).map((e, i) => e * (i + 1));
console.log(findMultiples(5,25))