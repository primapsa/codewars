const findOutlier = (integers) => {
    const copy = [...integers]
    const oddCount = copy.slice(0,3).filter( num => num % 2 === 0).length;
    return copy.find(num => oddCount > 1 ? num % 2 !== 0 : num % 2 === 0  )
}
console.log(findOutlier([0,1,2]))