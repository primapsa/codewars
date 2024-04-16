const generateHashtag = (str) => {
    const trimmed = str.trim()
    if(!trimmed) return false
    const replaced = trimmed.replace(/ {2,}/, ' ')
    const hashed =  '#' + replaced.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    return  hashed.length > 140 ? false : hashed
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))