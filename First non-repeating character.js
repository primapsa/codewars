function firstNonRepeatingLetter (s){
    const unique = [...s].reduce((acc, char) => {
        const lowerChar = char.toLowerCase()
        acc[lowerChar] ? acc[lowerChar].count = acc[lowerChar].count + 1 :  acc[lowerChar] = {value: char, count: 1}
        return acc
    },{})
    return Object.values(unique).find(el => el.count === 1)?.value || ''
}

