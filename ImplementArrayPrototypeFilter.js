Array.prototype.filter = function (fn) {
    return this.reduce((acc, e) => {
        return acc = (fn(e)) ? [...acc, e] : acc
    }, [])
}
