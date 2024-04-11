const likes = names => {
    const   namesCopy = [...names]
    let phrase;
    const length = names.length
    switch(true){
         case length === 0:
            phrase = 'no one likes this'
            break;
        case length === 1:
            phrase = namesCopy.toString() + ' likes this'
            break
        case length === 2:
            phrase = namesCopy.join(' and ') + ' like this'
            break
        case length === 3:
        {
            const startNames = namesCopy.splice(0, 2)
            phrase = `${startNames.join(', ')} and ${namesCopy.toString()} like this`
            break
        }

        case length > 3:
            const startNames = namesCopy.splice(0, 2)
            phrase = `${startNames.join(', ')} and ${namesCopy.length} others like this`
            break
    }
    return phrase
}
