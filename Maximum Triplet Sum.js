
const maxTriSum = (numbers) =>  Array.from(new Set(numbers))
        .sort((a,b) => b - a)
        .filter((e,i) => i < 3)
        .reduce((acc,el) => acc + el)



