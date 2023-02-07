
const array = (arr) => (arr.split(',').length <=2) ? null : arr.split(',').slice(1,-1).join(' ');
