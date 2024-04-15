const dublicateCount = text => {
   const dublicates = [...text].reduce((d, char) => {
       const lowered = char.toLowerCase()
       d[lowered] ? d[lowered] += 1 : d[lowered] = 1
        return d
   } , {})
    return Object.values(dublicates).filter(char => char > 1).length
}
console.log(dublicateCount('aabbscd'))