function fizzBuzzReloaded(start, stop, step, functions) {
    const arrayCount = Math.floor((stop - start) / step)
    const arr = new Array(arrayCount + 1).fill(start).map((n, i) => n + (i * step))

    const params = Array.from(functions.entries());
    return arr.map(e => {
        const container = [];
        params.forEach(p => {
            [repalacement, fn] = p;
            if (fn(e)) container.push(repalacement)
        })
        return container.length ? container.join('') : e
    }).join(' ')

}