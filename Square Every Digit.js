const squareDigits = (num) => parseInt(String(num).split('').map(n => Math.pow(parseInt(n), 2)).join(''))