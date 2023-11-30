function noonerize(numbers) {
    const swap = arr => {
        let a = String(arr[0])
        let b = String(arr[1])
        return [Number(b[0]+a.slice(1)), Number(a[0]+b.slice(1))]
    }
    const isValidArray = numbers.every(e => Number.isInteger(e))
    if (!isValidArray) return 'invalid array'
    const swaped = swap(numbers)
    return Math.abs(swaped[0] - swaped[1])

}

