function boredom(staff) {
    const dep = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25
    }

    const sum = Object.values(staff).reduce((acc, e) => acc + +dep[e], 0)
    return sum >= 100 ? 'party time!!' : sum <= 80 ? 'kill me now' : 'i can handle this'
}