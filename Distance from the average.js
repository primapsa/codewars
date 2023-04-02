const distancesFromAverage = (arr) => {
    let avg = arr.reduce((acc, e) => acc + e, 0) / arr.length
    avg = (Math.trunc(avg * 100)) / 100
    return arr.map(e => Math.trunc((avg - e) * 100) / 100)
}
