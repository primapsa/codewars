const bandNameGenerator = (str) => {
    const woUpper = str.slice(1).toLowerCase()
    const modified = str[0].toUpperCase() + woUpper;

    return str[0] === str[str.length - 1] ? modified + woUpper : `The ${modified}`
}