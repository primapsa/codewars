function rgb  (r,g,b) {
    const inRange = num => {
        num = Math.round(num)
        return num > 255 ? 255 : Math.max(0, num)
    }
    const toHex = num => {
        num = inRange(num).toString(16).toUpperCase()
        return num.length > 1 ? num : `0${num}`
    }
    return Array.from(arguments).reduce((hex, dec) => hex+= toHex(dec), '')
}
console.log(rgb(131, 177, 11))