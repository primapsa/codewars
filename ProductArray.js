const productArray = (numbers) => numbers.map((e, i) => numbers.reduce((acc, num, ind) => i !== ind ? acc *= num : acc, 1))



